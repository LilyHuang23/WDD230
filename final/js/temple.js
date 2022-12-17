const requestURL = 'data/data.json';


  // like 
  // First check to see if we need to initialize local storage with an empty array
const LIKES_KEY = "temple-likes";
let likes_string = localStorage.getItem(LIKES_KEY);
if (likes_string==null){
    likes_string="[]";
    localStorage.setItem(LIKES_KEY, likes_string);
}

// Turn the string value from local storage into a Java array
let likeslist = JSON.parse(likes_string);

// This displays the temple card as before
function displayTemple(temples){
    let main = document.querySelector("main");
    let newsection = document.createElement("section");
  newsection.innerHTML = `<img src="${temples.imageURL}">
            <h2>${temples.names}</h2>
            <p>Address: ${temples.address}</p>
            <p>Telephone: ${temples.telephone}</p>
            <p>Services: ${temples.services}</p>
            <p>Temple Closures: ${temples.templeclosures}</p>
            <input class="mycheck" id="check-${temples.names}" type="checkbox" onclick="likeTemple(this);"> Like This Temple!`;
    main.appendChild(newsection);
}
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
      console.table(jsonObject);  // temporary checking for valid response and data parsing
      let temples = jsonObject["temples"];
      temples.forEach(displayTemple);
    }).then(() => {
        likeslist.forEach(displayLike);
  });
// This function handles when a user checks an individual checkbox
// First, it updates the list of "liked" temples by either adding or removing it
// depending on if the box is checked or unchecked.
// push adds an item to a list
// splice removes an item from a list.
// Finally, the new list is put into local storage for later use. 
function likeTemple(item){
    let likes_string = localStorage.getItem(LIKES_KEY);
    let likeslist = JSON.parse(likes_string);
    if (item.checked){
        if (!likeslist.includes(item.id)){
            likeslist.push(item.id);
        }
    }
    else{
        if (likeslist.includes(item.id)){
            likeslist.splice(likeslist.indexOf(item.id), 1);
        }
    }
    localStorage.setItem(LIKES_KEY, JSON.stringify(likeslist));
}

// Upon page reload, the list of individual items (by id) is checked.
function displayLike(item){
    let obj = document.getElementById(item);
    obj.checked = true;
}


