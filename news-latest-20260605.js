(function () {
  const latestUpdates = [
    {
      source: "OpenAI",
      date: "2026-06-04",
      displayDate: "June 4, 2026",
      category: "ai-general-news",
      companies: ["OpenAI", "ChatGPT", "Memory", "Dreaming", "Personalization"],
      title: "OpenAI Rolls Out a More Scalable ChatGPT Memory System",
      url: "https://openai.com/index/chatgpt-memory-dreaming/",
      summary:
        "OpenAI began rolling out a new ChatGPT memory architecture built on its background 'dreaming' system, designed to improve freshness, continuity, relevance, and scalability as memory spans more users and longer time horizons. The update is available to Plus and Pro users in the U.S. first, with broader rollout planned, and adds a reviewable memory summary page where users can inspect and correct what ChatGPT knows. For teams adopting AI assistants, the practical signal is that durable personalization is becoming a core product capability, but it also raises sharper requirements around user controls, stale context, privacy expectations, and time-aware memory behavior.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-06-04",
      displayDate: "June 4, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "Context windows", "Reasoning levels", "AI Credits"],
      title: "GitHub Adds Larger Context Windows and Configurable Reasoning to Copilot",
      url: "https://github.blog/changelog/2026-06-04-larger-context-windows-and-configurable-reasoning-levels-for-github-copilot/",
      summary:
        "GitHub Copilot now supports one-million-token context windows and configurable reasoning levels in VS Code, Copilot CLI, and the GitHub Copilot app, with more surfaces planned. GitHub says larger context helps with bigger codebases, longer documents, and complex multi-file work, while reasoning controls let users trade speed for depth on architectural and debugging tasks. The cost caveat matters: larger context and higher reasoning consume more GitHub AI Credits, so teams should treat these as targeted tools for complex work rather than default settings for every prompt.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-06-04",
      displayDate: "June 4, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "Copilot cloud agent", "REST API", "Automation"],
      title: "GitHub Opens the Copilot Agent Tasks REST API in Public Preview",
      url: "https://github.blog/changelog/2026-06-04-agent-tasks-rest-api-now-available-for-copilot-pro-pro-and-max/",
      summary:
        "GitHub made the Agent tasks REST API available in public preview for Copilot Pro, Pro+, and Max users, allowing developers to programmatically start and track Copilot cloud agent tasks. The API lets Copilot work in a background development environment, make and validate code changes, and open pull requests, with example use cases including broad refactors, new-repo setup, and weekly release preparation. For teams building agent workflows, this moves Copilot cloud agent closer to programmable infrastructure, where authentication, progress tracking, branch policy, and review gates become part of automation design.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-06-04",
      displayDate: "June 4, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "GitHub Actions", "CI", "Copilot cloud agent"],
      title: "GitHub Lets Individual Copilot Plans Fix Failing Actions With Copilot",
      url: "https://github.blog/changelog/2026-06-04-fix-with-copilot-for-failing-actions-now-in-pro-pro-and-max/",
      summary:
        "GitHub expanded Fix with Copilot for failing GitHub Actions jobs to Copilot Pro, Pro+, and Max subscribers. From a workflow run logs page, users can ask Copilot cloud agent to investigate a failure, push a fix to the branch, and tag the user for review once the work is complete. This is a concrete example of coding agents moving into CI repair workflows: the value is less about chat and more about handing off repetitive test and lint failures while preserving human review before merge.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-06-04",
      displayDate: "June 4, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "Pull requests", "Copilot Chat", "Code review"],
      title: "GitHub Makes Pull Request Context in Copilot Chat Generally Available",
      url: "https://github.blog/changelog/2026-06-04-copilot-chat-brings-richer-context-to-pull-requests/",
      summary:
        "GitHub made richer Copilot Chat context for diffs and pull requests generally available to users with a Copilot license. The experience places chat beside pull request code, supports inline questions and edits, and uses improved pull request understanding, review, and summary abilities to pull relevant repository context into answers faster. For reviewers, this turns Copilot Chat into a more integrated review companion on github.com, especially for understanding diffs, asking targeted questions, and reducing context switching during pull request review.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
