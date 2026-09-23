/* =========================================================
   GOOGLE ANALYTICS 4
   Measurement ID: G-Q9PM5CQXF7
   Loaded here so analytics runs anywhere universal-search.js
   is included.
   ========================================================= */
(function () {
  if (window.__jehosafAnalyticsLoaded) return;
  window.__jehosafAnalyticsLoaded = true;

  var gaScript = document.createElement("script");
  gaScript.async = true;
  gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-Q9PM5CQXF7";
  document.head.appendChild(gaScript);

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", "G-Q9PM5CQXF7");
})();


/* JEHOSAF Universal Search */
document.addEventListener("DOMContentLoaded", () => {
  const searchData = [
    {
      title: "TXST T-Shirt Launcher",
      description: "Senior Design · concept design · testing · requirements · SolidWorks",
      url: "/Jehosaf-Engineering/projects/tshirt-launcher.html",
      keywords: ["launcher","tshirt","t-shirt","senior design","solidworks","testing","requirements","cad"]
    },
    {
      title: "Office Expansion",
      description: "SolidWorks · FEA · structural design · fabrication · project coordination",
      url: "/Jehosaf-Engineering/projects/office-expansion.html",
      keywords: ["office","expansion","solidworks","fea","fabrication","structural","construction","project coordination"]
    },
    {
      title: "3D Printing & Prototyping",
      description: "Additive manufacturing · TPU · ASA · PETG · DFAM",
      url: "/Jehosaf-Engineering/projects/prototyping.html",
      keywords: ["3d","printing","prototyping","tpu","asa","petg","dfam","additive"]
    },
    {
      title: "Josias Auto Service LLC",
      description: "Diagnostics · equipment repair · field service · fabrication",
      url: "/Jehosaf-Engineering/experience/josias-auto-service.html",
      keywords: ["josias","auto","diagnostics","repair","equipment","field service","fabrication"]
    },
    {
      title: "Design & Fabrication Club",
      description: "Leadership · project management · team coordination",
      url: "/Jehosaf-Engineering/experience/dfc.html",
      keywords: ["dfc","club","leadership","project management","team","coordination"]
    },
    {
      title: "Senior Design Experience",
      description: "Stakeholders · design · analysis · prototyping · testing",
      url: "/Jehosaf-Engineering/experience/senior-design.html",
      keywords: ["senior design","stakeholder","analysis","prototype","testing"]
    },
    {
      title: "Credentials",
      description: "CSWP · CSWA · Six Sigma Green Belt",
      url: "/Jehosaf-Engineering/credentials.html",
      keywords: ["credentials","certification","cswp","cswa","solidworks","six sigma","green belt"]
    },
    {
      title: "Contact",
      description: "Email · LinkedIn · Resume",
      url: "/Jehosaf-Engineering/contact.html",
      keywords: ["contact","email","linkedin","resume"]
    }
  ];

  document.querySelectorAll(".universal-search-wrap").forEach((wrap) => {
    const input = wrap.querySelector(".universal-site-search");
    const results = wrap.querySelector(".universal-search-results");
    if (!input || !results) return;

    function render(query){
      const q = query.trim().toLowerCase();
      if (!q){
        results.hidden = true;
        results.innerHTML = "";
        return;
      }

      const matches = searchData.filter(item => {
        const text = [item.title,item.description,...item.keywords].join(" ").toLowerCase();
        return text.includes(q);
      }).slice(0,6);

      if (!matches.length){
        results.innerHTML = '<div class="universal-search-empty">No matching portfolio items.</div>';
        results.hidden = false;
        return;
      }

      results.innerHTML = matches.map(item => `
        <a class="universal-search-result" href="${item.url}">
          <strong>${item.title}</strong>
          <span>${item.description}</span>
        </a>
      `).join("");

      results.hidden = false;
    }

    input.addEventListener("input", () => render(input.value));

    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter"){
        const first = results.querySelector(".universal-search-result");
        if (first) window.location.href = first.href;
      }
      if (event.key === "Escape") results.hidden = true;
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".universal-search-wrap")){
      document.querySelectorAll(".universal-search-results").forEach(el => el.hidden = true);
    }
  });
});
