//Manual slide

let indexManual = -1;

document.querySelector(".fa-chevron-left").addEventListener("click", () => {
    showSlidesManual(-1)
})
document.querySelector(".fa-chevron-right").addEventListener("click", () => {
    showSlidesManual(1)
})

function showSlidesManual(n) {
    let slides = document.querySelectorAll(".special_events_slider_img");

    indexManual += n;
    if (indexManual > slides.length) {
        indexManual = 1;
    }

    if (indexManual < 1) {
        indexManual = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[indexManual - 1].style.display = "block";

}

showSlidesManual(2)