let form = document.getElementById("reservation_form");
let msg = document.querySelector(".reserve_msg");


let currentLogin = JSON.parse(sessionStorage.getItem('currentLogin'));

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        msg.classList.remove("hidden");
        msg.innerHTML = `Reservation confirmation sent to your email - ${currentLogin.email}.`

        window.setTimeout(function () {
            window.location.href = 'index.html';
        }, 3000);
    })
}
