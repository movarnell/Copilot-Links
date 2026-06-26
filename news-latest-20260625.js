(function () {
  const latestUpdates = [
    {
      source: "Business Insider",
      date: "2026-06-25",
      displayDate: "June 25, 2026",
      category: "ai-coding",
      companies: ["GitHub", "GitHub Copilot", "Microsoft", "AI coding"],
      title: "GitHub Says AI Coding Demand Drove Its Best Month Ever",
      url: "https://www.businessinsider.com/github-best-month-ever-internal-meeting-2026-6",
      summary:
        "Business Insider reports that GitHub told employees June was its strongest month on record, driven by heavy AI-assisted coding demand and Copilot's move toward consumption-based billing. The report also notes competitive pressure from Cursor, Codex, and Claude Code, plus capacity strain and outages tied to rising usage. For teams, the practical signal is that Copilot adoption and agent workloads are scaling quickly, so usage budgets, outage plans, and model-escalation rules need to be managed as part of normal engineering operations.",
    },
    {
      source: "arXiv",
      date: "2026-06-22",
      displayDate: "June 22, 2026",
      category: "ai-research",
      companies: ["Terminal agents", "Qwen", "Benchmarking", "AI workflows"],
      title: "CLI-Universe Proposes Verifiable Training Tasks for Terminal Agents",
      url: "https://arxiv.org/abs/2606.22883",
      summary:
        "A new CLI-Universe paper describes a task-synthesis pipeline for terminal agents that grounds tasks in real technical materials, builds Dockerized environments, and keeps only candidates that pass executable verification. The authors report that a 6,000-trajectory distilled dataset improved Qwen3-32B on Terminal-Bench 2.0. The finding is relevant to AI workflow builders because terminal-agent quality increasingly depends on verifiable tasks and robust test signals, not just larger context windows or stronger base models.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
