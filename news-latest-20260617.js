(function () {
  const latestUpdates = [
    {
      source: "Visual Studio Code",
      date: "2026-06-17",
      displayDate: "June 17, 2026",
      category: "copilot-vscode",
      companies: ["Visual Studio Code", "GitHub Copilot", "VS Code agents", "AI model providers"],
      title: "VS Code 1.125 Adds Model Provider Discovery and Stronger Copilot Management",
      url: "https://code.visualstudio.com/updates/v1_125",
      summary:
        "The official VS Code 1.125 release notes add a practical agent-workflow update: developers can discover and install model providers from the Language Models editor, the integrated browser can search from the address bar and proxy remote browsing, and forwarded-port URLs are rewritten when agents need to open them. The release also adds an additional-spend usage view in the Copilot status dashboard and native MDM delivery for managed Copilot settings. For teams running agentic workflows in VS Code, this makes model-provider governance, browser access, port handling, and budget visibility part of the IDE-level operating model.",
    },
    {
      source: "Associated Press",
      date: "2026-06-17",
      displayDate: "June 17, 2026",
      category: "ai-general-news",
      companies: ["OpenAI", "Anthropic", "Google DeepMind", "Mistral", "G7", "AI governance"],
      title: "G7 Leaders and AI CEOs Put Frontier AI Governance on the Summit Agenda",
      url: "https://apnews.com/article/a7ab28d9b34edfaa2061a67616f610bc",
      summary:
        "AP reported that G7 leaders and AI executives, including leaders from OpenAI, DeepMind, Anthropic, and Mistral, discussed AI's role in economic growth, resilience, and safety at the summit. The coverage ties the policy conversation to recent concern over access to Anthropic's advanced models and broader debates over responsible AI use and authenticity. For AI workflow owners, the signal is that frontier-model access, watermarking, international coordination, and national-security review are now board-level operating risks rather than abstract policy debates.",
    },
    {
      source: "Axios",
      date: "2026-06-17",
      displayDate: "June 17, 2026",
      category: "ai-general-news",
      companies: ["Anthropic", "Claude", "Fable 5", "Mythos 5", "AI safety", "AI regulation"],
      title: "Axios Frames the Anthropic Model Fight as a Control Point for Frontier AI",
      url: "https://www.axios.com/2026/06/17/anthropic-fable-mythos-ai-model-government-oversight",
      summary:
        "Axios followed the Anthropic Fable/Mythos dispute with an analysis of who should control access to the most capable AI systems: private labs, customers, or government agencies. The piece argues that the U.S. government has shown it can intervene quickly in model availability while a stable oversight framework is still missing. For organizations using advanced models in developer workflows, the takeaway is to treat model availability, safety review, jurisdictional policy, and provider fallback plans as core deployment requirements.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
