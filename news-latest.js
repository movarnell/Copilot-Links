(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-05-26",
      displayDate: "May 26, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "Copilot Memory", "Copilot CLI", "Repository settings", "AI governance"],
      title: "GitHub Adds More Copilot Memory Controls Across Repositories and CLI",
      url: "https://github.blog/changelog/2026-05-26-copilot-memory-has-more-controls-for-deletion-scope-and-the-copilot-cli/",
      summary:
        "GitHub expanded Copilot Memory controls with clearer deletion guidance, a repository-level off switch, explicit scope labels when memory is captured, and `/memory` commands for Copilot CLI sessions. Copilot Memory remains in public preview for paid Copilot plans. For VS Code and agent users, this is a practical governance update: memory can improve continuity, but teams should decide where repository facts are allowed, who can review them, and when sensitive or outdated context should be removed.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-05-26",
      displayDate: "May 26, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "Enterprise", "Model rules", "AI governance", "Cost controls"],
      title: "GitHub Adds Organization-Targeted Copilot Model Rules",
      url: "https://github.blog/changelog/2026-05-26-target-copilot-models-to-organizations-with-model-rules/",
      summary:
        "GitHub introduced targeted model rules in public preview for Copilot Business and Enterprise customers, letting enterprise owners allow specific Copilot models for selected organizations instead of relying only on enterprise-wide defaults. GitHub also refreshed the default model availability UI. The useful takeaway for teams is that model choice is becoming an admin-governed control surface: cost, risk, data policy, and task fit can now vary by organization rather than being a single blanket setting.",
    },
    {
      source: "Anthropic",
      date: "2026-05-26",
      displayDate: "May 26, 2026",
      category: "ai-general-news",
      companies: ["Anthropic", "Claude", "Korea", "Seoul office", "Enterprise AI", "Developer adoption"],
      title: "Anthropic Names Korea Representative Director Ahead of Seoul Office Opening",
      url: "https://www.anthropic.com/news/kiyoung-choi-representative-director-anthropic-korea",
      summary:
        "Anthropic appointed KiYoung Choi as Representative Director of Korea ahead of opening its Seoul office, saying Claude usage in Korea is more than 3.5 times what population size alone would predict and skews heavily toward technical and creative work. The announcement matters for AI-tool tracking because it shows frontier-model vendors moving from global product launches into local enterprise, startup, government, research, and developer-community support. For teams choosing agents and coding assistants, regional presence increasingly affects adoption, compliance conversations, partnerships, and implementation support.",
    },
    {
      source: "Visual Studio Code",
      date: "2026-05-20",
      displayDate: "May 20, 2026",
      category: "ai-general-news",
      companies: ["Microsoft", "Visual Studio Code", "GitHub Copilot", "Agent Sessions", "Copilot setup"],
      title: "VS Code Refreshes Copilot Setup and Agent Guidance",
      url: "https://code.visualstudio.com/docs/copilot/overview",
      summary:
        "Microsoft's current VS Code Copilot docs now frame Copilot around agent sessions that can plan, edit, run commands, verify results, and move between editor, background, cloud, local, and third-party agent surfaces. The setup docs also note that new sign-ups for Copilot Pro, Pro+, and student plans remain temporarily paused while existing subscribers and eligible accounts can continue using the available plan paths. For this site, the practical update is to teach Copilot as an agent platform with policy, plan availability, and workspace-control checks rather than just a chat extension.",
    },
    {
      source: "Visual Studio Code",
      date: "2026-05-15",
      displayDate: "May 15, 2026",
      category: "ai-general-news",
      companies: ["Microsoft", "Visual Studio Code", "GitHub Copilot", "Coding agents", "Model selection"],
      title: "VS Code Explains Why the Coding Harness Matters as Much as the Model",
      url: "https://code.visualstudio.com/blogs/2026/05/15/coding-harness",
      summary:
        "The VS Code team published a deeper explanation of the coding harness behind Copilot: the agent loop, tools, context handling, system prompts, terminal integration, debugging, source control, and evaluation layer that turn a model into a working developer experience. The useful takeaway is that model choice alone is no longer the right comparison point. Teams should evaluate whether their editor harness exposes the right tools safely, preserves context, supports multiple model providers, and verifies work before treating a newer model as an automatic upgrade.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-05-14",
      displayDate: "May 14, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "Copilot app", "Agentic development", "Pull requests"],
      title: "GitHub Copilot App Enters Technical Preview",
      url: "https://github.blog/changelog/2026-05-14-github-copilot-app-is-now-available-in-technical-preview/",
      summary:
        "GitHub announced a technical preview of the GitHub Copilot app, a GitHub-native desktop experience for starting agentic sessions from issues, pull requests, prompts, or prior sessions, keeping work isolated, steering the agent, validating results, and landing changes through pull request review. Business and Enterprise access requires preview features and Copilot CLI policy enablement. This is relevant to VS Code users because Copilot's agent workflow is spreading beyond one editor surface into a coordinated GitHub-to-desktop-to-PR loop.",
    },
    {
      source: "Anthropic",
      date: "2026-05-25",
      displayDate: "May 25, 2026",
      category: "ai-general-news",
      companies: ["Anthropic", "Claude", "AI safety", "AI ethics", "AI governance", "Vatican"],
      title: "Anthropic Publishes Chris Olah's Remarks on Pope Leo XIV's AI Encyclical",
      url: "https://www.anthropic.com/news/chris-olah-pope-leo-encyclical",
      summary:
        "Anthropic published co-founder Chris Olah's remarks from the Vatican presentation of Pope Leo XIV's Magnifica Humanitas encyclical on AI. Olah argued that frontier labs operate under commercial, research, geopolitical, pride, and ambition pressures, making outside scrutiny from religious communities, civil society, scholars, governments, and other informed critics essential. The practical takeaway for AI builders is that safety cannot be treated as a lab-only discipline: labor displacement, global benefit-sharing, human flourishing, and uncertainty about model internals need broader review before agentic systems become deeply embedded in work and public life.",
    },
    {
      source: "AP News",
      date: "2026-05-25",
      displayDate: "May 25, 2026",
      category: "ai-general-news",
      companies: ["Vatican", "Anthropic", "AI regulation", "AI ethics", "Human dignity"],
      title: "Pope Leo XIV Calls for Robust AI Regulation in First Encyclical",
      url: "https://apnews.com/article/d92d0108730d146baa46da041b8523da",
      summary:
        "AP reported that Pope Leo XIV issued his first encyclical, Magnifica Humanitas, calling for stronger regulation of artificial intelligence and urging developers to prioritize the common good over profit. Anthropic co-founder Christopher Olah joined the Vatican presentation and welcomed the pope's concern. For AI builders and agent users, the important signal is that governance pressure is broadening beyond product safety teams: labor impact, war, human dignity, accountability, and concentration of power are becoming part of mainstream AI adoption debates.",
    },
    {
      source: "TechCrunch",
      date: "2026-05-24",
      displayDate: "May 24, 2026",
      category: "ai-general-news",
      companies: ["Google Cloud", "Gemini", "AI security", "Shadow AI", "Enterprise governance"],
      title: "TechCrunch: Even Google Is Navigating AI Security in Real Time",
      url: "https://techcrunch.com/2026/05/24/everyone-is-navigating-ai-security-in-real-time-even-google/",
      summary:
        "TechCrunch used comments from Google Cloud COO Francis de Souza and recent Gemini API-key incidents to frame the enterprise AI security problem: companies need data strategy, platform governance, auditability, and consistent controls across clouds before agents roam internal systems. The piece also highlights practical risks around shadow AI, stale data repositories, API-key scope expansion, billing exposure, and delayed credential revocation. For this site's guidance, it reinforces that agent adoption should include permission review, budget caps, secret hygiene, and audit trails from the start.",
    },
    {
      source: "GitHub Blog",
      date: "2026-05-22",
      displayDate: "May 22, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "Gartner", "Enterprise AI Coding Agents", "Developer productivity"],
      title: "GitHub Says Copilot Was Named a Gartner Leader for Enterprise AI Coding Agents",
      url: "https://github.blog/ai-and-ml/github-copilot/github-recognized-as-a-leader-in-the-gartner-magic-quadrant-for-enterprise-ai-coding-agents-for-the-third-year-in-a-row/",
      summary:
        "GitHub said Gartner recognized GitHub as a Leader in the 2026 Magic Quadrant for Enterprise AI Coding Agents, emphasizing Copilot's breadth across IDEs, CLI, cloud agent work, code review, governance, and enterprise deployment. The useful takeaway for VS Code users is that Copilot is now being positioned as a managed agent platform rather than a single editor feature. That makes current model selection, policy controls, agent-session review, and usage monitoring more important than treating chat, completions, and background agents as separate tools.",
    },
    {
      source: "OpenAI",
      date: "2026-05-22",
      displayDate: "May 22, 2026",
      category: "ai-general-news",
      companies: ["OpenAI", "Codex", "Gartner", "Enterprise AI Coding Agents", "Software development"],
      title: "OpenAI Says Gartner Named It a Leader in Enterprise AI Coding Agents",
      url: "https://openai.com/index/gartner-2026-agentic-coding-leader/",
      summary:
        "OpenAI published its response to Gartner's 2026 Magic Quadrant for Enterprise AI Coding Agents, saying Codex is now used by more than 4 million people each week and highlighting enterprise deployments at companies such as Cisco, Datadog, Dell Technologies, and NVIDIA. The practical signal for VS Code and Copilot users is that coding agents are being evaluated as an enterprise software category, not just as editor autocomplete. Teams should expect vendor comparisons to focus on repository reasoning, tool use, governance, deployment controls, and measurable software-delivery outcomes.",
    },
    {
      source: "OpenAI",
      date: "2026-05-22",
      displayDate: "May 22, 2026",
      category: "ai-general-news",
      companies: ["OpenAI", "Codex", "Virgin Atlantic", "Enterprise software", "Testing", "Refactoring"],
      title: "Virgin Atlantic Uses Codex to Ship and Refactor Production Software Faster",
      url: "https://openai.com/index/virgin-atlantic",
      summary:
        "OpenAI's Virgin Atlantic case study says the airline used Codex to strengthen test coverage before a high-stakes mobile-app launch, ship with no P1 launch defects, and cut some legacy refactors from roughly two weeks to about 30 minutes. The relevant takeaway for developer teams is not just speed: mature Codex adoption is being framed around test coverage, defect reduction, refactoring safety, and delivery coordination. That is the same operating model this site's agent guidance recommends for production codebases: let agents accelerate work, but keep verification and release quality visible.",
    },
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
      date: "2026-05-18",
      displayDate: "May 18, 2026",
      category: "ai-general-news",
      companies: ["Vatican", "Anthropic", "AI ethics", "AI governance", "Human dignity"],
      title: "AP: Pope Leo XIV and Anthropic Co-Founder to Launch AI Encyclical on May 25",
      url: "https://apnews.com/article/9cf3e07fd691f6af510c4a6f9c8ba353",
      summary:
        "AP reported that Pope Leo XIV and Anthropic co-founder Jack Clark are scheduled to launch the pontiff's first encyclical on May 25, focused on human dignity in the era of artificial intelligence. The item is not a developer-product release, but it is worth tracking because it puts AI governance, labor, safety, and human agency into a major global institutional forum. For teams adopting agents and model-assisted workflows, it reinforces that AI rollouts should be evaluated through trust, accountability, and human-impact lenses, not only through productivity metrics.",
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
