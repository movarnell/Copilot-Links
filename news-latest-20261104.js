(function () {
  const latestUpdates = [
    {
      source: "Axios",
      date: "2026-11-04",
      displayDate: "November 4, 2026",
      category: "ai-general-news",
      companies: ["OpenAI", "Pierre Computer", "Codex"],
      title: "OpenAI Will Acquire Pierre Computer for Codex Storage Technology",
      url: "https://www.axios.com/2026/11/04/openai-pierre-computer-github",
      summary: "Axios reports that OpenAI will acquire developer-tools startup Pierre Computer and integrate its Code Storage technology into Codex, where Pierre technology is already used. Financial terms were not disclosed, and Pierre's open-source projects will remain open source."
    },
    {
      source: "GitHub",
      date: "2026-11-03",
      displayDate: "November 3, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot"],
      title: "Copilot Usage Metrics Separate BYOK and Enterprise Custom Models",
      url: "https://github.blog/changelog/2026-11-03-byok-and-enterprise-custom-models-in-the-copilot-usage-api/",
      summary: "GitHub's Copilot usage metrics API now separates local bring-your-own-key activity and enterprise custom-model activity from Copilot-hosted usage in one-day and 28-day reports. Existing totals do not change, there is no historical backfill, and local BYOK figures can undercount when client telemetry is disabled or a provider omits token usage."
    },
    {
      source: "Google Developers Blog",
      date: "2026-11-03",
      displayDate: "November 3, 2026",
      category: "ai-general-news",
      companies: ["Google", "Gemini", "TypeSafe"],
      title: "Google Tests Classifier-Based Routing Across Gemini Configurations",
      url: "https://developers.googleblog.com/en/cost-per-task-using-cheap-classifiers-to-route-across-gemini-models-and-thinking-levels/",
      summary: "A Google Developers Blog experiment routed short coding-agent tasks between Flash-Lite and Gemini 3.8 Flash with low thinking. Its learned classifier solved one 50-task sample while a frozen keyword heuristic weakened on held-out tasks, but Google notes the small hand-labeled sample, simple automatic grading, approximate latency comparison, and possible loss of context-cache savings when switching models."
    },
    {
      source: "GitHub",
      date: "2026-11-03",
      displayDate: "November 3, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "JetBrains"],
      title: "GitHub Copilot Is Now Available in JetBrains Air",
      url: "https://github.blog/changelog/2026-11-03-github-copilot-is-now-available-in-jetbrains-air/",
      summary: "GitHub says JetBrains Air can now use Copilot through the Agent Client Protocol for local or isolated cloud coding tasks, including parallel sessions and in-context review. Cloud tasks require an Air Teams-enabled business organization, a Copilot subscription, and administrator enablement; Air analytics omit Copilot usage, and Air administrators cannot set Copilot spending limits."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
