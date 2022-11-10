function displayCard(card) {
    let cardview = document.querySelector("#cardview");
    let cardelt = document.createElement("div");
    cardelt.innerHTML = `
        <img src=${card.image}>`

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