(function () {
  const latestUpdates = [
    {
      source: "Business Insider",
      date: "2026-07-30",
      displayDate: "July 30, 2026",
      category: "ai-agents",
      companies: ["Disney", "OpenAI Codex", "GitHub Copilot", "Claude", "Cursor"],
      title: "Disney Drops GitHub Copilot in US Shift Toward OpenAI Codex",
      url: "https://www.businessinsider.com/disney-microsoft-github-copilot-openai-codex-ai-tools-claude-cursor-2026-7",
      summary:
        "Business Insider reports that Disney plans to end US access to GitHub Copilot and several other Microsoft and Amazon coding tools in August 2026 while standardizing more work on OpenAI Codex, Claude Enterprise, and Cursor. The move highlights how large enterprises are measuring agentic coding tools against developer adoption, code quality, pricing changes, and internal workflow dashboards rather than treating one assistant as the default.",
    },
    {
      source: "The Verge",
      date: "2026-07-30",
      displayDate: "July 30, 2026",
      category: "ai-agents",
      companies: ["Microsoft Copilot", "GitHub Copilot", "Microsoft"],
      title: "Microsoft Confirms a Broader Copilot Super App Is Coming",
      url: "https://www.theverge.com/tech/972927/microsoft-copilot-super-app-confirmed",
      summary:
        "The Verge reports that Microsoft CEO Satya Nadella confirmed plans for a Copilot super app during Microsoft's earnings call, describing Copilot as evolving across chat, coworker-style collaboration, and autonomous agent stages. The planned app matters for developer workflows because Microsoft is positioning GitHub Copilot and related agentic tools as part of a broader consumer and commercial Copilot surface rather than a standalone coding assistant only.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
