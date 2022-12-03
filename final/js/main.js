// hamburger Menu
function toggleMenu(){
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}
const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

// footer
const today = new Date();
document.getElementById("footeryear").textContent = today.getFullYear();
document.getElementById("lastupdatedate").textContent = document.lastModified;
