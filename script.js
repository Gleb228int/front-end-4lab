const elemById = document.getElementById("target-element");
let toggled1 = false;

elemById.onclick = function() {
    if (!toggled1) {
        this.style.backgroundColor = "#068f8f";
        this.style.color = "#f5f506";
        toggled1 = true;
    } else {
        this.style.backgroundColor = "";
        this.style.color = "";
        toggled1 = false;
    }
};

const elemByQuery = document.querySelector(".next-element");
let toggled2 = false;

elemByQuery.onclick = function() {
    if (!toggled2) {
        this.style.backgroundColor = "#f5f506";
        this.style.color = "#068f8f";
        toggled2 = true;
    } else {
        this.style.backgroundColor = "";
        this.style.color = "";
        toggled2 = false;
    }
};

function addImage() {
    let block = document.getElementById("image-block");
    if (!document.getElementById("kiev-image")) {
        let aTag = document.createElement("a");
        aTag.href = "https://kyivcity.gov.ua/";
        aTag.target = "_blank";
        aTag.rel = "noopener noreferrer";

        let img = document.createElement("img");
        img.id = "kiev-image";
        img.src = "https://infoportal.kiev.ua/wp-content/uploads/2013/02/%D0%9F%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0-%D0%9A%D0%B8%D0%B5%D0%B2%D0%BE-%D0%9F%D0%B5%D1%87%D0%B5%D1%80%D1%81%D0%BA%D0%BE%D0%B9-%D0%BB%D0%B0%D0%B2%D1%80%D1%8B.jpg";
        img.alt = "Панорама міста Київ";
        img.width = 600;

        aTag.appendChild(img);
        block.appendChild(aTag);
    }
}

function zoomIn() {
    let img = document.getElementById("kiev-image");
    if (img) {
        let currentWidth = img.clientWidth;
        img.style.width = (currentWidth + 80) + "px";
    }
}

function zoomOut() {
    let img = document.getElementById("kiev-image");
    if (img) {
        let currentWidth = img.clientWidth;
        if (currentWidth > 150) {
            img.style.width = (currentWidth - 80) + "px";
        }
    }
}

function deleteImage() {
    let block = document.getElementById("image-block");
    block.innerHTML = "";
}