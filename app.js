"use strict";

function buildInquiryMailto(subject, body) {
  return `mailto:rampiechamorro14@gmail.com?subject=${encodeURIComponent(subject.trim().replace(/[\r\n]+/g, " "))}&body=${encodeURIComponent(body.trim().replace(/\r?\n/g, "\r\n"))}`;
}

(() => {
  const { ui, projects, services, engineering } = window.PORTFOLIO;
  let language = "en";
  let activeProject = null;
  let dialogTrigger = null;
  const dialog = document.querySelector("#project-dialog");
  const nav = document.querySelector("#main-nav");
  const menu = document.querySelector(".menu-toggle");
  const themeToggle = document.querySelector("#theme-toggle");
  const draftForm = document.querySelector("#contact-draft");
  const draftSubject = document.querySelector("#inquiry-subject");
  const draftMessage = document.querySelector("#inquiry-message");
  let draftDefaults = {
    subject: ui.en["contact.subjectDefault"],
    body: ui.en["contact.prompt"],
  };
  let inquiryContext = null;
  const localized = (value) =>
    Array.isArray(value) ? value[language === "es" ? 0 : 1] : value;
  const escape = (value) =>
    String(value).replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
  const tr = (key) => ui[language][key];

  function replaceSharedUrl(url) {
    if (location.protocol === "https:" || location.protocol === "http:") {
      history.replaceState(history.state, "", url);
    }
  }

  function updateInquiryDraft() {
    const title = inquiryContext && localized(inquiryContext.title);
    const subject = title ? tr("contact.subjectDefault") + " — " + title : tr("contact.subjectDefault");
    const opening = inquiryContext?.inquiry ? localized(inquiryContext.inquiry) : tr("contact.related");
    const body = title
      ? [tr("contact.contextGreeting"), opening, tr("contact.contextPrompt")].join("\n\n")
      : tr("contact.prompt");
    if (draftSubject.value === draftDefaults.subject) draftSubject.value = subject;
    if (draftMessage.value === draftDefaults.body) draftMessage.value = body;
    draftDefaults = { subject, body };
    const email = document.querySelector('.contact-actions a[href^="mailto:"]');
    email.href = title ? buildInquiryMailto(draftSubject.value, draftMessage.value) : "mailto:rampiechamorro14@gmail.com";
  }

  function updateThemeControl() {
    const isDark = document.documentElement.dataset.theme === "dark";
    const label = tr(isDark ? "theme.light" : "theme.dark");
    themeToggle.setAttribute("aria-label", label);
    themeToggle.title = label;
    themeToggle.setAttribute("aria-pressed", String(isDark));
    document.querySelector('meta[name="theme-color"]').content = isDark
      ? "#0a1324"
      : "#f6f8fc";
  }

  themeToggle.addEventListener("click", () => {
    const next =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("ra-theme-v2", next);
    } catch {
      /* Storage is optional. */
    }
    updateThemeControl();
  });

  function closeMenu() {
    nav.classList.remove("is-open");
    menu.setAttribute("aria-expanded", "false");
  }

  function showProject(id) {
    const p = projects.find((project) => project.id === id);
    if (!p) return;
    activeProject = id;
    const section = (key, field) =>
      `<section><h3>${escape(tr(key))}</h3><p>${escape(localized(p[field]))}</p></section>`;
    const reportLink = p.url || (!p.upcoming && p.img);
    const primaryAction = reportLink
      ? `<a class="button primary" href="${escape(reportLink)}" target="_blank" rel="noopener noreferrer">${escape(tr(p.url ? "project.open" : "gallery.preview"))}</a>`
      : `<span class="demo-status" aria-disabled="true" role="link">${escape(tr("gallery.soon"))}</span>`;
    const sourceNote = p.collection === "pillow-key"
      ? `<p class="case-source">${escape(tr("gallery.source"))}</p>` : "";
    document.querySelector("#dialog-content").innerHTML = `
      <img class="dialog-image" src="${escape(p.img)}" alt="${escape(localized(p.title))}">
      <div class="dialog-body"><p class="eyebrow">${escape(localized(p.tag))}</p>
      <h2 id="dialog-title">${escape(localized(p.title))}</h2>
      ${section("project.challenge", "question")}${section("project.approach", "approach")}${section("project.value", "value")}
      ${sourceNote}<div class="dialog-actions">${primaryAction}
      ${p.community ? `<a class="text-link" href="${escape(p.community)}" target="_blank" rel="noopener noreferrer">${escape(tr("project.community"))}</a>` : ""}</div>
      <a class="text-link case-inquiry" href="#contact-draft" data-inquiry="${escape(p.id)}">${escape(tr("case.inquire"))}</a></div>`;
    document
      .querySelector("#close-dialog")
      .setAttribute("aria-label", tr("project.close"));
    if (!dialog.open) dialog.showModal();
    document.body.classList.add("modal-open");
  }

  function setLanguage(next, persist = true) {
    language = next === "es" ? "es" : "en";
    document.documentElement.lang = language;
    document.title = tr("meta.title");
    document.querySelector('meta[name="description"]').content =
      tr("meta.description");
    document.querySelector('meta[property="og:title"]').content =
      tr("meta.title");
    document.querySelector('meta[property="og:description"]').content =
      tr("meta.description");
    document.querySelector('meta[property="og:locale"]').content =
      language === "es" ? "es_LA" : "en_US";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = tr(el.dataset.i18n);
      if (value !== undefined) el.textContent = value;
    });
    document.querySelectorAll("[data-i18n-label]").forEach((el) => {
      el.setAttribute("aria-label", tr(el.dataset.i18nLabel));
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      el.alt = tr(el.dataset.i18nAlt);
    });
    document.querySelectorAll("[data-project]").forEach((el) => {
      const p = projects.find((project) => project.id === el.dataset.project);
      el.textContent = localized(p[el.dataset.field]);
    });
    document.querySelectorAll(".project-card").forEach((card) => {
      const projectButton = card.querySelector("[data-open-project]");
      if (!projectButton) return;
      const id = projectButton.dataset.openProject;
      const p = projects.find((project) => project.id === id);
      const previewLink = card.querySelector("a.project-image");
      if (previewLink) {
        const action = tr(p.url ? "project.open" : "gallery.preview");
        previewLink.setAttribute("aria-label", `${localized(p.title)} — ${action}`);
      }
      card.querySelector("img").alt = localized(p.title);
    });
    document.querySelectorAll("[data-service]").forEach((el) => {
      const s = services[Number(el.dataset.service)];
      const { field, item } = el.dataset;
      let value = s[field];
      if (field === "items") value = s.items[Number(item)];
      if (field === "proof") value = s.proof[Number(item)].label;
      el.textContent = localized(value);
    });
    document.querySelectorAll("[data-engineering]").forEach((el) => {
      const c = engineering.find((item) => item.id === el.dataset.engineering);
      const value =
        el.dataset.field === "flow"
          ? c.flow[Number(el.dataset.item)]
          : c[el.dataset.field];
      el.textContent = localized(value);
    });
    document
      .querySelector(".engineering-filters")
      .setAttribute(
        "aria-label",
        language === "es"
          ? "Filtrar casos de ingeniería"
          : "Filter engineering cases",
      );
    updateThemeControl();
    document
      .querySelectorAll("[data-lang]")
      .forEach((button) =>
        button.setAttribute(
          "aria-pressed",
          String(button.dataset.lang === language),
        ),
      );
    menu.setAttribute("aria-label", tr("menu"));
    nav.setAttribute("aria-label", language === "es" ? "Principal" : "Main");
    updateInquiryDraft();
    const greeting =
      language === "es"
        ? "Hola Richard, quisiera conversar sobre un proyecto de datos."
        : "Hi Richard, I would like to discuss a data project.";
    document.querySelector('a[href^="https://wa.me/"]').href =
      `https://wa.me/50576896537?text=${encodeURIComponent(greeting)}`;
    if (dialog.open && activeProject) showProject(activeProject);
    if (persist) {
      const url = new URL(location.href);
      url.searchParams.set("lang", language);
      replaceSharedUrl(url);
      try {
        localStorage.setItem("ra-language-v2", language);
      } catch {
        /* Storage is optional. */
      }
    }
  }

  document
    .querySelectorAll("[data-lang]")
    .forEach((button) =>
      button.addEventListener("click", () => setLanguage(button.dataset.lang)),
    );
  menu.addEventListener("click", () => {
    const isOpen = menu.getAttribute("aria-expanded") === "true";
    menu.setAttribute("aria-expanded", String(!isOpen));
    nav.classList.toggle("is-open", !isOpen);
  });
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !menu.contains(event.target))
      closeMenu();
  });
  const desktopMedia = matchMedia("(min-width: 1051px)");
  desktopMedia.addEventListener("change", (event) => {
    if (event.matches) closeMenu();
  });

  document.querySelectorAll("[data-open-project]").forEach((button) =>
    button.addEventListener("click", () => {
      dialogTrigger = button;
      showProject(button.dataset.openProject);
    }),
  );
  document.querySelectorAll("[data-open-service]").forEach((link) => {
    if (typeof dialog.showModal !== "function") return;
    link.setAttribute("aria-haspopup", "dialog");
    link.setAttribute("aria-controls", dialog.id);
    link.addEventListener("click", (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const body = document.querySelector(link.hash).firstElementChild.cloneNode(true);
      body.querySelector("h2").id = "dialog-title";
      document.querySelector("#dialog-content").replaceChildren(body);
      document.querySelector("#close-dialog").setAttribute("aria-label", tr("services.close"));
      dialogTrigger = link;
      activeProject = null;
      dialog.showModal();
      dialog.scrollTop = 0;
      document.body.classList.add("modal-open");
    });
  });
  document
    .querySelector("#close-dialog")
    .addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
    activeProject = null;
    dialogTrigger?.focus();
  });

  const gallery = document.querySelector("#business-cases");
  const cards = [...gallery.querySelectorAll(".project-card")];
  const topic = gallery.querySelector("#project-topic");
  const collection = gallery.querySelector("#project-collection");
  const resetFilters = gallery.querySelector("#reset-project-filters");
  const expand = gallery.querySelector(".business-expand");
  const count = gallery.querySelector("[data-count]");
  const selectionSize = 6;
  let expanded = false;

  function updateGallery() {
    const filtered = topic.value !== "all" || collection.value !== "all";
    const matches = cards.filter(card =>
      (topic.value === "all" || card.dataset.topics.split(" ").includes(topic.value)) &&
      (collection.value === "all" || card.dataset.collections.split(" ").includes(collection.value))
    );
    const visible = filtered || expanded ? matches : matches.slice(0, selectionSize);
    cards.forEach(card => { card.hidden = !visible.includes(card); });
    count.textContent = visible.length === matches.length ? String(matches.length) : visible.length + " / " + matches.length;
    const label = count.nextElementSibling;
    label.dataset.i18n = matches.length === 1 ? "gallery.single" : "gallery.count";
    label.textContent = tr(label.dataset.i18n);
    resetFilters.hidden = !filtered;
    gallery.querySelector("#no-project-matches").hidden = matches.length > 0;
    expand.hidden = filtered || matches.length <= selectionSize;
    expand.setAttribute("aria-expanded", String(expanded));
    expand.dataset.i18n = expanded ? "gallery.less" : "gallery.more";
    expand.textContent = tr(expand.dataset.i18n);
  }

  function saveGalleryFilters() {
    const url = new URL(location.href);
    for (const [key, select] of [["topic", topic], ["collection", collection]]) {
      if (select.value === "all") url.searchParams.delete(key);
      else url.searchParams.set(key, select.value);
    }
    replaceSharedUrl(url);
  }

  const shared = new URLSearchParams(location.search);
  for (const [key, select] of [["topic", topic], ["collection", collection]]) {
    const value = shared.get(key);
    if ([...select.options].some(option => option.value === value)) select.value = value;
  }
  [topic, collection].forEach(select => select.addEventListener("change", () => {
    expanded = false;
    saveGalleryFilters();
    updateGallery();
  }));
  resetFilters.addEventListener("click", () => {
    topic.value = collection.value = "all";
    expanded = false;
    saveGalleryFilters();
    updateGallery();
    topic.focus();
  });
  expand.addEventListener("click", () => {
    expanded = !expanded;
    updateGallery();
    if (expanded) cards[selectionSize].querySelector("[href], [data-open-project]").focus();
    else topic.focus();
  });
  gallery.querySelector(".gallery-controls").hidden = false;
  updateGallery();

  document.querySelectorAll("[data-engineering-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.dataset.engineeringFilter;
      document.querySelectorAll("[data-engineering-group]").forEach((card) => {
        card.hidden =
          group !== "all" && card.dataset.engineeringGroup !== group;
      });
      document.querySelectorAll("[data-engineering-filter]").forEach((item) => {
        item.setAttribute("aria-pressed", String(item === button));
      });
    });
  });

  function revealCase(hash) {
    const target = document.getElementById(hash.slice(1));
    if (!target?.matches("details.case-detail")) return;
    if (target.closest("[hidden]")) document.querySelector('[data-engineering-filter="all"]').click();
    target.open = true;
    return target;
  }
  window.addEventListener("hashchange", () => revealCase(location.hash)?.scrollIntoView());
  revealCase(location.hash)?.scrollIntoView();
  document.addEventListener("click", event => {
    const link = event.target.closest("a[href]");
    if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const key = link.dataset.inquiry;
    if (!key) {
      if (!event.defaultPrevented && link.hash && link.origin === location.origin && link.pathname === location.pathname) {
        const target = revealCase(link.hash);
        if (target && dialog.open) {
          dialogTrigger = null;
          dialog.close();
          requestAnimationFrame(() => target.querySelector("summary").focus({ preventScroll: true }));
        }
      }
      return;
    }
    inquiryContext = services.find(s => s.id === key) || engineering.find(c => c.id === key) || projects.find(p => p.id === key);
    if (!inquiryContext) return;
    if (dialog.open) {
      dialogTrigger = null;
      dialog.close();
    }
    updateInquiryDraft();
    requestAnimationFrame(() => draftSubject.focus({ preventScroll: true }));
  });
  draftForm.addEventListener("input", () => {
    if (inquiryContext) document.querySelector('.contact-actions a[href^="mailto:"]').href = buildInquiryMailto(draftSubject.value, draftMessage.value);
  });

  draftForm.addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.assign(
      buildInquiryMailto(draftSubject.value, draftMessage.value),
    );
  });

  let savedLanguage;
  try {
    savedLanguage = localStorage.getItem("ra-language-v2");
  } catch {
    /* Defaults to English. */
  }
  const sharedLanguage = shared.get("lang");
  setLanguage(["en", "es"].includes(sharedLanguage) ? sharedLanguage : savedLanguage || "en", false);

  // Scroll feedback is visual only; it never stores visitor activity.
  const headerLinks = [...nav.querySelectorAll('a[href^="#"]')]
    .map((link) => ({
      link,
      section: document.querySelector(link.getAttribute("href")),
    }))
    .filter((item) => item.section);
  let scrollFramePending = false;
  function updateReadingState() {
    const available = document.documentElement.scrollHeight - innerHeight;
    const progress =
      available > 0 ? Math.min(1, Math.max(0, scrollY / available)) : 0;
    let current;
    let nearestTop = -Infinity;
    headerLinks.forEach((item) => {
      const top = item.section.getBoundingClientRect().top;
      if (top <= 160 && top > nearestTop) {
        current = item;
        nearestTop = top;
      }
    });
    document.documentElement.style.setProperty(
      "--reading-progress",
      String(progress),
    );
    headerLinks.forEach((item) => {
      if (item === current) item.link.setAttribute("aria-current", "location");
      else item.link.removeAttribute("aria-current");
    });
    scrollFramePending = false;
  }
  addEventListener(
    "scroll",
    () => {
      if (!scrollFramePending) {
        scrollFramePending = true;
        requestAnimationFrame(updateReadingState);
      }
    },
    { passive: true },
  );
  updateReadingState();

  if (
    "IntersectionObserver" in window &&
    !matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 35px 0px" },
    );
    document
      .querySelectorAll(
        ".section-heading, .metrics-grid, .offer-grid, .engineering-grid, .recognition, .project-grid, .about-grid, .cert-grid, .contact-grid",
      )
      .forEach((element) => {
        element.classList.add("reveal-item");
        revealObserver.observe(element);
      });
  }
})();
