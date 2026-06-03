(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-06-03",
      displayDate: "June 3, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "Visual Studio Code", "Agents window", "BYOK", "Agent Host Protocol"],
      title: "GitHub Summarizes May Copilot Updates for VS Code Agents",
      url: "https://github.blog/changelog/2026-06-03-github-copilot-in-visual-studio-code-may-releases/",
      summary:
        "GitHub's June 3 changelog recaps the May and early June Copilot updates in VS Code, including the Agents window preview in Stable, remote agent sessions over SSH or Dev Tunnels, Agent Host Protocol work, session sync, Chronicle commands, and side-by-side agent sessions. The release also expands bring-your-own-key model support to air-gapped environments and adds finer model controls for utility tasks, reasoning effort, and token visibility. For VS Code users, the signal is that agent work is becoming a persistent, multi-session development surface where model governance, terminal safety, remote execution, and searchable session history matter as much as inline completions.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-06-02",
      displayDate: "June 2, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "Copilot SDK", "MCP", "OpenTelemetry", "Developer tools"],
      title: "GitHub Makes the Copilot SDK Generally Available",
      url: "https://github.blog/changelog/2026-06-02-copilot-sdk-is-now-generally-available/",
      summary:
        "GitHub made the Copilot SDK generally available, giving teams stable programmatic access to the agent runtime behind Copilot for planning, tool invocation, file edits, streaming, and multi-turn sessions. The SDK is available across Node.js/TypeScript, Python, Go, .NET, Rust, and Java, and supports MCP tools, prompt customization, OpenTelemetry tracing, multiple authentication paths, cloud or remote sessions, and pre/post tool hooks. For engineering teams, this turns Copilot from an IDE-only assistant into embeddable agent infrastructure for internal tools, CI/CD assistants, customer-facing developer features, and governed automation.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-06-02",
      displayDate: "June 2, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "Copilot CLI", "Sandboxes", "Microsoft MXC", "Agent security"],
      title: "GitHub Puts Copilot Cloud and Local Sandboxes Into Public Preview",
      url: "https://github.blog/changelog/2026-06-02-cloud-and-local-sandboxes-for-github-copilot-now-in-public-preview/",
      summary:
        "GitHub put cloud and local sandboxes for Copilot into public preview, giving agent sessions isolated places to run commands, touch files, and use network access under defined policies. Local sandboxing can be enabled inside a session with `/sandbox enable` and is built on Microsoft MXC across macOS, Linux, and Windows, while cloud sandboxes launch ephemeral Linux environments through `copilot --cloud` and inherit Copilot cloud agent policies. For teams evaluating coding agents, sandboxing is a practical control layer: agent autonomy only scales if filesystem, network, identity, policy, and enterprise management boundaries are clear.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-06-02",
      displayDate: "June 2, 2026",
      category: "new-models",
      companies: ["GitHub", "GitHub Copilot", "Google", "Gemini 3.1 Pro", "Gemini 3.5 Flash", "Model governance"],
      title: "GitHub Expands Gemini Model Access Across Copilot Surfaces",
      url: "https://github.blog/changelog/2026-06-02-gemini-models-in-copilot-cli-cloud-agent-and-the-copilot-app/",
      summary:
        "GitHub added Gemini 3.1 Pro in preview and Gemini 3.5 Flash across more Copilot surfaces, including Copilot CLI, Copilot cloud agent, the Copilot app technical preview, and the Copilot SDK. Gemini 3.1 Pro is available across Student, Pro, Pro+, Business, and Enterprise plans, while Gemini 3.5 Flash is available for Pro, Pro+, Business, and Enterprise subscribers, with Business and Enterprise admins required to enable the relevant model policy. For model selection guidance, this reinforces Copilot as a multi-model platform where admins need to track surface availability, preview status, plan eligibility, and policy gates before recommending a model for production workflows.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-06-02",
      displayDate: "June 2, 2026",
      category: "new-models",
      companies: ["GitHub", "GitHub Copilot", "Microsoft", "MAI-Code-1-Flash", "VS Code", "Coding models"],
      title: "Microsoft's MAI-Code-1-Flash Begins Rolling Out in GitHub Copilot",
      url: "https://github.blog/changelog/2026-06-02-mai-code-1-flash-is-now-available-for-github-copilot/",
      summary:
        "GitHub said MAI-Code-1-Flash, Microsoft's new small-tier coding model, is beginning to roll out in GitHub Copilot starting with Visual Studio Code. The model is tuned specifically for Copilot, positioned for lightweight coding workflows, and will gradually expand across Copilot Free, Pro, Pro+, and Max plans after an initial limited rollout. For developers, this is another sign that routine coding work is being routed toward specialized, lower-cost models while larger frontier models are reserved for higher-complexity planning, review, and reasoning tasks.",
    },
    {
      source: "Microsoft 365 Blog",
      date: "2026-06-02",
      displayDate: "June 2, 2026",
      category: "ai-general-news",
      companies: ["Microsoft", "Microsoft 365 Copilot", "Scout", "Personal agents", "Knowledge work"],
      title: "Microsoft Introduces Scout as an Always-On Personal Agent for Microsoft 365",
      url: "https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/introducing-microsoft-scout-your-always-on-personal-agent/",
      summary:
        "Microsoft introduced Scout, an always-on personal agent for Microsoft 365 that is designed to stay grounded in the apps and work context people already use. The announcement matters for AI-workflow tracking because it pushes Copilot-style assistance beyond prompt-response chat into persistent, user-specific agency across documents, communication, and daily work. For teams adopting AI tools, the practical question is how to govern memory, permissions, delegation, and handoff when agents become a standing part of the productivity stack instead of a one-off assistant.",
    },
    {
      source: "Microsoft Blog",
      date: "2026-06-02",
      displayDate: "June 2, 2026",
      category: "ai-general-news",
      companies: ["Microsoft", "CoreAI", "GitHub", "Azure AI Foundry", "Fabric", "Enterprise agents"],
      title: "Microsoft Frames Azure, GitHub, Foundry, Fabric, and Copilot as One Agent System",
      url: "https://blogs.microsoft.com/blog/2026/06/02/ai-alone-wont-change-your-business-the-system-running-it-will/",
      summary:
        "Microsoft's CoreAI group argued that enterprise AI value depends on the operating system around agents, not just the model. The post says Microsoft is bringing Azure, GitHub, Microsoft IQ, Fabric, Foundry, Windows, Microsoft Security, and Microsoft 365 together as a single system for deploying agents at enterprise scale. For engineering and operations teams, the signal is that agent adoption increasingly depends on identity, data access, orchestration, security controls, developer workflows, and observability across the full stack.",
    },
    {
      source: "OpenAI",
      date: "2026-06-02",
      displayDate: "June 2, 2026",
      category: "ai-general-news",
      companies: ["OpenAI", "Codex", "Plugins", "Sites", "Annotations", "Knowledge work"],
      title: "OpenAI Expands Codex With Role-Specific Plugins, Sites, and Annotations",
      url: "https://openai.com/index/codex-for-every-role-tool-workflow/",
      summary:
        "OpenAI introduced new Codex capabilities aimed beyond software teams: role-specific plugins, workspace-shareable Sites, and in-place annotations for refining generated work. The launch includes six plugin bundles for data analytics, creative production, product design, sales, public equity investing, and investment banking, with OpenAI saying the bundles span 62 popular apps and 110 skills. For teams using coding agents, the signal is that Codex is becoming a broader work-execution layer where connectors, reusable skills, review surfaces, and shareable outputs matter as much as code generation.",
    },
    {
      source: "OpenAI",
      date: "2026-06-02",
      displayDate: "June 2, 2026",
      category: "ai-general-news",
      companies: ["OpenAI", "Codex", "Knowledge work", "AI adoption", "Workflow automation"],
      title: "OpenAI Says Codex Has Passed 5 Million Weekly Active Users",
      url: "https://openai.com/index/codex-for-knowledge-work/",
      summary:
        "OpenAI released a report describing Codex as a productivity tool for more than developers, saying Codex now has over 5 million weekly active users and that knowledge workers make up about 20 percent of usage while growing faster than developers. OpenAI says non-developer use is concentrated in reports, spreadsheets, presentations, contracts, research, data analysis, workflow automation, and lightweight internal tools. For AI adoption planning, this broadens the practical evaluation question from whether agents write code well to whether teams can govern parallel agent work that creates business artifacts across roles.",
    },
    {
      source: "GitHub Blog",
      date: "2026-06-02",
      displayDate: "June 2, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "Copilot app", "Agent Merge", "Copilot SDK", "Copilot code review"],
      title: "GitHub Introduces Copilot App as an Agent-Native Desktop Experience",
      url: "https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/",
      summary:
        "At Microsoft Build, GitHub introduced the Copilot app technical preview as a desktop control center for agentic development across issues, pull requests, sessions, canvases, sandboxes, and review workflows. GitHub says sessions run in separate git worktrees, Agent Merge can help carry pull requests through checks and review, and the Copilot SDK is generally available across major languages for teams embedding the same runtime in their own tools. For VS Code and GitHub users, this makes agent orchestration, validation, sandbox policy, cost tiers, and human review flow central parts of the coding-agent experience.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
