let cardselect = document.querySelector("#cardselect");
let listselect = document.querySelector("#listselect");
let cardview = document.querySelector("#cardview");
let listview = document.querySelector("#listview");

cardselect.addEventListener('click', () => {
    cardview.style.display = 'grid';
    listview.style.display = 'none';
    cardselect.style.opacity = 1.0;
    listselect.style.opacity = 0.5;
});
listselect.addEventListener('click', () => {
    cardview.style.display = 'none';
    listview.style.display = 'block';
    cardselect.style.opacity = 0.5;
    listselect.style.opacity = 1.0;
});


function displayCard(card) {
    let cardelt = document.createElement("div");
    // <img src= “${card.imageURL}" alt="${card.names}”>
    cardelt.innerHTML = `
    <img src= "${card.imageURL}" alt="${card.names}">
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
    document.querySelector("#listview table").appendChild(row);
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
