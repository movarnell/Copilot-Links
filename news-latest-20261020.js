(function () {
  const latestUpdates = [
    {
      source: "TechCrunch",
      date: "2026-10-20",
      displayDate: "October 20, 2026",
      category: "ai-general-news",
      companies: ["Otter.ai", "Meeting Assistants", "Enterprise AI", "Workflow Automation"],
      title: "Otter.ai Expands From Transcripts Toward Meeting Workflow Automation",
      url: "https://techcrunch.com/2026/10/20/otter-ai-raises-320-million-from-general-catalysts-growth-fund-for-its-meeting-tool/",
      summary: "TechCrunch reports that Otter.ai is using $320 million in growth financing to expand internationally and move beyond transcription. The company is testing pre-meeting briefs, in-meeting assistance, and post-meeting actions that connect conversation context to enterprise workflows, while active-use and churn figures remain undisclosed."
    },
    {
      source: "Google Public Sector",
      date: "2026-10-20",
      displayDate: "October 20, 2026",
      category: "ai-general-news",
      companies: ["Google", "Gemini", "Public Sector", "Agentic Workflows"],
      title: "Google Packages Gemini Agents for Government Workflows",
      url: "https://www.prnewswire.com/news-releases/google-public-sector-launches-gemini-for-government-services-302913759.html",
      summary: "Google Public Sector introduced a preview that combines Gemini agents with reusable skills, connectors, source citations, inherited identity controls, and audit logging for government workflows. The launch offers a concrete governance pattern, but its availability and vendor capability and security claims still require agency-specific validation."
    },
    {
      source: "TechCrunch",
      date: "2026-10-19",
      displayDate: "October 19, 2026",
      category: "ai-general-news",
      companies: ["Hugging Face", "AI Evaluation", "Agent Harnesses", "Reproducibility"],
      title: "Hugging Face Policy Chief Warns Agent Evaluations Need Better Standards",
      url: "https://techcrunch.com/2026/10/19/embedded-ai-evaluators-wont-be-an-easy-solution-hugging-faces-policy-chief-says/",
      summary: "Hugging Face policy chief Irene Solaiman told TechCrunch that reproducibility, evaluator qualifications, and cross-test comparisons remain immature. She emphasized that agentic evaluation must measure the whole system—including the harness and tools—not just the underlying model, because a better harness can let a weaker model outperform a more capable one."
    },
    {
      source: "TechCrunch",
      date: "2026-10-19",
      displayDate: "October 19, 2026",
      category: "mythos-news",
      companies: ["Microsoft", "Agent Security", "Least Privilege", "Human Approval"],
      title: "Microsoft Treats Enterprise AI Agents as Potential Insider Threats",
      url: "https://techcrunch.com/2026/10/19/microsoft-says-ai-agents-are-like-insider-threats-as-frontier-models-cant-be-trusted/",
      summary: "TechCrunch reports that Microsoft's new agent-security controls discover unmanaged agents, monitor behavior, adjust permissions by task, and require human approval for risky actions. The core guidance is to separate the supplier of agent intelligence from the systems that grant authority, while recognizing Microsoft's commercial interest in selling those controls."
    },
    {
      source: "TechCrunch",
      date: "2026-10-19",
      displayDate: "October 19, 2026",
      category: "ai-general-news",
      companies: ["AWS", "TorchNeuron", "PyTorch", "Trainium"],
      title: "AWS Says TorchNeuron Can Reduce PyTorch Hardware Lock-In",
      url: "https://techcrunch.com/2026/10/19/amazon-is-taking-its-biggest-shot-at-nvidia-yet-with-new-torchneuron-dev-tool/",
      summary: "AWS says TorchNeuron can move PyTorch applications to Trainium with a one-line configuration change and plans to upstream hardware-agnostic changes to PyTorch. The portability direction is useful for model infrastructure teams, but Amazon's price-performance claims still need workload-specific benchmarking."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
