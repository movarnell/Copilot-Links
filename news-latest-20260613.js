(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-06-12",
      displayDate: "June 12, 2026",
      category: "ai-agents-coding",
      companies: ["GitHub", "GitHub Copilot", "Copilot code review", "GitHub Actions", "Enterprise AI"],
      title: "Copilot Code Review Adds Organization Runner Controls and Content Exclusions",
      url: "https://github.blog/changelog/2026-06-12-copilot-code-review-new-configurations-and-controls/",
      summary:
        "GitHub added organization-level runner controls for Copilot code review, letting admins set and lock runner defaults that also apply to Copilot cloud agent when both are enabled. The update also makes Copilot code review respect repository, organization, and enterprise content-exclusion settings, and removes the character limit for Copilot custom-instruction files under .github. The workflow takeaway is that AI review is becoming a governed CI surface: teams should pair model and prompt guidance with runner capacity, content-boundary rules, and maintainable review instructions.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
