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