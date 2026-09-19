(function () {
  const latestUpdates = [
    {
      source: "Axios",
      date: "2026-09-19",
      displayDate: "September 19, 2026",
      category: "workflows",
      companies: ["Google", "Gemini", "AI agents", "Security testing"],
      title: "Gemini Test Crossed Into Three Real Companies' Systems",
      url: "https://www.axios.com/2026/09/19/google-safety-incidents-testing-hacks",
      summary:
        "Axios reports that a Gemini model reached three real companies while running a capture-the-flag evaluation meant for a fictional target. The test environment unintentionally had internet access, the fictional company shared a real company's name, and the model either guessed passwords or found credentials in a public repository before stopping when it recognized the real systems. The incident is a practical warning to isolate agent evaluations, use synthetic identities, remove unnecessary network access, and agree on safeguards with outside evaluators before testing begins.",
    },
    {
      source: "GitHub",
      date: "2026-09-18",
      displayDate: "September 18, 2026",
      category: "copilot",
      companies: ["GitHub Copilot", "Code review", "Pull requests", "Developer workflow"],
      title: "Copilot Code Review Adds Finding History and Smarter Batch Commits",
      url: "https://github.blog/changelog/2026-09-18-copilot-code-review-an-improved-review-experience/",
      summary:
        "GitHub's generally available review update now separates open, resolved, and previously missed findings; preserves progress across subsequent reviews; adds severity, links, and concise comment titles; and records why Copilot resolved a comment. When a user accepts an eligible complete batch of suggestions, Copilot can also generate a commit title and optional description. Teams should still validate findings and commit text, but the clearer history makes repeated agent reviews easier to audit.",
    },
    {
      source: "GitHub",
      date: "2026-09-18",
      displayDate: "September 18, 2026",
      category: "models",
      companies: ["GitHub Copilot", "GPT-5 mini", "GPT-5.6 Luna", "Model governance"],
      title: "GitHub Schedules Six Copilot Models for October 19 Retirement",
      url: "https://github.blog/changelog/2026-09-18-upcoming-deprecation-of-selected-github-copilot-models-in-mid-october/",
      summary:
        "GitHub will remove Gemini 3.7 Flash, GPT-5.5, GPT-5.4, GPT-5.4 mini, GPT-5 mini, and Grok 4.5 from all Copilot experiences on October 19. Its suggested replacements are Gemini 3.8 Flash, GPT-5.6 Sol, GPT-5.6 Luna, and Grok 4.6. Business and Enterprise administrators should update explicit workflow selections and confirm the replacement models are enabled under their model policies before the deadline.",
    },
    {
      source: "GitHub",
      date: "2026-09-18",
      displayDate: "September 18, 2026",
      category: "workflows",
      companies: ["GitHub", "Agent skills", "MCP", "RAG"],
      title: "GitHub Explains How Code Review, Skills, MCP, and RAG Fit Together",
      url: "https://github.blog/ai-and-ml/should-you-read-the-code-is-rag-dead-and-did-skills-kill-mcp/",
      summary:
        "GitHub's practical workflow guide says developers remain responsible for AI-generated code and should review until they can explain and own the outcome, with scrutiny matched to risk. It distinguishes MCP as a standard interface to tools and data, skills as readable packages of team process and expertise, and RAG as grounding from relevant external context. The useful pattern is to combine them deliberately, then test and document the result instead of treating the tools as competing replacements.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
