window.newsFeedMeta = {
  updatedAt: "2026-06-11T13:15:44Z",
  displayUpdatedAt: "June 11, 2026 at 8:15 AM CT",
  message: "Articles last updated June 11, 2026 at 8:15 AM CT.",
};

(function renderNewsFeedMeta() {
  const meta = window.newsFeedMeta || {};
  const message = meta.message || (meta.displayUpdatedAt ? `Articles last updated ${meta.displayUpdatedAt}.` : "");
  if (!message) return;

  function ensureTimestamp(containerSelector, id, className) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    let element = document.getElementById(id);
    if (!element) {
      element = document.createElement("p");
      element.id = id;
      element.className = className;
      container.appendChild(element);
    }

    element.textContent = message;
    element.hidden = false;
  }

  function render() {
    ensureTimestamp(".news-sidebar-head", "news-last-updated-sidebar", "news-last-updated news-last-updated-sidebar");
    ensureTimestamp(".news-layout > .hero", "news-last-updated", "news-last-updated");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
