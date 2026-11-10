(function () {
  const latestUpdates = [
    {
      source: "Google",
      date: "2026-11-10",
      displayDate: "November 10, 2026",
      category: "new-models",
      companies: ["Google", "Google DeepMind", "Gemini"],
      title: "Google Releases Gemini 4 Carbon for Long-Horizon Agent Work",
      url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/",
      summary: "Google made Gemini 4 Carbon available to paying developers and enterprises through the Gemini API and to Google AI Ultra subscribers across selected products. Google positions Carbon for complex coding, scientific reasoning, cybersecurity, and long-horizon agent workflows; its performance and cost comparisons are company-reported, and broader access depends on the product, plan, or program."
    },
    {
      source: "GitHub",
      date: "2026-11-10",
      displayDate: "November 10, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "Microsoft"],
      title: "Copilot CLI Auto-Configures MSBuild C++ Code Intelligence",
      url: "https://github.blog/changelog/2026-11-10-c-language-server-now-auto-configures-msbuild-builds/",
      summary: "The Microsoft C++ Language Server for GitHub Copilot CLI now bundles and automatically runs its MSBuild compile-commands extractor, removing a separate discovery step and reducing setup token use. An active Copilot subscription is required; CMake and custom build systems still need their own compile_commands.json or an appropriate skill."
    },
    {
      source: "TechCrunch",
      date: "2026-11-09",
      displayDate: "November 9, 2026",
      category: "new-models",
      companies: ["Meta", "Muse"],
      title: "Meta Launches Lightweight Muse Ember for Repeated Agent Tasks",
      url: "https://techcrunch.com/2026/11/09/meta-releases-muse-ember-a-new-lightweight-model-for-agent-execution/",
      summary: "Meta released Muse Ember for repeated agent work such as tool calls, coding subtasks, routing, extraction, and long-document parsing, starting at $0.10 per million input tokens and $0.50 per million output tokens for requests up to 200K input tokens. Meta says Ember is intended to handle high-volume execution alongside a larger planning model; its comparative intelligence and cost-per-task results are company and benchmark claims, not independent validation."
    },
    {
      source: "GitHub",
      date: "2026-11-09",
      displayDate: "November 9, 2026",
      category: "new-models",
      companies: ["GitHub", "GitHub Copilot", "Anthropic"],
      title: "Claude Fable 5.2 Arrives in GitHub Copilot",
      url: "https://github.blog/changelog/2026-11-09-claude-fable-5-2-in-github-copilot/",
      summary: "GitHub is gradually rolling out Claude Fable 5.2 to Copilot Pro+, Max, Business, and Enterprise at provider list pricing. Business and Enterprise administrators must enable its policy, which is off by default; prompts and outputs are retained by default for Anthropic safety classifiers but not model training, while approved eligible enterprises can use a time-limited zero-data-retention exception through the end of 2026."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
