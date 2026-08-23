(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-08-21",
      displayDate: "August 21, 2026",
      category: "developer-tools",
      companies: ["GitHub Copilot", "Microsoft Teams", "Agents", "Workflows"],
      title: "Shared Agentic Work with GitHub Copilot Arrives in Microsoft Teams",
      url: "https://github.blog/changelog/2026-08-21-shared-agentic-work-with-github-copilot-in-microsoft-teams/",
      summary:
        "GitHub says Copilot coding agent is now available in Microsoft Teams so developers can create, assign, track, and review agent work from a Teams conversation while Copilot works in the background on GitHub issues and pull requests. The Teams integration extends Copilot's agent workflow into day-to-day collaboration, making issue assignment, status checks, and code-review handoff visible without requiring every participant to start from the GitHub or VS Code interface.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-08-21",
      displayDate: "August 21, 2026",
      category: "developer-tools",
      companies: ["GitHub Copilot", "Slack", "Agents", "Workflows"],
      title: "The New GitHub Copilot Experience in Slack Enters Public Preview",
      url: "https://github.blog/changelog/2026-08-21-the-new-github-copilot-experience-in-slack/",
      summary:
        "GitHub's changelog says Copilot coding agent is now available in Slack, letting teams ask Copilot to open or work through GitHub issues, follow progress, and review agent output from a Slack thread. For AI workflow rollouts, this is a practical governance and adoption update: developers can keep human discussion in Slack while routing the actual implementation work back through GitHub's issue, branch, and pull-request flow.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
