window.newsFeedMeta = {
  updatedAt: "2026-06-10T20:01:57Z",
  displayUpdatedAt: "June 10, 2026 at 3:01 PM CT",
  message: "Articles last updated June 10, 2026 at 3:01 PM CT.",
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
