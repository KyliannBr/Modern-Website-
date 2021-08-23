let toggleBtn = document.getElementById("toggleBtn");
let closeBtn = document.getElementById("closeBtn");
let sidebar = document.getElementById("sidebar");

let homeBtn = document.getElementById("homeBtn");
let projetsBtn = document.getElementById("projetsBtn");
let competencesBtn = document.getElementById("competencesBtn");

let homeBtnSidebar = document.getElementById("homeBtnSidebar");
let projetsBtnSidebar = document.getElementById("projetsBtnSidebar");
let competencesBtnSidebar = document.getElementById("competencesBtnSidebar");

let homeSection = document.getElementById("home"); 
let projetSection = document.getElementById("projets");
let competencesSection = document.getElementById("competences");


// ------------------------------------------------------------------------------------


toggleBtn.addEventListener("click", showSidebar);
closeBtn.addEventListener("click", hideSidebar);

function showSidebar() {
    sidebar.classList.remove("sidebar-hidden");
    sidebar.classList.add("sidebar-show");
    console.log("exeuted");
}

function hideSidebar() {
    sidebar.classList.remove("sidebar-show");
    sidebar.classList.add("sidebar-hidden");
    console.log("exeuted hidden");
}


// ------------------------------------------------------------------------------------


homeBtn.addEventListener("click", homePage);
projetsBtn.addEventListener("click", projetPage);
competencesBtn.addEventListener("click", competencesPage);

function homePage() {
    homeSection.classList.remove("disableSection");
    projetSection.classList.add("disableSection");
    competencesSection.classList.add("disableSection");
    console.log("exec1");
}

function projetPage() {
    projetSection.classList.remove("disableSection");
    homeSection.classList.add("disableSection");
    competencesSection.classList.add("disableSection");
    console.log("exec2");
}

function competencesPage() {
    projetSection.classList.add("disableSection");
    homeSection.classList.add("disableSection");
    competencesSection.classList.remove("disableSection");
    console.log("exec3");
}

// ------------------------------------------------------------------------------------


homeBtnSidebar.addEventListener("click", homePageSidebar);
projetsBtnSidebar.addEventListener("click", projetPageSidebar);
competencesBtnSidebar.addEventListener("click", competencesPageSidebar);

function homePageSidebar() {
    homeSection.classList.remove("disableSection");
    projetSection.classList.add("disableSection");
    competencesSection.classList.add("disableSection");
    sidebar.classList.remove("sidebar-show");
    sidebar.classList.add("sidebar-hidden");
}

function projetPageSidebar() {
    projetSection.classList.remove("disableSection");
    homeSection.classList.add("disableSection");
    competencesSection.classList.add("disableSection");
    sidebar.classList.remove("sidebar-show");
    sidebar.classList.add("sidebar-hidden");
}

function competencesPageSidebar() {
    projetSection.classList.add("disableSection");
    homeSection.classList.add("disableSection");
    competencesSection.classList.remove("disableSection");
    sidebar.classList.remove("sidebar-show");
    sidebar.classList.add("sidebar-hidden");
}