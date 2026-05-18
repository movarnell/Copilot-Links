(function () {
  const updates = [
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
