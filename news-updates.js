(function () {
  const updates = [
    {
      source: "Google",
      date: "2026-05-19",
      displayDate: "May 19, 2026",
      category: "new-models",
      companies: ["Google", "Gemini", "Gemini 3.5 Flash", "Gemini Omni", "Google I/O", "Antigravity"],
      title: "Google I/O 2026 Introduces Gemini 3.5 Flash and Gemini Omni",
      url: "https://blog.google/innovation-and-ai/technology/developers-tools/google-io-2026-collection/",
      summary:
        "Google's I/O 2026 announcements center on a more agentic Gemini platform, including Gemini 3.5 Flash, the first model in a new family built around frontier intelligence plus action, and Gemini Omni, a multimodal creation model that starts with video. Google also highlighted Antigravity as its agent-first development platform, signaling that its developer story is moving from AI-assisted writing toward agents that can plan, act, and build. For VS Code and coding-agent users, this adds another major model family to watch for fast agent execution and multimodal workflow support.",
    },
    {
      source: "Google",
      date: "2026-05-19",
      displayDate: "May 19, 2026",
      category: "ai-general-news",
      companies: ["Google", "Gemini", "Gemini Spark", "Gemini app", "Workspace", "MCP", "macOS"],
      title: "Google Makes the Gemini App More Proactive With Daily Brief and Gemini Spark",
      url: "https://blog.google/innovation-and-ai/products/gemini-app/next-evolution-gemini-app/",
      summary:
        "Google announced a redesigned Gemini app with Gemini 3.5 Flash, Gemini Omni, Daily Brief, and Gemini Spark, a cloud-based personal AI agent designed to keep working across connected apps under user direction. Spark is built on Gemini 3.5 and the Antigravity harness, connects with Workspace tools, and is planned to gain MCP connections, custom sub-agents, browser operation, and macOS desktop automation. The practical takeaway is that consumer AI assistants are adopting the same long-running, tool-using agent patterns that coding agents already use, with explicit permission checkpoints for high-stakes actions.",
    },
    {
      source: "OpenAI",
      date: "2026-05-19",
      displayDate: "May 19, 2026",
      category: "ai-general-news",
      companies: ["OpenAI", "C2PA", "SynthID", "Content Credentials", "Codex", "AI safety"],
      title: "OpenAI Adds SynthID and Public Verification to Its Content Provenance Stack",
      url: "https://openai.com/index/advancing-content-provenance/",
      summary:
        "OpenAI strengthened its AI-generated media provenance approach by becoming a C2PA conforming generator product, adding Google DeepMind SynthID watermarking for images generated through ChatGPT, Codex, or the OpenAI API, and previewing a public verification tool. OpenAI frames the update as a layered system: C2PA metadata carries signed context, while SynthID gives a more durable signal when metadata is stripped or transformed. For teams using AI image and content workflows, this is a governance signal that provenance, verification, and platform interoperability are becoming core product requirements.",
    },
    {
      source: "Anthropic",
      date: "2026-05-19",
      displayDate: "May 19, 2026",
      category: "ai-general-news",
      companies: ["Anthropic", "Claude", "KPMG", "Digital Gateway", "Enterprise AI", "Cybersecurity"],
      title: "KPMG Will Roll Out Claude Across More Than 276,000 Employees",
      url: "https://www.anthropic.com/news/anthropic-kpmg",
      summary:
        "Anthropic and KPMG announced a global alliance that gives more than 276,000 KPMG employees access to Claude and embeds Claude into KPMG's Digital Gateway platform, starting with new tax and legal tools. The partnership also names KPMG a preferred Anthropic partner for private equity and includes work on cybersecurity use cases such as finding and fixing vulnerabilities in critical systems. For enterprise AI teams, this is another signal that Claude adoption is moving into governed internal platforms, client delivery workflows, and security-sensitive operations rather than isolated pilots.",
    },
    {
      source: "TechCrunch",
      date: "2026-05-19",
      displayDate: "May 19, 2026",
      category: "ai-general-news",
      companies: ["Google", "Gemini 3.5 Flash", "Antigravity", "AI agents", "Coding agents"],
      title: "TechCrunch: Gemini 3.5 Flash Shows Google's Shift From Chatbots to Agents",
      url: "https://techcrunch.com/2026/05/19/with-gemini-3-5-flash-google-bets-its-next-ai-wave-on-agents-not-chatbots/",
      summary:
        "TechCrunch reported that Google is positioning Gemini 3.5 Flash around coding and autonomous agent work, including multi-agent execution inside Antigravity 2.0. The report says Google describes Flash as faster than prior frontier models and designed for long-running agentic tasks where sub-agents can split work, coordinate, and pause for human judgment at decision or permission points. For developer workflows, the important takeaway is competitive pressure: coding-agent platforms are increasingly being judged on model speed, orchestration, tool execution, and how clearly they handle human approval boundaries.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-05-18",
      displayDate: "May 18, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "Microsoft", "GitHub Copilot", "Copilot CLI", "VS Code", "Remote control"],
      title: "Copilot CLI Remote Control Reaches GA Across Mobile, Web, VS Code, and JetBrains",
      url: "https://github.blog/changelog/2026-05-18-remote-control-for-copilot-cli-sessions-now-generally-available-on-mobile-web-and-vs-code",
      summary:
        "GitHub made remote control for Copilot CLI sessions generally available on GitHub Mobile and github.com, added support for non-GitHub repositories and ordinary directories, and introduced remote control in VS Code and JetBrains. Developers can now start a Copilot CLI session from a terminal or editor, stream progress in real time, steer the session from another device, respond to questions, approve or deny requests, and stop a session remotely. For VS Code users, this makes long-running local agent work more practical, especially when paired with the Agents window and keep-alive workflows.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-05-18",
      displayDate: "May 18, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "Microsoft", "GitHub Copilot", "Copilot cloud agent", "GitHub Actions"],
      title: "Copilot Cloud Agent Adds One-Click Fixes for Failing GitHub Actions",
      url: "https://github.blog/changelog/2026-05-18-one-click-fixes-for-failing-actions-with-copilot-cloud-agent",
      summary:
        "GitHub added a Fix with Copilot button to failing GitHub Actions workflow logs for Copilot Business and Copilot Enterprise subscribers. Copilot cloud agent can investigate the failure, push a fix to the branch, and tag the user for review from its own cloud development environment. The feature is most useful for routine CI failures such as broken tests and linter issues, and it reinforces a practical workflow pattern: let agents handle time-consuming validation repair while humans review the resulting branch before merge.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-05-18",
      displayDate: "May 18, 2026",
      category: "new-models",
      companies: ["GitHub", "Microsoft", "GitHub Copilot", "Claude Haiku 4.5", "GPT-5.4 mini", "Copilot cloud agent"],
      title: "Copilot Cloud Agent Adds Lower-Cost Models for Simple Tasks",
      url: "https://github.blog/changelog/2026-05-18-copilot-cloud-agent-fast-cost-efficient-models-for-simple-tasks",
      summary:
        "GitHub expanded Copilot cloud agent model selection with Claude Haiku 4.5 and GPT-5.4 mini, both listed with 0.33x multipliers. The update gives teams a cheaper, faster option for straightforward delegated changes while preserving stronger models for complex work. For model guidance on this site, the recommendation remains to reserve heavier models for ambiguous planning and reviews, and use 0.33x models for simple fixes, repo scans, and low-risk iteration.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-05-18",
      displayDate: "May 18, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "Microsoft", "GitHub Copilot", "Copilot Spaces", "API"],
      title: "Copilot Spaces API Becomes Generally Available",
      url: "https://github.blog/changelog/2026-05-18-copilot-spaces-api-now-generally-available",
      summary:
        "GitHub made the Copilot Spaces API generally available, letting teams programmatically create, read, update, delete, and manage Spaces, collaborators, and resources. For enterprises using Copilot as a shared knowledge layer, this matters because curated project context can now be managed at scale from internal tools rather than only through manual UI steps. The practical takeaway for agent workflows is to treat Spaces as governed reusable context, especially for standards, architecture notes, and onboarding material.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-05-18",
      displayDate: "May 18, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "Microsoft", "GitHub Copilot", "Copilot cloud agent", "Security", "API"],
      title: "GitHub Adds REST API Auditing for Copilot Cloud Agent Configuration",
      url: "https://github.blog/changelog/2026-05-18-audit-repository-copilot-cloud-agent-configuration-via-the-rest-api",
      summary:
        "GitHub introduced a public-preview REST API for auditing a repository's Copilot cloud agent configuration, including MCP server setup, enabled tools, GitHub Actions workflow policy, and firewall configuration. For organizations rolling out background agents, this is an important governance feature because security teams can inspect agent posture across repositories instead of manually checking each repo. The recommendation is to include this API in agent-readiness checks alongside model policy, network rules, and review requirements.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-05-18",
      displayDate: "May 18, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "Microsoft", "GitHub Copilot", "GitHub.com", "Contextual chat", "Agents"],
      title: "GitHub Copilot Chat on Web Now Opens in Page Context",
      url: "https://github.blog/changelog/2026-05-18-ask-questions-in-context-with-copilot-on-web/",
      summary:
        "GitHub changed Copilot chat on the web so the Copilot icon opens a contextual panel on the current GitHub page instead of navigating away. Issues, pull requests, and other GitHub surfaces can be attached automatically as context while users navigate, and conversations can be turned into agent sessions by asking Copilot to create a pull request or perform deeper research. For teams, this reduces context switching and makes GitHub.com a more direct bridge between questions, repository context, and agentic follow-through.",
    },
    {
      source: "Visual Studio Code",
      date: "2026-05-15",
      displayDate: "May 15, 2026",
      category: "ai-general-news",
      companies: ["Microsoft", "Visual Studio Code", "GitHub Copilot", "Agent Host", "Claude", "BYOK"],
      title: "VS Code 1.121 Iteration Adds Agent Host and BYOK Improvements",
      url: "https://code.visualstudio.com/updates/v1_121",
      summary:
        "The VS Code 1.121 iteration notes add several agent-workflow improvements after the 1.120 stable release, including friendlier Agent Host tool displays, an auto-approve picker for Agent Host connections, automatic permission mode for Claude Agent sessions, custom endpoint BYOK support for OpenAI-compatible and Anthropic-compatible providers, pinned favorite models, integrated-browser Add to Chat improvements, and Mermaid rendering in Copilot CLI chat responses. These are iteration notes, not a stable release replacement, but they show where VS Code agent UX is moving next.",
    },
    {
      source: "OpenAI",
      date: "2026-05-18",
      displayDate: "May 18, 2026",
      category: "ai-general-news",
      companies: ["OpenAI", "Dell Technologies", "Codex", "Enterprise AI", "Hybrid cloud", "On-premises AI"],
      title: "OpenAI and Dell Partner to Bring Codex Into Hybrid and On-Prem Enterprise Environments",
      url: "https://openai.com/index/dell-codex-enterprise-partnership/",
      summary:
        "OpenAI and Dell Technologies announced a partnership to help enterprises run Codex closer to governed internal data and systems through Dell AI Data Platform and Dell AI Factory environments. OpenAI says more than 4 million developers now use Codex weekly, and that teams are expanding Codex-powered agents beyond software work into reports, product feedback, sales follow-up, and business-system coordination. For VS Code and coding-agent teams, this is a clear enterprise signal: production agent adoption is moving toward hybrid infrastructure, data governance, and repeatable deployment patterns instead of only browser- or desktop-hosted sessions.",
    },
    {
      source: "Anthropic",
      date: "2026-05-18",
      displayDate: "May 18, 2026",
      category: "ai-general-news",
      companies: ["Anthropic", "Claude", "Stainless", "MCP", "SDKs", "Developer tools"],
      title: "Anthropic Acquires Stainless to Strengthen Claude SDK and MCP Tooling",
      url: "https://www.anthropic.com/news/anthropic-acquires-stainless",
      summary:
        "Anthropic acquired Stainless, the developer-tooling company that has generated Anthropic's official SDKs since the early Claude API era and also builds CLIs and MCP servers from API specifications. Anthropic frames the acquisition around agent connectivity: as models act through tools and data systems, the quality of SDKs, connectors, and MCP servers becomes part of model usefulness. For teams building Copilot, Claude Code, Codex, and custom agent workflows, the practical takeaway is that API ergonomics and managed tool connectors are becoming strategic infrastructure, not just library maintenance.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-05-17",
      displayDate: "May 17, 2026",
      category: "new-models",
      companies: ["GitHub", "Microsoft", "GitHub Copilot", "OpenAI", "GPT-5.3-Codex", "Copilot Enterprise"],
      title: "GPT-5.3-Codex Becomes the Copilot Business and Enterprise Base Model",
      url: "https://github.blog/changelog/2026-05-17-gpt-5-3-codex-is-now-the-base-model-for-copilot-business-and-enterprise/",
      summary:
        "GitHub's March LTS announcement reached its May 17 milestone: GPT-5.3-Codex is now the base model for Copilot Business and Copilot Enterprise organizations when no other internally approved model is enabled. GitHub says the OpenAI coding model is the first Copilot long-term-support model, remains available through February 4, 2027, and carries a 1x premium request multiplier. For enterprise VS Code users, this is a practical governance change because default model behavior can shift even before teams opt into newer preview models.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-05-15",
      displayDate: "May 15, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "Microsoft", "GitHub Copilot", "Copilot Memory", "Personalization"],
      title: "Copilot Memory Adds User-Level Preferences for Pro and Pro+",
      url: "https://github.blog/changelog/2026-05-15-copilot-memory-supports-user-preferences-for-pro-pro-users/",
      summary:
        "GitHub put user-level Copilot Memory preferences into early access for Copilot Pro and Pro+ users, expanding memory beyond repository-level facts. Copilot can now remember stated or inferred personal preferences such as commit style, pull request structure, and communication tone across Copilot experiences. For VS Code users, this makes memory a cross-repository personalization feature, but it also makes memory review and deletion settings more important.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-05-15",
      displayDate: "May 15, 2026",
      category: "new-models",
      companies: ["GitHub", "Microsoft", "GitHub Copilot", "xAI", "Grok Code Fast 1", "GPT-5 mini", "Claude Haiku 4.5"],
      title: "Grok Code Fast 1 Is Now Deprecated Across GitHub Copilot",
      url: "https://github.blog/changelog/2026-05-15-grok-code-fast-1-deprecated/",
      summary:
        "GitHub confirmed that Grok Code Fast 1 was deprecated across Copilot Chat, inline edits, ask mode, agent mode, and code completions on May 15, 2026. GitHub lists GPT-5 mini and Claude Haiku 4.5 as suggested alternatives, so teams should remove Grok from model policies, quick-pick docs, and low-cost coding workflows instead of treating the May 8 deprecation notice as a future change.",
    },
    {
      source: "OpenAI",
      date: "2026-05-15",
      displayDate: "May 15, 2026",
      category: "ai-general-news",
      companies: ["OpenAI", "ChatGPT", "Personal finance", "Plaid", "Connected apps"],
      title: "OpenAI Starts Rolling Out Personal Finances in ChatGPT",
      url: "https://openai.com/index/personal-finance-chatgpt/",
      summary:
        "OpenAI's ChatGPT release notes now describe a personal finance experience for Pro users in the United States that can connect supported accounts through Plaid, show a finance dashboard, and answer questions grounded in spending, bills, subscriptions, net worth, and investments. The important adoption signal is that ChatGPT is moving further into permissioned personal-data workflows, while OpenAI states the feature cannot move money, pay bills, place trades, file taxes, or act as a financial, legal, tax, or investment adviser.",
    },
    {
      source: "The Verge",
      date: "2026-05-14",
      displayDate: "May 14, 2026",
      category: "ai-general-news",
      companies: ["Microsoft", "GitHub", "GitHub Copilot", "Copilot CLI", "Anthropic", "Claude Code"],
      title: "Microsoft Reportedly Pulls Back Internal Claude Code Licenses for Copilot CLI",
      url: "https://www.theverge.com/tech/930447/microsoft-claude-code-discontinued-notepad",
      summary:
        "The Verge reported that Microsoft plans to remove most Claude Code licenses inside its Experiences + Devices group by the end of June and push many developers toward GitHub Copilot CLI instead. The report says Claude Code became popular during a six-month internal trial, while Microsoft wants a coding-agent CLI it can shape directly with GitHub for its own repositories, security expectations, and engineering workflows. For Copilot users, this is an important competitive signal: Microsoft still uses Anthropic models through Copilot surfaces, but it wants the agent command-line experience centered on Copilot CLI.",
    },
    {
      source: "OpenAI Help Center",
      date: "2026-05-14",
      displayDate: "May 14, 2026",
      category: "ai-general-news",
      companies: ["OpenAI", "Codex", "ChatGPT mobile", "iOS", "Android"],
      title: "Codex Remote Access Arrives in the ChatGPT Mobile App",
      url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
      summary:
        "OpenAI added Codex remote access to the ChatGPT mobile app in preview, letting users monitor active work, answer questions, change direction, review findings, and move across connected hosts while Codex continues running on a Mac. For coding-agent workflows, this turns mobile into a supervision surface: the host Mac must stay awake, online, and running Codex, but developers can keep long-running local work moving when they are away from the desk.",
    },
    {
      source: "GitHub Blog",
      date: "2026-05-14",
      displayDate: "May 14, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "Microsoft", "GitHub Copilot", "VS Code", "Copilot CLI"],
      title: "GitHub Clarifies Copilot Individual Usage Limits and Refund Policy",
      url: "https://github.blog/news-insights/company-news/changes-to-github-copilot-individual-plans/",
      summary:
        "GitHub updated its Copilot Individual plan changes post to clarify refund policy language and explain how token-based session and weekly usage limits differ from premium request entitlements. The post says VS Code and Copilot CLI now display available usage as users approach a limit, which matters for agent-heavy workflows because users may still have premium requests available while hitting a separate token guardrail.",
    },
    {
      source: "OpenAI",
      date: "2026-05-13",
      displayDate: "May 13, 2026",
      category: "ai-general-news",
      companies: ["OpenAI", "Codex", "Windows", "Sandboxing", "AI agents"],
      title: "OpenAI Details the Windows Sandbox Architecture Behind Codex",
      url: "https://openai.com/index/building-codex-windows-sandbox/",
      summary:
        "OpenAI published an engineering deep dive on the Windows sandbox used by Codex, explaining why existing Windows isolation tools did not fit open-ended coding-agent workloads and how the final design uses dedicated sandbox users, restricted tokens, firewall rules, and a command-runner layer. For developers running autonomous coding tools, the post is a useful reminder that local agents need operating-system-enforced write and network boundaries, not just prompt-level trust.",
    },
    {
      source: "Anthropic",
      date: "2026-05-14",
      displayDate: "May 14, 2026",
      category: "ai-general-news",
      companies: ["Anthropic", "Claude", "Claude Code", "Claude Cowork", "PwC", "Enterprise AI"],
      title: "Anthropic and PwC Expand Claude Deployment Across Enterprise Work",
      url: "https://www.anthropic.com/news/pwc-expanded-partnership",
      summary:
        "Anthropic and PwC expanded their strategic alliance, with PwC rolling out Claude Code and Claude Cowork to U.S. teams first, establishing a joint Center of Excellence, and planning to train and certify 30,000 professionals on Claude. The announcement emphasizes production deployments in software delivery, finance, deals, healthcare, insurance, mainframe modernization, HR, and cybersecurity, with reported delivery-time reductions of up to 70%. For AI adoption teams, this is a practical marker that coding agents and office agents are moving from pilots into managed consulting-led operating models.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const seenUrls = new Set();
  const seenTitles = new Set();

  window.newsFeed = [...updates, ...existingItems].filter((item) => {
    const urlKey = item.url ? item.url.trim().toLowerCase() : "";
    const titleKey = item.title ? item.title.trim().toLowerCase() : "";

    if ((urlKey && seenUrls.has(urlKey)) || (titleKey && seenTitles.has(titleKey))) {
      return false;
    }

    if (urlKey) {
      seenUrls.add(urlKey);
    }
    if (titleKey) {
      seenTitles.add(titleKey);
    }

    return true;
  });
})();
