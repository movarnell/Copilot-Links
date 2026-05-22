(function () {
  const latestUpdates = [
    {
      source: "AP News",
      date: "2026-05-21",
      displayDate: "May 21, 2026",
      category: "ai-general-news",
      companies: ["White House", "AI policy", "OpenAI", "Anthropic", "Google", "Microsoft"],
      title: "White House Calls Off AI Executive Order Signing Over Competitiveness Concerns",
      url: "https://apnews.com/article/trump-ai-executive-order-ee318f35acc8a2c43e47f3ebf26cb459",
      summary:
        "AP reported that President Trump called off a planned May 21 signing ceremony for an AI executive order after concerns that the order could weaken the United States' competitive position in AI. For developer-tool and enterprise AI teams, the practical signal is policy uncertainty: governance, procurement, model testing, and infrastructure rules may keep moving quickly, but not always on a predictable launch schedule.",
    },
    {
      source: "Microsoft",
      date: "2026-05-21",
      displayDate: "May 21, 2026",
      category: "ai-general-news",
      companies: ["Microsoft", "EY", "Microsoft 365 Copilot", "Enterprise AI", "AI agents"],
      title: "Microsoft and EY Share Large-Scale Copilot Deployment Metrics",
      url: "https://blogs.microsoft.com/blog/2026/05/21/from-ai-pilots-to-enterprise-impact-why-execution-is-the-new-differentiator/",
      summary:
        "Microsoft said EY is expanding Microsoft 365 Copilot through Microsoft 365 E7 to more than 400,000 people after an initial 150,000-person rollout reported 94% monthly adoption, 85% weekly usage, and a 15% productivity gain. Microsoft also highlighted agentic finance, assurance, and tax workflows, including faster operational lead times and reduced manual document work. The useful takeaway is that credible enterprise AI stories are increasingly judged by measured operating outcomes, not by seat counts alone.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-05-21",
      displayDate: "May 21, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "Microsoft", "GitHub Copilot", "Eclipse", "Open source", "Agent mode"],
      title: "GitHub Open Sources Copilot for Eclipse",
      url: "https://github.blog/changelog/2026-05-21-github-copilot-for-eclipse-is-open-source",
      summary:
        "GitHub open sourced Copilot for Eclipse under the MIT license, exposing the implementation for completions, Next Edit Suggestions, chat, tool calls, agent mode, skills and prompt files, BYOK, custom agents, isolated subagents, the plan agent, and MCP integration. For teams comparing IDE AI tooling, this is a useful transparency milestone because developers can inspect how Copilot workflows are implemented outside VS Code and reason about context handling, agent orchestration, and extension architecture.",
    },
    {
      source: "Visual Studio Code",
      date: "2026-05-21",
      displayDate: "May 21, 2026",
      category: "ai-general-news",
      companies: ["Microsoft", "Visual Studio Code", "GitHub Copilot", "Agents Window", "BYOK", "Remote agents"],
      title: "VS Code 1.122 Iteration Notes Add Remote Agent Tasks and Local Agent Host Defaults",
      url: "https://code.visualstudio.com/updates/v1_122",
      summary:
        "Microsoft updated the VS Code 1.122 iteration notes through May 21 with agent-focused changes: agents can trigger tasks on remote machines, Agents window source-control state refreshes after git operations, /models opens the model picker from chat, BYOK models work in air-gapped scenarios without GitHub authentication, and the local agent host is enabled by default in Insiders builds. Use 1.122 as the freshest official watchlist while 1.121 remains the current stable release reference.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  window.newsFeed = [...latestUpdates, ...existingItems];
})();
