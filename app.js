"use strict";

function buildInquiryMailto(subject, body) {
  return `mailto:rampiechamorro14@gmail.com?subject=${encodeURIComponent(subject.trim().replace(/[\r\n]+/g, " "))}&body=${encodeURIComponent(body.trim().replace(/\r?\n/g, "\r\n"))}`;
}

(() => {
  const { ui, projects, services, engineering } = window.PORTFOLIO;
  let language = "en";
  let activeProject = null;
  let lastProjectButton = null;
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
  let selectedService = null;
  let serviceSubject = "";
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
      ${p.community ? `<a class="text-link" href="${escape(p.community)}" target="_blank" rel="noopener noreferrer">${escape(tr("project.community"))}</a>` : ""}</div></div>`;
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
      el.textContent = localized(
        el.dataset.field === "items"
          ? s.items[Number(el.dataset.item)]
          : s[el.dataset.field],
      );
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
    document
      .querySelector("#projects .project-filters")
      .setAttribute(
        "aria-label",
        language === "es" ? "Filtrar proyectos" : "Filter projects",
      );
    if (draftSubject.value === draftDefaults.subject) {
      draftSubject.value = tr("contact.subjectDefault");
    } else if (
      selectedService !== null &&
      draftSubject.value === serviceSubject
    ) {
      serviceSubject = `${tr("contact.subjectDefault")} — ${localized(services[selectedService].title)}`;
      draftSubject.value = serviceSubject;
    }
    if (draftMessage.value === draftDefaults.body) {
      draftMessage.value = tr("contact.prompt");
    }
    draftDefaults = {
      subject: tr("contact.subjectDefault"),
      body: tr("contact.prompt"),
    };
    const greeting =
      language === "es"
        ? "Hola Richard, quisiera conversar sobre un proyecto de datos."
        : "Hi Richard, I would like to discuss a data project.";
    document.querySelector('a[href^="https://wa.me/"]').href =
      `https://wa.me/50576896537?text=${encodeURIComponent(greeting)}`;
    if (dialog.open && activeProject) showProject(activeProject);
    if (persist) {
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
      lastProjectButton = button;
      showProject(button.dataset.openProject);
    }),
  );
  document
    .querySelector("#close-dialog")
    .addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
    activeProject = null;
    lastProjectButton?.focus();
  });

  document.querySelectorAll(".project-filters").forEach((filters) => {
    const gallery = filters.closest("section");
    const cards = [...gallery.querySelectorAll(".project-card")];
    const count = gallery.querySelector("[data-count], #project-count");
    const expand = gallery.querySelector(".business-expand");
    const buttons = filters.querySelectorAll("[data-filter]");
    let category = "all";
    let expanded = false;
    function updateGallery() {
      const matches = cards.filter(card => category === "all" || card.dataset.category === category);
      const collapsible = expand && category === "all" && matches.length > 3;
      const visible = collapsible && !expanded ? matches.slice(0, 3) : matches;
      cards.forEach(card => { card.hidden = !visible.includes(card); });
      count.textContent = visible.length === matches.length
        ? String(matches.length) : `${visible.length} / ${matches.length}`;
      const countLabel = count.nextElementSibling;
      const noun = expand ? "gallery" : "project";
      countLabel.dataset.i18n = `${noun}.${matches.length === 1 ? "single" : "count"}`;
      countLabel.textContent = tr(countLabel.dataset.i18n);
      buttons.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.filter === category)));
      if (expand) {
        expand.hidden = !collapsible;
        expand.setAttribute("aria-expanded", String(expanded));
        expand.dataset.i18n = expanded ? "gallery.less" : "gallery.more";
        expand.textContent = tr(expand.dataset.i18n);
      }
    }
    buttons.forEach(button => button.addEventListener("click", () => {
      category = button.dataset.filter;
      expanded = false;
      updateGallery();
    }));
    expand?.addEventListener("click", () => {
      expanded = !expanded;
      updateGallery();
      if (expanded) cards[3].querySelector(".project-image[href], [data-open-project]").focus();
      else filters.querySelector('[aria-pressed="true"]').focus();
    });
    updateGallery();
  });

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

  document.querySelectorAll("[data-service-cta]").forEach((link) =>
    link.addEventListener("click", () => {
      const canPrefill =
        draftSubject.value === draftDefaults.subject ||
        draftSubject.value === serviceSubject;
      selectedService = Number(link.dataset.serviceCta);
      const service = localized(
        services[Number(link.dataset.serviceCta)].title,
      );
      const subject = encodeURIComponent(
        `${language === "es" ? "Consulta" : "Inquiry"}: ${service}`,
      );
      const email = document.querySelector(
        '.contact-actions a[href^="mailto:"]',
      );
      email.href = `mailto:rampiechamorro14@gmail.com?subject=${subject}`;
      if (canPrefill) {
        serviceSubject = `${tr("contact.subjectDefault")} — ${service}`;
        draftSubject.value = serviceSubject;
      }
    }),
  );

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
  setLanguage(savedLanguage || "en", false);

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
        ".section-heading, .metrics-grid, .service-list, .engineering-grid, .recognition, .project-grid, .about-grid, .cert-grid, .contact-grid",
      )
      .forEach((element) => {
        element.classList.add("reveal-item");
        revealObserver.observe(element);
      });
  }
})();
