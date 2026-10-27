(function () {
  const latestUpdates = [
    {
      source: "OpenAI",
      date: "2026-10-26",
      displayDate: "October 26, 2026",
      category: "new-models",
      companies: ["OpenAI", "GPT-6.1 Terra", "ChatGPT Work", "Codex"],
      title: "OpenAI Introduces GPT-6.1 Terra for Visual and Computer-Use Work",
      url: "https://openai.com/index/introducing-gpt-6-1-terra/",
      summary: "OpenAI introduced GPT-6.1 Terra for detailed visual reasoning, precise computer use, clearer writing, and scoped software work. It is available in ChatGPT Work, Codex, and the API at $1 per million input tokens, $0.05 per million cached input tokens, and $5 per million output tokens; OpenAI still recommends GPT-6.1 Sol or GPT-6 Astra for the most complex coding tasks, and its performance claims are based on company evaluations."
    },
    {
      source: "GitHub",
      date: "2026-10-26",
      displayDate: "October 26, 2026",
      category: "github-copilot",
      companies: ["GitHub Copilot", "OpenAI", "GPT-6.1 Terra"],
      title: "GPT-6.1 Terra Rolls Out Across GitHub Copilot",
      url: "https://github.blog/changelog/2026-10-26-gpt-6-1-terra-in-github-copilot/",
      summary: "GitHub says GPT-6.1 Terra is gradually rolling out as generally available across paid Copilot plans and clients, including VS Code, Visual Studio, Copilot CLI, cloud agent, the Copilot app, github.com, Mobile, JetBrains, Xcode, and Eclipse. Usage-based billing follows provider list pricing, and Business or Enterprise administrators may need to enable the model in policy settings."
    },
    {
      source: "GitHub",
      date: "2026-10-26",
      displayDate: "October 26, 2026",
      category: "ai-workflows",
      companies: ["GitHub Copilot", "VS Code", "Copilot CLI", "Copilot App"],
      title: "GitHub Copilot Assisted Permissions Are Generally Available",
      url: "https://github.blog/changelog/2026-10-26-github-copilot-assisted-permissions-generally-available/",
      summary: "Assisted permissions are now generally available in Copilot CLI, the Copilot app, and VS Code. An LLM evaluates command, filesystem, and URL permission requests, automatically allowing those it classifies as clearly safe and routing the rest for approval; enterprise administrators can set defaults or disable Assisted and Allow All, but automated triage is not a guarantee that an approved action is harmless."
    },
    {
      source: "OpenAI",
      date: "2026-10-26",
      displayDate: "October 26, 2026",
      category: "ai-security",
      companies: ["OpenAI", "CodeRabbit", "GPT-6.1 Sol", "Application Security"],
      title: "CodeRabbit Uses GPT-6.1 Sol for Cross-Codebase Security Review",
      url: "https://openai.com/index/gpt-6-1-sol-coderabbit-code-security/",
      summary: "OpenAI describes CodeRabbit using GPT-6.1 Sol alongside other models and security tools to analyze pull requests, dependencies, and linked repositories, with optional sandboxed exploit verification and proposed fixes. Human reviewers remain responsible for deciding what ships, and the reported usage and results come from CodeRabbit and OpenAI rather than an independent evaluation."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
