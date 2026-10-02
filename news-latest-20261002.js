(function () {
  const latestUpdates = [
  {
    "source": "Axios",
    "date": "2026-10-02",
    "displayDate": "October 2, 2026",
    "category": "ai-general-news",
    "companies": [
      "OpenAI",
      "Anthropic",
      "AI Policy"
    ],
    "title": "AI Researchers Gain Influence Over Company Policy and Strategy",
    "url": "https://www.axios.com/2026/10/02/openai-anthropic-ai-researchers-rebellion",
    "summary": "Axios reports that scarce frontier-model researchers are exerting unusual influence over executive decisions and AI-policy positions at OpenAI, Anthropic, and other labs. The article distinguishes reported internal pressure from company and government responses as safety and regulation debates intensify."
  },
  {
    "source": "GitHub Changelog",
    "date": "2026-10-01",
    "displayDate": "October 1, 2026",
    "category": "ai-general-news",
    "companies": [
      "GitHub Copilot",
      "Computer Use"
    ],
    "title": "GitHub Copilot Adds Desktop Computer Use in Public Preview",
    "url": "https://github.blog/changelog/2026-10-01-github-copilot-can-now-interact-with-desktop-apps/",
    "summary": "GitHub has introduced desktop-app interaction in public preview for Copilot CLI and the Copilot app on macOS and Windows. Copilot can read app context and operate controls, asks for approval before controlling an app, and can be disabled through organization-managed settings."
  },
  {
    "source": "Google",
    "date": "2026-10-01",
    "displayDate": "October 1, 2026",
    "category": "ai-general-news",
    "companies": [
      "Google",
      "Gemini Live"
    ],
    "title": "Gemini Live Launches Guided Vision for Accessibility",
    "url": "https://blog.google/innovation-and-ai/products/gemini-app/guided-vision-gemini-live/",
    "summary": "Google’s Guided Vision adds conversational camera descriptions and spoken reframing cues to Gemini Live on Android 9+ devices in supported regions and languages. Developed with blind and low-vision users, it is not intended for navigation, obstacle detection, or replacing a mobility aid."
  },
  {
    "source": "Anthropic",
    "date": "2026-10-01",
    "displayDate": "October 1, 2026",
    "category": "ai-general-news",
    "companies": [
      "Anthropic",
      "Claude",
      "Barclays"
    ],
    "title": "Barclays Expands Claude for Development and Operations",
    "url": "https://www.anthropic.com/news/barclays-scales-claude",
    "summary": "Anthropic says Barclays is expanding Claude across software development, legacy modernization, and operational workflows. It reports a knowledge assistant used by more than 16,000 colleagues. Reaching 50% Claude Code adoption among developers by year-end is a target, not an achieved result."
  },
  {
    "source": "GitHub Changelog",
    "date": "2026-10-01",
    "displayDate": "October 1, 2026",
    "category": "ai-general-news",
    "companies": [
      "GitHub Copilot",
      "Agents"
    ],
    "title": "Dynamic Workflows Arrive in Copilot CLI and the Copilot App",
    "url": "https://github.blog/changelog/2026-10-01-dynamic-workflows-in-copilot-cli-and-the-copilot-app/",
    "summary": "GitHub’s public-preview dynamic workflows define reusable agent processes in code across Copilot CLI, the Copilot app, and the Copilot SDK. They support sequential or parallel stages, structured results, verification, and review checkpoints; CLI users must enable experimental features."
  }
];
  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
