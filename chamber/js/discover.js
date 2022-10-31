window.localStorage.setItem("last-visit", new Date("10/25/2022"));

const visit = document.querySelector("#visit-message");

let visitMessage = "This is your first visit to the page!";
let theday = new Date();

let lastVisit = window.localStorage.getItem("last-visit");
if (lastVisit != null) {
    let lastVisitDate = new Date(lastVisit);
    let dateDifference = Math.floor((theday.getTime() - lastVisitDate.getTime()) / (24 * 60 * 60 * 1000));
    visitMessage = `Last visisted the page ${dateDifference} days ago.`;

}
visit.textContent = visitMessage;
window.localStorage.setItem("last-visit", theday.toString());