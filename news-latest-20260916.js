(function () {
  const latestUpdates = [
    {
      source: "Microsoft for Developers",
      date: "2026-09-15",
      displayDate: "September 15, 2026",
      category: "workflows",
      companies: ["GitHub Copilot SDK", "MCP", "Microsoft Agent Framework", ".NET"],
      title: "Copilot SDK Sample Shows How to Narrow Tools and Coordinate Specialist Agents",
      url: "https://developer.microsoft.com/blog/build-an-interview-coach-app-with-the-github-copilot-sdk/",
      summary:
        "Microsoft's interview-coach sample uses the GitHub Copilot SDK as an application runtime rather than a coding environment. Specialist agents receive explicit custom-tool allowlists, call document and session services through MCP, and use Microsoft Agent Framework for handoffs. The practical pattern is to expose only the capabilities each agent needs, merge invocation-time handoff tools deliberately, enforce authorization beyond tool selection, and define retention and recovery before using real data. SDK requests still count against the authenticated user's Copilot plan and policy.",
    },
    {
      source: "Microsoft Visual Studio Blog",
      date: "2026-09-15",
      displayDate: "September 15, 2026",
      category: "workflows",
      companies: ["GitHub Copilot", "Visual Studio", "Test Agent", "Code coverage"],
      title: "Visual Studio Test Agent Workflow Starts with a Coverage Baseline",
      url: "https://devblogs.microsoft.com/visualstudio/today-i-will-improve-test-coverage/",
      summary:
        "Microsoft demonstrates a test-improvement loop that measures coverage first, targets one under-tested class, reruns the report, and then expands analysis with @test #solution. In the author's sample, Copilot added a test project and targeted tests before a solution-wide pass raised measured coverage from 37% to 81%. Treat those numbers as one case study; the reusable lesson is to establish a baseline, add tests where evidence shows gaps, rerun the suite and coverage, and review generated tests for meaningful behavior rather than raw percentage gains.",
    },
    {
      source: "GitHub",
      date: "2026-09-15",
      displayDate: "September 15, 2026",
      category: "workflows",
      companies: ["GitHub Copilot", "Copilot Enterprise", "Repository governance", "Rulesets"],
      title: "Copilot Suggests Repository Custom-Property Values for Governance",
      url: "https://github.blog/changelog/2026-09-15-github-copilot-suggests-custom-properties-definitions/",
      summary:
        "GitHub Copilot can now suggest allowed values while enterprise and organization owners define repository custom properties. The Business and Enterprise public preview can help teams build more consistent metadata taxonomies for targeting rulesets, while owners retain a policy control for the feature. Review suggestions before accepting them and keep the final property vocabulary aligned with actual governance and compliance definitions.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
