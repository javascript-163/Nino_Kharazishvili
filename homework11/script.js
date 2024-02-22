//filter

function searchProduct() {
    let searchPhrase = document.getElementById("searchInput").value.toUpperCase();
    let productNames = document.querySelectorAll(".product_name")
    productNames.forEach((prod) => {
        if (prod.innerText.toUpperCase().indexOf(searchPhrase) > -1) {
            console.log(prod.innerText.toUpperCase().indexOf(searchPhrase))
            prod.parentElement.style.display = "flex";
        } else {
            prod.parentElement.style.display = "none";
        }
    })
}

//Auto

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("auto");
    let slidesTwo = document.getElementsByClassName("auto2");
    let slidesThree = document.getElementsByClassName("auto3");
    let slidesFour = document.getElementsByClassName("auto4");

    slideIndex++;

    autoChage(slides, i, slideIndex);
    autoChage(slidesTwo, i, slideIndex);
    autoChage(slidesThree, i, slideIndex);
    autoChage(slidesFour, i, slideIndex);

    setTimeout(showSlides, 2000);
}

function autoChage(slides, i) {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";


}

//Manual