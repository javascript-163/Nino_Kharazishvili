
let registrationForm = document.getElementById('registration_form');
if (registrationForm) {
    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let firstName = document.getElementById('name').value;
        let lastName = document.getElementById('lastName').value;
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        let location = document.getElementById('location').value;
        let age = document.getElementById('age').value;

        const formData = {
            firstName, lastName, username, password, location, age
        };

        saveFormData(formData);
        window.location.href = "login.html";
    })
};

function saveFormData(formData) {
    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];
    //ensures that the storage saves only unique usernames
    let username = formData.username;
    let alreadyIncludes = storedFormData.filter(item => item.username === username);
    if (alreadyIncludes.length === 0) {
        storedFormData.push(formData);
    } else alert(`user name ${username} already taken`)
    localStorage.setItem('formData', JSON.stringify(storedFormData));
}



// 2


let logInBtn = document.querySelector(".login.btn");

if (logInBtn) {
    logInBtn.addEventListener("click", (e) => {
        e.preventDefault();

        let username = document.getElementById('username_login').value;
        let password = document.getElementById('password_login').value;

        let storedData = JSON.parse(localStorage.getItem('formData'));
        if (storedData && username && password) {
            if (storedData.filter(item => item.username === username && item.password === password).length > 0) {
                window.location.href = "congrats.html";
            } else {
                alert("You are not registered")
            }

        }

    })
}

let backBtn = document.getElementById("back_btn")
if (backBtn) {
    backBtn.addEventListener("click", () => {
        window.location.href = "login.html";
    })
}

