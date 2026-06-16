(function () {
  const latestUpdates = [
    {
      source: "Business Insider",
      date: "2026-06-16",
      displayDate: "June 16, 2026",
      category: "ai-workflows",
      companies: ["Microsoft", "GitHub", "AWS", "Azure", "GitHub Copilot", "AI infrastructure"],
      title: "Microsoft Uses Multi-Cloud Capacity to Support GitHub's AI Workload Surge",
      url: "https://www.businessinsider.com/microsoft-github-amazon-ai-cloud-capacity-2026-6",
      summary:
        "Business Insider reported that Microsoft has leaned on additional cloud capacity outside Azure as GitHub absorbs sharply higher AI-driven development demand. The article ties the pressure to Copilot and agentic coding growth, GitHub service reliability, and the infrastructure race behind software-development AI. For teams standardizing on Copilot workflows, the practical signal is that agent adoption depends not just on model quality but also on resilient compute capacity, service availability, and fallback planning for developer platforms.",
    },
    {
      source: "Axios",
      date: "2026-06-16",
      displayDate: "June 16, 2026",
      category: "ai-general-news",
      companies: ["Anthropic", "Claude", "AI policy", "AI governance", "U.S. export controls"],
      title: "Axios Warns Anthropic Crackdown Could Chill Trust in U.S. AI Platforms",
      url: "https://www.axios.com/2026/06/16/anthropic-regulation-trump-china",
      summary:
        "Axios analyzed the downstream risk from the Trump administration's Anthropic action, arguing that sudden limits on already-deployed AI models could make foreign governments and enterprise buyers question the dependability of U.S. AI platforms. The piece extends the prior Anthropic/Fable/Mythos story from a single vendor disruption into a platform-risk question for regulated AI adoption. For AI workflow owners, it reinforces the need to track model availability, policy exposure, and contingency paths when a model becomes part of a production process.",
    },
    {
      source: "Axios",
      date: "2026-06-16",
      displayDate: "June 16, 2026",
      category: "ai-workflows",
      companies: ["Microsoft", "Copilot Cowork", "DeepSeek", "Azure", "AI agents", "Enterprise AI"],
      title: "Microsoft Moves Copilot Cowork Toward Usage-Based Agent Pricing",
      url: "https://www.axios.com/2026/06/16/microsoft-copilot-cowork-tokenmaxxing-cowork",
      summary:
        "Axios reported that Microsoft is moving Copilot Cowork to usage-based pricing as enterprise agent workloads drive high model-consumption costs, and that Microsoft is considering an optional Azure-hosted DeepSeek model path. The story frames Copilot Cowork alongside Claude Code and Codex as agentic tools that can keep calling models while tasks run, making compute cost a product-design and procurement issue. For AI workflow leaders, the signal is to plan for metering, model-routing policy, data-residency controls, and ROI measurement before agent usage scales broadly.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
