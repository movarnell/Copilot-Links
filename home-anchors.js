/* Keep bookmarks to the former educational homepage working. */
(() => {
  const learningAnchors = new Set(['model-lab','cost-calculator','use-cases','overview','ai-in-vscode','getting-started','quick-ref','models','resources']);
  function routeLearningBookmark() {
    if (learningAnchors.has(location.hash.slice(1))) location.replace('learning.html' + location.hash);
  }
  window.addEventListener('hashchange', routeLearningBookmark);
  routeLearningBookmark();
})();
