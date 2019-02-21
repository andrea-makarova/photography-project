const btnPortrait = document.querySelector("#portrait");
const template = document.querySelector("template").content;
const main = document.querySelector("main");
const nav = document.querySelector("nav");
const productlistLink = "https://spreadsheets.google.com/feeds/list/1piIN2__3Ry5ywIrluwMNSXQYyrN36hGrG_yJI_hF-qQ/od6/public/values?alt=json";
const allLink = document.querySelector("#all");

btnPortrait.addEventListener("click", portrait);

all.addEventListener("click", () => showCategory("all"));

function portrait() {
  window.location = "portrait.html";
}
fetch(productlistLink).then(e => e.json()).then(data => data.feed.entry.createCatSections(data));

function createCatSections(categories) {
    console.log(categories);
    categories.forEach(cat => {
        const newSection = document.createElement("section");
        const newHeader = document.createElement("h1");
        const newA = document.createElement("a");
        newSection.id = cat;
        newA.textContent = cat;
        newA.href = "#";
        newA.addEventListener("click", () => showCategory(cat));
        nav.appendChild(newA);
        newHeader.textContent = cat;
        main.appendChild(newHeader);
        main.appendChild(newSection);
    })
    fetch(productlistLink).then(e => e.json()).then(data => data.forEach(showData));
}

function showCategory(category) {
    console.log(category);
    document.querySelectorAll("main section").forEach(section => {
        if (section.id == category || category == "all") {
            section.style.display = "grid";
            section.previousElementSibling.style.display = "block";
        } else {
            section.style.display = "none";
            section.previousElementSibling.style.display = "none";
        }


    })
}
