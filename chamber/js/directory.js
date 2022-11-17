let cardselect = document.querySelector("#cardselect");
let listselect = document.querySelector("#listselect");
let cardview = document.querySelector("#cardview");
let listview = document.querySelector("#listview");

cardselect.addEventListener('click', () => {
    cardview.getElementsByClassName.display = 'grid';
    listview.getElementsByClassName.display = 'none';
    cardselect.getElementsByClassName.opacity = 1.0;
    listselect.getElementsByClassName.opacity = 0.5;
});
listselect.addEventListener('click', () => {
    cardview.getElementsByClassName.display = 'none';
    listview.getElementsByClassName.display = 'block';
    cardselect.getElementsByClassName.opacity = 0.5;
    listselect.getElementsByClassName.opacity = 1.0;
});


function displayCard(card) {
    let cardelt = document.createElement("div");
    // <img src= “${card.imageURL}" alt="${card.names}”>
    cardelt.innerHTML = `
    <img src= “${card.imageURL}" alt="${card.names}”>
    <h2>${card.names}</h2>
    <p>${card.city}</p>
    <p>${card.phone}</p>
    <p><a href="${card.website}">${card.website}</a></p>`;
    cardview.appendChild(cardelt);
    document.querySelector("#cardview").appendChild(cardelt);

}
function displayList(list) {
    let row = document.createElement("tr");
    row.innerHTML = `
    <td><h2>${list.names}</h2></td>
    <td>${list.city}</td>
    <td>${list.phone}</td>
    <td><a href="${list.website}">${list.website}</a></td>`;
    document.querySelector("#listview").appendChild(row);
}

const requestURL = "data/data.json";

    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        let bizlist = jsonObject["businesses"];
        bizlist.forEach(displayCard);
        bizlist.forEach(displayList);
    });
// main js

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
// footer last update
const today = new Date();
document.querySelector("footer div span").textContent = today.getFullYear();
document.getElementById("lastupdatedate").textContent = document.lastModified;