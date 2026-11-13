(function () {
  const latestUpdates = [
    {
      source: "Google",
      date: "2026-11-12",
      displayDate: "November 12, 2026",
      category: "new-models",
      companies: ["Google", "Google DeepMind", "Gemini"],
      title: "Google Launches Gemini 4 Hydrogen for Fast Agentic Work",
      url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/",
      summary: "Google launched Gemini 4 Hydrogen as a faster Gemini 4 model for coding, debugging, multimodal knowledge work, and other agentic tasks. It has a 1 million-token context window, four thinking levels, and flat API pricing of $1.50 per million input tokens and $7.50 per million output tokens; Google's Antigravity Orchestrator can route between Carbon and Hydrogen or use Hydrogen for isolated worker and verifier agents. Google's benchmark, speed, quota, safety, honesty, chain-of-thought, and prompt-injection results are vendor-reported, and availability varies by product, plan, and rollout."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
