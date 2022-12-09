const requestURL = 'https://www.churchofjesuschrist.org/temples/list';
function displayTemples(temple) {  // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');    // Change the textContent property of the h2 element to contain the temple's full name
    h2.textContent = `${temple.name}`;
    // Add/append the section(card) with the h2 element
    let p1 = document.createElement('p');
    p1.textContent = `Address: ${temple.address}`;
    let p2 = document.createElement('p');
    p2.textContent = `Telephone: ${temple.telephone}`;
    let p3 = document.createElement('p');
    p3.textContent = `Services: ${temple.services}`;
    let p4 = document.createElement('p');
    p4.textContent = `Temple Closures: ${temple.templeclosures}`;
    let img = document.createElement('img');
    img.setAttribute('src', temple.imageURL);
    
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(img);
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
      console.table(jsonObject);  // temporary checking for valid response and data parsing
      let temples = jsonObject["temples"];
      temples.forEach(displaytemples);
  });