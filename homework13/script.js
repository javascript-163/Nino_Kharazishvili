
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let mailRegex = /^[\w+-\.]{1,150}@([\w-]+\.)+[\w-]{2,4}$/g;
    let mail = document.getElementById("email").value;

    if (mailRegex.test(mail)) {
        alert("success")
    } else {
        alert("fail")
    }

})
