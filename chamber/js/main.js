const htoday = new Date();
if (htoday.getDay()==4) {
    document.querySelector(".banner").style.display="block";
}
// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;


function toggleMenu(){
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}
const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;


// join page
const dateControl = document.querySelector('.time[type="hidden"]');
dateControl.value = today;
// thanks page
function returnHome (){
    location.replace("https://lilyhuang23.github.io/wdd230/chamber/index.html")
}
// footer last update
const today = new Date();
document.querySelector("footer div span").textContent = today.getFullYear();
document.getElementById("lastupdatedate").textContent = document.lastModified;