// Refresh the English HTML served by GitHub Pages to visitors and search engines.
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.join(__dirname, "..");
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, "content.js"), "utf8"), context);
const { projects, ui } = context.window.PORTFOLIO;
const en = value => Array.isArray(value) ? value[1] : value;
const escape = value => String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const text = key => `data-i18n="${key}">${escape(ui.en[key])}`;

function renderCard(project) {
  const { id, img, url, upcoming, topics, category, community } = project;
  const field = key => `data-project="${id}" data-field="${key}">${escape(en(project[key]))}`;
  const primary = url ? "project.open" : "gallery.preview";
  const href = escape(url || img);
  const link = `href="${href}" target="_blank" rel="noopener noreferrer"`;
  const title = escape(en(project.title));
  const preview = `<img src="${escape(img)}" alt="${title}" loading="lazy" width="1280" height="720" />`;
  const media = upcoming ? `<div class="project-image">${preview}</div>` :
    `<a class="project-image" ${link} aria-label="${title} — ${escape(ui.en[primary])}">${preview}<span class="project-arrow" aria-hidden="true">↗</span></a>`;
  const action = upcoming ? `<span class="demo-status" role="link" aria-disabled="true" ${text("gallery.soon")}</span>` :
    `<a ${link} ${text(primary)}</a>`;
  const collections = [category, community && "community", category !== "business" && project.collection === "pillow-key" && "business", !community && category === "explore" && "labs"].filter(Boolean);
  const topicTags = topics.map(topic => `<span ${text("gallery." + topic)}</span>`).join(" ");
  const communityLink = community ? `<a class="community-link" href="${escape(community)}" target="_blank" rel="noopener noreferrer" ${text("project.community")}</a>` : "";
  return `            <article class="project-card" data-topics="${escape(topics.join(" "))}" data-collections="${escape(collections.join(" "))}">
              ${media}
              <div class="project-info">
                <p class="eyebrow" ${field("tag")}</p>
                <h3 ${field("title")}</h3>
                <p ${field("desc")}</p>
                <div class="topic-tags">${topicTags}</div>
                <div class="project-links">
                  ${action}
                  <button type="button" data-open-project="${id}" ${text("project.details")}</button>
                </div>${communityLink ? "\n                " + communityLink : ""}
              </div>
            </article>`;
}

const file = path.join(root, "index.html");
const html = fs.readFileSync(file, "utf8").replaceAll("\r\n", "\n");
const markers = /<!-- business cards start -->[\s\S]*?<!-- business cards end -->/;
const lineageMarkers = /<!-- lineage start -->[\s\S]*?<!-- lineage end -->/;
if (!markers.test(html) || !lineageMarkers.test(html)) throw new Error("Missing portfolio markup markers");
const branches = projects.filter(project => project.collection === "pillow-key").map(project => {
  const title = escape(en(project.title));
  return `                  <li><a href="${escape(project.url || project.img)}" data-open-project="${escape(project.id)}">
                    <img src="assets/technology/report.svg" width="20" height="20" alt=""><span data-project="${escape(project.id)}" data-field="title">${title}</span>
                  </a></li>`;
});
const updated = html.replace(markers, () => `<!-- business cards start -->\n${projects.map(renderCard).join("\n")}\n            <!-- business cards end -->`)
  .replace(lineageMarkers, () => `<!-- lineage start -->\n${branches.join("\n")}\n                  <!-- lineage end -->`)
  .replace(/(<span data-count>)\d+(<\/span>)/, (_, start, end) => `${start}${projects.length}${end}`);
if (process.argv.includes("--check")) {
  if (html !== updated) throw new Error("Run node scripts/render-business-cases.cjs");
} else {
  fs.writeFileSync(file, updated);
}
