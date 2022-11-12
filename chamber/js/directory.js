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
    let cardview = document.querySelector("#cardview");
    let cardelt = document.createElement("div");
    cardelt.innerHTML = ` <img src=“${card.image}”>
    <p>${card.names}</p>
    <p>${card.city}</p>
    <p>${card.phone}</p>
    <p><a href="${card.website}">${card.website}</a></p>`;
    cardview.appendChild(cardelt);
}
function displayList(list) {
    let row = document.createElement("tr");
    row.innerHTML = ` <td><img src=“${card.image}”></td>
    <td>${card.names}</td>
    <td>${card.city}</td>
    <td>${card.phone}</td>
    <td><a href="${card.website}">${card.website}</a></td>`;
    document.querySelector("#listview").appendChild(list);
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