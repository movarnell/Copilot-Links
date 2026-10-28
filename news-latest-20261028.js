(function () {
  const latestUpdates = [
    {
      source: "OpenAI",
      date: "2026-10-28",
      displayDate: "October 28, 2026",
      category: "ai-general-news",
      companies: ["OpenAI", "Legora", "Codex", "ChatGPT"],
      title: "Legora Uses Coding Agents to Expand Legal-Work Capacity",
      url: "https://openai.com/index/legora-agentic-operating-system-for-legal-work/",
      summary: "OpenAI's customer story describes Legora using OpenAI models, ChatGPT, and Codex for contract review, legal analysis, and parallel software prototyping while lawyers remain responsible for interpretation and judgment. The reported 95%+ reduction in internal NDA-review time, 90% faster contract turnaround, and other gains are company-supplied results rather than independent evaluations."
    },
    {
      source: "GitHub",
      date: "2026-10-27",
      displayDate: "October 27, 2026",
      category: "ai-general-news",
      companies: ["GitHub Copilot", "GitHub Apps", "Copilot SDK"],
      title: "GitHub Copilot SDK Adds Server-to-Server Authentication Preview",
      url: "https://github.blog/changelog/2026-10-27-github-copilot-supports-server-to-server-authentication/",
      summary: "GitHub released public-preview server-to-server authentication for GitHub Apps using the Copilot SDK, letting services and agents use short-lived installation tokens instead of a signed-in user's credentials. Usage is billed to the owning organization and remains subject to its model policies, budgets, and spending controls; owners can audit usage by app client ID and revoke access by suspending or uninstalling the app."
    },
    {
      source: "Google DeepMind",
      date: "2026-10-27",
      displayDate: "October 27, 2026",
      category: "new-models",
      companies: ["Google DeepMind", "Genie 4", "Gemini"],
      title: "Google DeepMind Previews Genie 4 World Simulation",
      url: "https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/",
      summary: "Google DeepMind introduced Genie 4, an experimental world model that generates real-time interactive simulations with native audio and natural-language steering, using Gemini models to help plan and monitor evolving scenes. Access is limited to trusted testers; broader Project Genie and developer access is only planned, and Google lists object permanence, physics, audio accuracy, spatial consistency, and session length as active limitations."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
