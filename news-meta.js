window.newsFeedMeta = {
  updatedAt: "2026-07-08T11:13:19-05:00",
  displayUpdatedAt: "July 8, 2026 at 11:13 AM CT",
  message: "Articles last updated July 8, 2026 at 11:13 AM CT.",
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
