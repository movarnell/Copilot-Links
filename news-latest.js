(function () {
  const latestUpdates = [
    {
      source: "TechCrunch",
      date: "2026-05-23",
      displayDate: "May 23, 2026",
      category: "ai-general-news",
      companies: ["IBM", "Ferrari", "Formula One", "Enterprise AI", "Personalization", "Fan engagement"],
      title: "Ferrari Uses IBM AI to Turn Race Data Into Personalized Fan Experiences",
      url: "https://techcrunch.com/2026/05/23/ferrari-is-using-ai-to-create-f1-superfans/",
      summary:
        "TechCrunch reported that Ferrari and IBM are using AI in the Ferrari fan app to turn race data, engagement signals, and team storytelling into more personalized experiences. The app now includes AI-written race summaries, games, prediction features, and an AI companion, with Ferrari citing stronger race-weekend engagement after the IBM partnership. For AI product teams, the useful signal is that applied AI is moving beyond chat assistants into domain-specific customer experiences where data, trust, and repeat engagement matter as much as the model itself.",
    },
    {
      source: "TechCrunch",
      date: "2026-05-22",
      displayDate: "May 22, 2026",
      category: "ai-general-news",
      companies: ["NTSB", "Codex", "Synthetic media", "AI safety", "Transportation"],
      title: "NTSB Closes Some Dockets After AI-Recreated Pilot Voices Circulate Online",
      url: "https://techcrunch.com/2026/05/22/ai-is-being-used-to-resurrect-the-voices-of-dead-pilots/",
      summary:
        "TechCrunch reported that the National Transportation Safety Board temporarily removed public access to its docket system after people used public spectrogram and transcript data to recreate cockpit voice audio from a fatal UPS crash. The report says social posts referenced AI tools, including Codex, in the reconstruction workflow. For agent users, the important lesson is boundary-setting: capable coding and media tools can combine public technical artifacts into sensitive outputs, so teams need data-release review, misuse thinking, and human judgment around what should be reconstructed even when it is technically possible.",
    },
    {
      source: "TechCrunch",
      date: "2026-05-22",
      displayDate: "May 22, 2026",
      category: "ai-general-news",
      companies: ["AI startups", "Venture capital", "ARR", "Enterprise AI", "AI economics"],
      title: "TechCrunch Examines Inflated ARR Claims Across AI Startups",
      url: "https://techcrunch.com/2026/05/22/how-vcs-and-founders-use-inflated-arr-to-kingmake-ai-startups/",
      summary:
        "TechCrunch examined how some AI startups and investors blur annual recurring revenue with contracted or committed ARR, making growth look stronger before customers are fully onboarded or revenue is actually collected. The piece matters for enterprise AI buyers because inflated metrics can hide product-delivery risk, long implementation timelines, churn, and usage economics. For teams tracking AI tools, it is a reminder to look past headline valuations and ask whether adoption, retention, cost-to-serve, and production outcomes support the claimed momentum.",
    },
    {
      source: "Anthropic",
      date: "2026-05-22",
      displayDate: "May 22, 2026",
      category: "mythos-news",
      companies: ["Anthropic", "Claude", "Mythos Preview", "Project Glasswing", "Open source security", "Cybersecurity"],
      title: "Anthropic Shares First Project Glasswing Results From AI-Assisted Security Scans",
      url: "https://www.anthropic.com/news/glasswing-initial-update",
      summary:
        "Anthropic's first Project Glasswing update says Claude Mythos Preview has helped roughly 50 partners find more than ten thousand high- or critical-severity vulnerabilities and has scanned more than 1,000 open-source projects. Anthropic says independent review of a subset found a 90.6% true-positive rate, while emphasizing that verification, coordinated disclosure, and patching are now the bottlenecks. For coding-agent users, the important signal is both promise and caution: stronger models can materially improve defensive code review, but high-impact security work still needs controlled release, human triage, and responsible disclosure.",
    },
    {
      source: "Fortune",
      date: "2026-05-22",
      displayDate: "May 22, 2026",
      category: "ai-general-news",
      companies: ["Microsoft", "Anthropic", "Claude Code", "GitHub Copilot", "Copilot CLI", "AI cost governance"],
      title: "Fortune Highlights Enterprise AI Cost Pressure Around Claude Code and Copilot CLI",
      url: "https://fortune.com/2026/05/22/microsoft-ai-cost-problem-tokens-agents/",
      summary:
        "Fortune reported on the enterprise cost pressure behind Microsoft's reported move away from broad internal Claude Code licensing and toward GitHub Copilot CLI for many developers. The piece is useful less as a product-launch story than as a budget warning: agentic coding tools can shift teams from predictable seat pricing into usage-sensitive token and model costs. For this site's model guidance, that reinforces the current recommendation to start routine work on included or low-multiplier models, reserve frontier models for narrow high-value decisions, and monitor usage before June billing changes.",
    },
    {
      source: "OpenAI Help",
      date: "2026-05-21",
      displayDate: "May 21, 2026",
      category: "ai-general-news",
      companies: ["OpenAI", "Codex", "ChatGPT", "Computer Use", "Goal mode", "AI agents"],
      title: "OpenAI Adds Appshots, Goal Mode GA, and Locked Computer Use to Codex",
      url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
      summary:
        "OpenAI's latest ChatGPT release notes add several Codex workflow updates: Appshots for attaching Mac app-window context, Goal mode generally available across the Codex app, IDE extension, and CLI, more precise in-app browser annotations, locked computer use for eligible Mac Computer Use users, and browser-use reliability improvements. For VS Code and agent users, the practical signal is that Codex is moving toward longer-running, supervised work where the model can understand local UI context and keep tasks moving across more surfaces.",
    },
    {
      source: "Axios",
      date: "2026-05-21",
      displayDate: "May 21, 2026",
      category: "ai-general-news",
      companies: ["Google", "OpenAI", "Anthropic", "Gemini", "AI agents", "AI infrastructure"],
      title: "Axios: Google Is Trying to Turn Scale Into an AI Advantage",
      url: "https://www.axios.com/2026/05/21/google-ai-anthropic-openai-war",
      summary:
        "Axios framed Google's I/O push as a strategy built around distribution, infrastructure, and product reach rather than only benchmark leadership. The piece contrasts Google with OpenAI and Anthropic, noting that Gemini 3.5 Flash reflects a bet on fast, cheaper models that can be deployed across massive products while the frontier race remains close. For AI-tool watchers, the takeaway is that model selection may increasingly depend on cost, latency, platform reach, and integration depth, not only raw frontier scores.",
    },
    {
      source: "TechCrunch",
      date: "2026-05-21",
      displayDate: "May 21, 2026",
      category: "ai-general-news",
      companies: ["Hark", "NVIDIA", "AMD", "Qualcomm", "Salesforce", "AI hardware"],
      title: "Hark Raises $700 Million to Build a Universal AI Interface",
      url: "https://techcrunch.com/2026/05/21/hark-raises-700m-series-a-for-its-secretive-universal-ai-interface/",
      summary:
        "TechCrunch reported that Hark raised a $700 million Series A at a $6 billion post-money valuation to build models, hardware, and a personal AI platform meant to act as a universal interface for digital tasks. The company expects multimodal models this summer and eventual hardware devices, but still has to prove product clarity, privacy handling, and whether a consumer agent can feel useful beyond developer workflows. The story is worth tracking because capital is shifting toward native AI interfaces, not just chat windows and IDE plug-ins.",
    },
    {
      source: "TechCrunch",
      date: "2026-05-21",
      displayDate: "May 21, 2026",
      category: "ai-general-news",
      companies: ["Google", "Gemini", "Gemini Spark", "Android", "AI agents", "Google I/O"],
      title: "TechCrunch Questions Whether Google's Consumer Agent Ecosystem Is Clear Enough",
      url: "https://techcrunch.com/2026/05/21/google-is-pitching-an-ai-agent-ecosystem-to-consumers-who-may-not-buy-it/",
      summary:
        "TechCrunch argued that Google's I/O agent announcements show ambition but also product complexity: information agents, Gemini Spark, Android Halo, Daily Brief, AI-first Search, and agentic Chrome all point toward background assistants, but many features are gated to paid tiers or not broadly available yet. For teams designing AI tools, the useful lesson is product focus: agent capability alone is not enough if users cannot tell which assistant handles which job, what data it sees, and why the workflow is worth trusting.",
    },
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
