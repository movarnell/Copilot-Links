const resources = [
  {
    title: "Awesome Copilot",
    url: "https://github.com/github/awesome-copilot",
    type: "Collection",
    note: "Community-curated repository of Copilot resources and examples.",
  },
  {
    title: "About Agent Skills",
    url: "https://docs.github.com/en/copilot/concepts/agents/about-agent-skills",
    type: "Docs",
    note: "GitHub Docs page describing agent skills in Copilot.",
  },
  {
    title: "Skills Introduction (Notebooks)",
    url: "https://platform.claude.com/cookbook/skills-notebooks-01-skills-introduction",
    type: "Cookbook",
    note: "Comprehensive interactive notebook covering Claude Skills fundamentals. Learn how to create professional documents (Excel, PowerPoint, PDFs) with expert-level quality using Skills. Covers setup and installation, understanding the progressive disclosure architecture, discovering available Anthropic-managed skills (xlsx, pptx, pdf, docx), and includes quick-start examples with code. Explains key benefits including expert-level performance, cost efficiency through efficient token usage, proven helper scripts, and composable skills. Features troubleshooting guidance and real-world examples for automating business workflows and document generation.",
  },
  // Official Docs — Core Agents & Skills
  {
    title: "About GitHub Copilot Coding Agent",
    url: "https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-coding-agent",
    type: "Docs",
    note: "Conceptual overview of the coding agent architecture, how it autonomously works on GitHub issues, opens pull requests, and the session lifecycle.",
  },
  {
    title: "Creating Custom Agents",
    url: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents",
    type: "Docs",
    note: "Step-by-step guide for creating specialized agents via .agent.md files. Covers how to define agent identity, instructions, and attach skills for specialized workflows.",
  },
  {
    title: "Creating Agent Skills",
    url: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/create-skills",
    type: "Docs",
    note: "Detailed guide on developing reusable skills using the SKILL.md format. Covers skill structure, storage locations (.github/skills or ~/.copilot/skills), and attaching skills to custom agents.",
  },
  {
    title: "Best Practices for Copilot Coding Agent",
    url: "https://docs.github.com/copilot/how-tos/agents/copilot-coding-agent/best-practices-for-using-copilot-to-work-on-tasks",
    type: "Docs",
    note: "Official best practices covering task definition, repository instructions (copilot-instructions.md), custom agents, security considerations, and testing strategies for agentic workflows.",
  },
  {
    title: "Building Copilot Extensions",
    url: "https://docs.github.com/en/copilot/building-copilot-extensions",
    type: "Docs",
    note: "Comprehensive official documentation hub for building Copilot extensions. Covers architecture, integration patterns, GitHub App setup, request verification, and deployment to the marketplace.",
  },
  {
    title: "About Building Copilot Extensions",
    url: "https://docs.github.com/en/copilot/building-copilot-extensions/about-building-copilot-extensions",
    type: "Docs",
    note: "Foundation guide explaining what Copilot extensions are, the difference between skillsets and agents, and how they integrate with GitHub Copilot Chat via the GitHub App platform.",
  },
  {
    title: "Creating Custom Agents for Copilot CLI",
    url: "https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/create-custom-agents-for-cli",
    type: "Docs",
    note: "Guide for CLI-specific agent development and customization. Learn how to define agents that respond to gh copilot commands with specialized knowledge and behaviors.",
  },
  // VS Code & Microsoft Docs
  {
    title: "Use Agent Skills in VS Code",
    url: "https://code.visualstudio.com/docs/copilot/customization/agent-skills",
    type: "Docs",
    note: "VS Code-specific implementation guide for agent skills. Covers creating SKILL.md files, attaching skills to @workspace and custom agents, and the VS Code skills discovery mechanism.",
  },
  {
    title: "GitHub Copilot Coding Agent in VS Code",
    url: "https://code.visualstudio.com/docs/copilot/copilot-coding-agent",
    type: "Docs",
    note: "VS Code-specific documentation for configuring and using the Copilot coding agent. Covers setting up GitHub issues, agent sessions, and reviewing agent-generated pull requests from within VS Code.",
  },
  {
    title: "Building Apps with Copilot Agent Mode",
    url: "https://learn.microsoft.com/en-us/training/modules/github-copilot-agent-mode/",
    type: "Tutorial",
    note: "Microsoft Learn training module on agent mode development. Hands-on exercises for building applications using Copilot agent mode, including multi-file edits and running terminal commands.",
  },
  // GitHub Blog — Best Practices & Strategy
  {
    title: "How to Write a Great agents.md",
    url: "https://github.blog/ai-and-ml/github-copilot/how-to-write-a-great-agents-md-lessons-from-over-2500-repositories/",
    type: "Blog",
    note: "Insights from analyzing 2,500+ repositories. Covers the six core areas of an effective agents.md: commands, testing, project structure, code style, git workflow, and defining agent boundaries.",
  },
  {
    title: "How to Maximize Copilot's Agentic Capabilities",
    url: "https://github.blog/ai-and-ml/github-copilot/how-to-maximize-github-copilots-agentic-capabilities/",
    type: "Blog",
    note: "Strategic guide on maximizing agent effectiveness. Covers writing better task descriptions, using copilot-instructions.md, leveraging custom agents, and patterns for iterative agentic workflows.",
  },
  {
    title: "Introducing GitHub Copilot Extensions",
    url: "https://github.blog/news-insights/product-news/introducing-github-copilot-extensions/",
    type: "Blog",
    note: "Official announcement of the Copilot Extensions ecosystem. Overview of partner integrations (Docker, DataStax, Stripe, MongoDB), the extension architecture, and the marketplace opportunity.",
  },
  // GitHub Repositories
  {
    title: "copilot-extensions (GitHub Org)",
    url: "https://github.com/copilot-extensions",
    type: "Collection",
    note: "Central GitHub organization for Copilot Extensions development. Contains SDKs, code samples, the Blackbeard reference implementation, debugging proxies, and preview SDK tooling.",
  },
  {
    title: "Awesome Copilot — Skills Docs",
    url: "https://github.com/github/awesome-copilot/blob/main/docs/README.skills.md",
    type: "Docs",
    note: "Community-curated collection of skill examples and patterns from the awesome-copilot repository. Great reference for real-world SKILL.md implementations across different domains.",
  },
];

const CATEGORY_ORDER = ["Docs", "Blog", "Collection", "Tutorial", "Cookbook"];
let activeFilter = "All";

const grid = document.getElementById("resource-grid");
const filterBar = document.getElementById("filter-bar");
const template = document.getElementById("resource-card-template");

function getSortedTypes() {
  const seen = new Set();
  const types = [];
  resources.forEach((r) => {
    if (!seen.has(r.type)) {
      seen.add(r.type);
      types.push(r.type);
    }
  });
  return types.sort((a, b) => {
    const ai = CATEGORY_ORDER.indexOf(a);
    const bi = CATEGORY_ORDER.indexOf(b);
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  });
}

function makeFilterPill(label, count) {
  const btn = document.createElement("button");
  btn.className = "filter-pill" + (activeFilter === label ? " active" : "");
  btn.setAttribute("role", "tab");
  btn.setAttribute("aria-selected", activeFilter === label ? "true" : "false");

  const labelSpan = document.createElement("span");
  labelSpan.textContent = label;

  const countSpan = document.createElement("span");
  countSpan.className = "pill-count";
  countSpan.textContent = count;

  btn.appendChild(labelSpan);
  btn.appendChild(countSpan);

  btn.addEventListener("click", () => {
    activeFilter = label;
    renderFilterBar();
    render();
  });
  return btn;
}

function renderFilterBar() {
  filterBar.innerHTML = "";
  filterBar.appendChild(makeFilterPill("All", resources.length));
  getSortedTypes().forEach((t) => {
    const count = resources.filter((r) => r.type === t).length;
    filterBar.appendChild(makeFilterPill(t, count));
  });
}

function createCard(resource) {
  const fragment = template.content.cloneNode(true);
  const chip = fragment.querySelector(".chip");
  const source = fragment.querySelector(".source");
  const title = fragment.querySelector("h3");
  const note = fragment.querySelector(".note");
  const link = fragment.querySelector(".visit-link");

  chip.textContent = resource.type;
  source.textContent = new URL(resource.url).hostname.replace(/^www\./, "");
  title.textContent = resource.title;
  note.textContent = resource.note || "No note provided.";
  link.href = resource.url;
  link.textContent = "Visit resource";

  return fragment;
}

function render() {
  grid.innerHTML = "";

  if (activeFilter !== "All") {
    // Flat filtered view
    grid.className = "resource-grid";
    resources
      .filter((r) => r.type === activeFilter)
      .forEach((r) => grid.appendChild(createCard(r)));
    return;
  }

  // Grouped view — one section per category
  grid.className = "category-container";
  getSortedTypes().forEach((type) => {
    const group = resources.filter((r) => r.type === type);
    if (!group.length) return;

    const section = document.createElement("section");
    section.className = "category-section";

    const hdr = document.createElement("h3");
    hdr.className = "category-header";
    hdr.textContent = `${type} · ${group.length}`;
    section.appendChild(hdr);

    const subgrid = document.createElement("div");
    subgrid.className = "resource-grid";
    group.forEach((r) => subgrid.appendChild(createCard(r)));
    section.appendChild(subgrid);

    grid.appendChild(section);
  });
}

renderFilterBar();
render();

/* ── Section Nav: show/hide on scroll past hero ────────── */
(function () {
  const nav = document.getElementById("section-nav");
  const hero = document.querySelector(".hero");
  if (!nav || !hero) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      nav.classList.toggle("nav-visible", !entry.isIntersecting);
    },
    { threshold: 0 }
  );
  observer.observe(hero);
})();

/* ── Section Nav: active pill tracking on scroll ───────── */
(function () {
  const navPills = document.querySelectorAll(".nav-pill");
  const sectionIds = Array.from(navPills).map((pill) =>
    pill.getAttribute("href").slice(1)
  );
  const sections = sectionIds.map((id) => document.getElementById(id));

  function updateActiveNav() {
    const scrollY = window.scrollY;
    const navEl = document.getElementById("section-nav");
    const offset = (navEl ? navEl.offsetHeight : 0) + 40;

    let currentId = sectionIds[0];
    for (let i = 0; i < sections.length; i++) {
      if (sections[i] && sections[i].offsetTop - offset <= scrollY) {
        currentId = sectionIds[i];
      }
    }

    navPills.forEach((pill) => {
      const isActive = pill.getAttribute("href") === "#" + currentId;
      pill.classList.toggle("active", isActive);
    });
  }

  let ticking = false;
  window.addEventListener("scroll", function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        updateActiveNav();
        ticking = false;
      });
      ticking = true;
    }
  });

  updateActiveNav();
})();
