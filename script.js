
const searchData = [
  {
    title: "TXST T-Shirt Launcher",
    description: "Senior Design · concept design · testing · requirements · SolidWorks",
    url: "projects/tshirt-launcher.html",
    keywords: ["launcher","tshirt","t-shirt","senior design","solidworks","testing","requirements","cad"]
  },
  {
    title: "Two-Story Shop Office Expansion",
    description: "Fabrication · welding · structural work · shop expansion",
    url: "projects/office-expansion.html",
    keywords: ["office","shop","welding","fabrication","structural","construction"]
  },
  {
    title: "3D Printing & Prototyping",
    description: "Additive manufacturing · TPU · ASA · PETG · DFAM",
    url: "projects/prototyping.html",
    keywords: ["3d","printing","prototyping","tpu","asa","petg","dfam","additive"]
  },
  {
    title: "Josias Auto Service LLC",
    description: "Diagnostics · equipment repair · field service · fabrication",
    url: "experience/josias-auto-service.html",
    keywords: ["josias","auto","diagnostics","repair","equipment","field service","fabrication"]
  },
  {
    title: "Design & Fabrication Club",
    description: "Leadership · project management · team coordination",
    url: "experience/dfc.html",
    keywords: ["dfc","club","leadership","project management","team","coordination"]
  },
  {
    title: "Senior Design Experience",
    description: "Stakeholders · design · analysis · prototyping · testing",
    url: "experience/senior-design.html",
    keywords: ["senior design","stakeholder","analysis","prototype","testing"]
  },
  {
    title: "Credentials",
    description: "CSWP · CSWA · Six Sigma Green Belt",
    url: "credentials.html",
    keywords: ["credentials","certification","cswp","cswa","solidworks","six sigma","green belt"]
  },
  {
    title: "Contact",
    description: "Email · LinkedIn · Resume",
    url: "contact.html",
    keywords: ["contact","email","linkedin","resume"]
  }
];

const input = document.getElementById("site-search");
const results = document.getElementById("search-results");

function renderResults(query) {
  const q = query.trim().toLowerCase();

  if (!q) {
    results.hidden = true;
    results.innerHTML = "";
    return;
  }

  const matches = searchData.filter(item => {
    const haystack = [
      item.title,
      item.description,
      ...item.keywords
    ].join(" ").toLowerCase();

    return haystack.includes(q);
  }).slice(0, 6);

  if (!matches.length) {
    results.innerHTML = `<div class="search-empty">No matching portfolio items.</div>`;
    results.hidden = false;
    return;
  }

  results.innerHTML = matches.map(item => `
    <a class="search-result" href="${item.url}">
      <strong>${item.title}</strong>
      <span>${item.description}</span>
    </a>
  `).join("");

  results.hidden = false;
}

input.addEventListener("input", () => renderResults(input.value));

input.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    const first = results.querySelector(".search-result");
    if (first) {
      window.location.href = first.getAttribute("href");
    }
  }

  if (event.key === "Escape") {
    results.hidden = true;
  }
});

document.addEventListener("click", event => {
  if (!event.target.closest(".search-wrap")) {
    results.hidden = true;
  }
});
