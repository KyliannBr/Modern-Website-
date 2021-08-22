let toggleBtn = document.getElementById("toggleBtn");
let closeBtn = document.getElementById("closeBtn");
let sidebar = document.getElementById("sidebar");

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