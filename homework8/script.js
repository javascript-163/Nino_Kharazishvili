// 1
let btnIncrease = document.querySelector(".increase");
let btnDecrease = document.querySelector(".decrease");
let image = document.querySelector(".ex1_img");

let change = 50;

btnIncrease.addEventListener("click", () => {
    image.style.width = image.width + change + "px";
})

btnDecrease.addEventListener("click", () => {
    if (image.width > 50) {
        image.style.width = image.width - change + "px";
    }
})

// 2
let btnChangeColor = document.querySelector(".change_color");
let coloredText = document.querySelector(".colored_text");

btnChangeColor.addEventListener("click", () => {
    if (coloredText.innerText === "Red") {
        coloredText.innerText = "Blue";
        coloredText.style.color = "blue";
    } else if (coloredText.innerText === "Blue") {
        coloredText.innerText = "Green";
        coloredText.style.color = "green";
    } else {
        coloredText.innerText = "Red";
        coloredText.style.color = "red";
    }
})

// 3

let content = document.querySelector(".content");
let btnToggle = document.getElementById("btn_toggle");

btnToggle.addEventListener("click", () => {
    if (content.style.display === "none") {
        content.style.display = "block";
        btnToggle.innerText = "Hide";
    } else {
        content.style.display = "none";
        btnToggle.innerText = "Show";
    }

})



