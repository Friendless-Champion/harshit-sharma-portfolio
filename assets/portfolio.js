const experiences = [
  { id: "emerging-leaders-of-color", role: "Emerging Leaders of Color", organization: "Carlson School of Management: University of Minnesota", dates: "August 2026 â€“ Present", hours: "Hours commitment not provided", location: "Location not provided", summary: "Gained early business exposure through an 8-month cohort program at the Carlson School.", bullet: "Gained early business exposure through an 8-month cohort program at the Carlson School, selected from an annual applicant pool of hundreds for a cohort historically ranging from 35 to 70 students." },
  { id: "published-researcher", role: "Published Researcher", organization: "SSRN", dates: "April 2026 â€“ June 2026", hours: "4 hours/week", location: "Location not provided", summary: "Produced original policy research by analyzing legislative gaps in 3D-printing regulation.", bullet: "Produced original policy research by analyzing legislative gaps in 3D-printing regulation, resulting in a paper published on SSRN: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6857199" },
  { id: "hindi-tutor", role: "Hindi Tutor", organization: "Connexions Tutoring", dates: "November 2025 â€“ Present", hours: "10 hours total", location: "Location not provided", summary: "Built foundational language confidence in young learners by tutoring basic Hindi vocabulary and daily-use sentences.", bullet: "Built foundational language confidence in young learners by tutoring basic Hindi vocabulary and daily-use sentences across 10 hours online through patient, guided instruction tailored to each student's pace." },
  { id: "debate-preparation-mentor", role: "Public Forum Debate Preparation Mentor", organization: "Organization not specified", dates: "September 2025 â€“ Present", hours: "55 hours total", location: "Location not provided", summary: "Strengthened novice debater performance by mentoring 3 teams.", bullet: "Strengthened novice debater performance by mentoring 3 teams across 55 hours in argument, construction, and delivery; resulting in all 3 teams advancing to elimination rounds at state, including a 7th-place finish out of 80 teams in the Novice Bracket." },
  { id: "model-united-nations", role: "President, Annan ECOSOC", organization: "Model United Nations", dates: "May 2024 â€“ May 2025", hours: "17.5 hours total", location: "Location not provided", summary: "Directed committee-wide policy discussion by chairing sessions for 28 delegates.", bullet: "Directed committee-wide policy discussion by chairing sessions for 28 delegates across 17.5 hours over a 1-year term, fostering sustained participation across a diverse committee and earning Special Recognition for Outstanding Leadership (2024)." },
  { id: "varsity-public-forum-debate", role: "Varsity Public Forum Debate", organization: "Organization not specified", dates: "September 2023 â€“ Present", hours: "Time commitment not provided", location: "Location not provided", summary: "Grew from a first-year competitor into a tournament champion across 3 seasons.", bullet: "Grew from a first-year competitor into a tournament champion by competing across 3 seasons, reaching a career-high 58% win rate, headlined by a Farmington Regional Championship (5-1 record, unanimous 3-0 final round) in 2025 and NSDA's Degree of Special Distinction (2025)." },
  { id: "science-olympiad", role: "Science Olympiad", organization: "Organization not specified", dates: "July 2023 â€“ November 2025", hours: "Time commitment not provided", location: "Location not provided", summary: "Sustained a 2+ year competitive commitment across 7+ events.", bullet: "Sustained a 2+ year competitive commitment across 7+ events, earning a Varsity Letter, 2nd Place in Geologic Mapping at Varsity State, 1st Place in Towers and 1st Place in Fossils (JV) at conferences, and advanced to Nationals for the first time in the team's history." },
  { id: "elementary-science-olympiad", role: "Elementary Science Olympiad Tournament Event Lead", organization: "Organization not specified", dates: "April 2023 â€“ Present", hours: "14 hours total", location: "Location not provided", summary: "Run a full-scale STEM competition test for younger students by writing and administering 3 tests.", bullet: "Ran a full-scale STEM competition test for younger students by writing and administering 3 tests (Rock Hound, Roller Coaster, The Starry Starry Night) across 14 hours, covering 24 teams and 48 students total, supporting event logistics and awards presentation." },
  { id: "first-robotics-team-2220", role: "FIRST Robotics Team 2220", organization: "Blue Twilight Â· Design Lead Â· Outreach Lead", dates: "September 2021 â€“ Present", hours: "Design: 16 hrs/week, 38 weeks/year Â· Outreach: 65+ hours total ë€œ Advocacy: 13 hours total", location: "Location not provided", summary: "Led robot design, community demonstrations, and state-level robotics advocacy through one sustained team commitment.", bullet: "Design Lead: Directed a 4+ student CAD team through a 4-week production cycle, modeling 639+ parts, over 320 custom-designed. Earned 4 varsity letters; team awards included Engineering Inspiration (MN Bluff County Regional, 2026), Industrial Design (City of Fountains Regional, 2026), Judges' Award (Wisconsin Regional, 2024), and Sustainability (Rocket City Regional, 2025). Outreach Lead: Demonstrated FRC and FLL robots across 65+ hours at Eagan Market Fest, STEM Day at the State Fair, and Richfield Elementary Coding Camp. Advocacy: Demonstrated team robotics to lawmakers across 13 hours over 3 years, contributing to $1.2M secured in FIRST coach stipends, $119M bond for FIRST event centers, and $2.4M for STEM workforce development." },
  { id: "little-free-library", role: "Little Free Library Build", organization: "Community project", dates: "Dates not provided", hours: "Time commitment not provided", location: "Location not provided", summary: "Built, painted, installed, and manage a Little Free Library.", bullet: "Built, painted, installed, and manage a Little Free Library." }
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function makePlaceholder(label, className = "") {
  const element = document.createElement("div");
  element.className = className || "image-placeholder";
  element.setAttribute("role", "img");
  element.setAttribute("aria-label", `Image placeholder: ${label}`);
  element.textContent = `[Image placeholder: ${label}]`;
  return element;
}

function renderExperiences() {
  const track = $("#timeline-track");
  if (!track) return;
  track.replaceChildren(experiences.map((entry, index) => {
    const card = document.createElement("article");
    card.className = "timeline-card";
    card.append(makePlaceholder(entry.role));
    const dates = document.createElement("p");
    dates.className = "timeline-date";
    dates.textContent = entry.dates;
    card.append(dates);
    const heading = document.createElement("h3");
    heading.textContent = entry.displayRole || `${entry.role} | ${entry.organization}`;
    card.append(heading);
    const description = document.createElement("p");
    description.className = "timeline-description";
    description.textContent = entry.summary;
    card.append(description);
    const more = document.createElement("a");
    more.className = "read-more";
    more.href = `experience.html?id=${encodeURIComponent(entry.id)}`;
    more.textContent = "Read More â†“";
    card.append(more);
    return card;
  }));
}

function renderProjects() {
  const grid = $("#project-grid");
  if (!grid) return;
  const projects = [
    {
      id: "sr-regulation",
      title: "Published Research on 3D-Printing Regulation",
      category: "Research",
      description: "Original policy research analyzing legislative gaps in 3D-printing regulation.",
      imageLabel: "Published research paper cover",
      href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6857199",
      target: "_blank"
    },
    {
      id: "frc-robot-cad",
      title: "FRC Team 2220 Robot CAD",
      category: "Student team",
      description: "Competition robot advanced from 639 parts, with 320+ custom designs.",
      imageLabel: "FRC Team 2220 robot CAD render",
      href: "project.html?id=frc-robot-cad"
    },
    {
      id: "little-free-library",
      title: "Little Free Library Build",
      category: "Community",
      description: "Community project I originally built, painted, installed and continue to manage.",
      imageLabel: "Little Free Library photo",
      href: "project.html?id=little-free-library"
    }
  ];
  grid.replaceChildren("projects.map(project => {\n    const card = document.createElement(\"s\n    card.className = \"project-card\";\n    card.append(makePlaceholder(project.imageLabel));\n    const content = document.createElement(\"div\");\n    content.className = \"project-card-content\";\n    const category = document.createElement(\"s\n    category.className = \"project-category\";\n    category.textContent = project.category;\n    content.append(category);\n    const title = document.createElement(\
    content.append(title);\n    const description = document.createElement(\"p\");\n    description.textContent = project.description;\n    content.append(description);\n    const link = document.createElement(\"a\");\n    link.className = \"read-more\";\n    link.href = project.href;\n    link.extContent = \"View project â†“\";\n    content.append(link);\n    card.append(content);\n    return card;\n   })));\n\t}));     \n});\n\t}));   ½¹ÍĞÁÉ½©•ÑÌ€ômq¸€€€q¸€tíq¹yßºw-Š‰ëzw^¬Liz¸ÇƒzÖ¢–w(Ëk¢‹