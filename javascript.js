const template = document.querySelector("template").content;
let main1 = document.querySelector("main#portrait");

let main2 = document.querySelector("main#macro");

let main3 = document.querySelector("main#wildLife");

let main4 = document.querySelector("main#landscape");



const productlistLink = "https://spreadsheets.google.com/feeds/list/1piIN2__3Ry5ywIrluwMNSXQYyrN36hGrG_yJI_hF-qQ/od6/public/values?alt=json";
const modal = document.querySelector(".modal-background");
const filter = document.querySelector(".filter-content");
const closeModal = document.querySelector(".modal-button");
const closeFilter = document.querySelector(".filter-button");
const filterButton = document.querySelector("button.filter");

closeModal.addEventListener("click", () => modal.classList.add("hide"));

closeFilter.addEventListener("click", () => filter.classList.add("hide"));

fetch(productlistLink).then(e => e.json()).then(data => data.feed.entry.forEach(showProduct));

filterButton.addEventListener("click", () => filter.classList.remove("hide"));


function showProduct(product) {
    console.log(product)
    let clone = template.cloneNode(true);

    clone.querySelector("h2.name").textContent = product.gsx$name.$t;
    clone.querySelector("h3.brand").textContent = product.gsx$brand.$t;
    clone.querySelector("h3.price").textContent = product.gsx$price.$t;

    clone.querySelector("p.lensType").textContent = product.gsx$lenstype.$t;

    clone.querySelector("img.image").src = "products/small/" + product.gsx$image.$t;

    clone.querySelector("button").addEventListener("click", () => {
        showDetails(product)
    });



    if (product.gsx$category.$t == "portrait") {
        main1.appendChild(clone);
    }
    if (product.gsx$category.$t == "macro") {
        main2.appendChild(clone);
    }
    if (product.gsx$category.$t == "wildlife") {
        main3.appendChild(clone);
    }
    if (product.gsx$category.$t == "landscape") {
        main4.appendChild(clone);
    }

};


function showDetails(data) {
    console.log(data);
    modal.querySelector("img.modal-image").src = "products/small/" + data.gsx$image.$t;
    modal.querySelector(" h2.modal-name").textContent = data.gsx$name.$t;
    modal.querySelector(" h3.modal-brand").textContent = data.gsx$brand.$t;
    modal.querySelector(" p.modal-lensType").textContent = "LENS TYPE: " + " " + data.gsx$lenstype.$t;
    modal.querySelector(" p.modal-chip").textContent = "CHIP: " + " " + data.gsx$chip.$t;
    modal.querySelector(" p.modal-bayonet").textContent = "BAYONET: " + " " + data.gsx$bayonet.$t;
    modal.querySelector(" p.modal-weight").textContent = "WEIGHT: " + " " + data.gsx$weight.$t;
    modal.querySelector(" p.modal-longDescription").textContent = data.gsx$longdescription.$t;
    modal.querySelector(" h3.modal-price").textContent = data.gsx$price.$t;

    modal.classList.remove('hide');
}
