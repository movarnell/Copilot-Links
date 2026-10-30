(function () {
  const latestUpdates = [
    {
      source: "Google",
      date: "2026-10-29",
      displayDate: "October 29, 2026",
      category: "ai-general-news",
      companies: ["Google", "Gemini"],
      title: "Gemini Adds Direct File Creation, Preview, and Editing",
      url: "https://blog.google/innovation-and-ai/products/gemini-app/edit-files-directly/",
      summary: "Google added in-chat generation, preview, direct editing, highlighted-text refinement, and questions for documents, PDFs, presentations, spreadsheets, Markdown, text, and code in Gemini. PDF editing works on web and mobile, while the other listed formats are web-only; Google says the features are available to all users in supported Gemini languages."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
