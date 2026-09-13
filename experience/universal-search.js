/* JEHOSAF Universal Search */
document.addEventListener("DOMContentLoaded", () => {
  const searchData = [
    {title:"TXST T-Shirt Launcher",description:"Senior Design · pressure control · trajectory · testing · safety",url:"/Jehosaf-Engineering/projects/tshirt-launcher.html",keywords:["launcher","tshirt","t-shirt","senior design","pneumatic","pressure","trajectory","testing","requirements","cad"]},
    {title:"Two-Story Shop Office Expansion",description:"Fabrication · welding · structural work · shop expansion",url:"/Jehosaf-Engineering/projects/office-expansion.html",keywords:["office","shop","welding","fabrication","structural","construction"]},
    {title:"3D Printing & Prototyping",description:"Additive manufacturing · TPU · ASA · PETG · DFAM",url:"/Jehosaf-Engineering/projects/prototyping.html",keywords:["3d","printing","prototyping","tpu","asa","petg","dfam","additive"]},
    {title:"Josias Auto Service LLC",description:"Mechanical systems · diagnostics · fabrication · SolidWorks · field service",url:"/Jehosaf-Engineering/experience/josias-auto-service.html",keywords:["josias","auto","diagnostics","repair","equipment","hydraulics","field service","fabrication","solidworks","failure analysis"]},
    {title:"Alamo Group TX",description:"Mechanical Engineering Intern · SolidWorks · drawings · manufacturability",url:"/Jehosaf-Engineering/experience/alamo-group.html",keywords:["alamo","intern","internship","solidworks","cad","engineering drawings","manufacturing","manufacturability"]},
    {title:"Port Enterprises LTD",description:"Fleet maintenance · engines · brakes · suspension · drivetrain",url:"/Jehosaf-Engineering/experience/port-enterprises.html",keywords:["port enterprises","fleet","maintenance","engine","brakes","suspension","drivetrain","technician"]},
    {title:"Design & Fabrication Club",description:"Director of Operations · leadership · project management · team coordination",url:"/Jehosaf-Engineering/experience/dfc.html",keywords:["dfc","club","director","operations","leadership","project management","team","coordination","asme","robotics"]},
    {title:"Senior Design Experience",description:"Pneumatic launch system · stakeholders · analysis · prototyping · testing",url:"/Jehosaf-Engineering/experience/senior-design.html",keywords:["senior design","pneumatic","stakeholder","analysis","prototype","testing","trajectory","pressure"]},
    {title:"Credentials",description:"CSWP · CSWA · Six Sigma Green Belt",url:"/Jehosaf-Engineering/credentials.html",keywords:["credentials","certification","cswp","cswa","solidworks","six sigma","green belt"]},
    {title:"Contact",description:"Email · LinkedIn · Resume",url:"/Jehosaf-Engineering/contact.html",keywords:["contact","email","linkedin","resume"]}
  ];

  document.querySelectorAll(".universal-search-wrap").forEach((wrap) => {
    const input = wrap.querySelector(".universal-site-search");
    const results = wrap.querySelector(".universal-search-results");
    if (!input || !results) return;
    function render(query){
      const q = query.trim().toLowerCase();
      if (!q){ results.hidden = true; results.innerHTML = ""; return; }
      const matches = searchData.filter(item => [item.title,item.description,...item.keywords].join(" ").toLowerCase().includes(q)).slice(0,6);
      if (!matches.length){ results.innerHTML = '<div class="universal-search-empty">No matching portfolio items.</div>'; results.hidden=false; return; }
      results.innerHTML = matches.map(item => `<a class="universal-search-result" href="${item.url}"><strong>${item.title}</strong><span>${item.description}</span></a>`).join("");
      results.hidden=false;
    }
    input.addEventListener("input",()=>render(input.value));
    input.addEventListener("keydown",(event)=>{
      if(event.key==="Enter"){ const first=results.querySelector(".universal-search-result"); if(first) window.location.href=first.href; }
      if(event.key==="Escape") results.hidden=true;
    });
  });
  document.addEventListener("click",(event)=>{
    if(!event.target.closest(".universal-search-wrap")) document.querySelectorAll(".universal-search-results").forEach(el=>el.hidden=true);
  });
});
