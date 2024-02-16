// 1
function readFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function (e) {
            resolve(e.target.result);
        };
        reader.onerror = function (e) {
            reject(new Error('Error reading the file'));
        };
        if (file.type === "image/jpeg" || file.type == "image/jpg" || file.type == "image/gif" || file.type == "image/png"
            || file.type === "video/mp4") {
            reader.readAsDataURL(file);
        } else if (file.type === "text/plain") {
            reader.readAsText(file);
        } else alert('Please provide text, image or video document!');
    });
}

function loadFile() {
    const fileInput = document.querySelector('.file_input');
    const file = fileInput.files[0];
    if (file) {
        readFile(file).then((content) => {
            document.querySelector('.text').value = content;
            displayCharsCount(content);
            displayWordsCount(content);
            displayShortestLongest(content);
            displayAverage(content);

        }).catch((error) => {
            console.error(error.message);
        })
    } else {
        document.querySelector('.text').value = "No File Selected";
    }
}


function displayCharsCount(txt) {
    let charDisplay = document.getElementById("total_chars");
    charDisplay.innerText = `${txt.length}`;
}

//ჩავთვალე რომ მხოლოდ სფეისებითაა გამოყოფილი
function displayWordsCount(txt) {
    let wordDisplay = document.getElementById("total_words");
    let wordCount = txt.split(" ").length;
    wordDisplay.innerText = `${wordCount}`;
}

function displayShortestLongest(txt) {
    let shortestDisp = document.getElementById("shortest_word");
    let longestDisp = document.getElementById("longest_word");
    let words = txt.split(" ");
    let longest = words.reduce((longest, curr) => {
        return curr.length > longest.length ? curr : longest
    }, "");


    let shortest = words.reduce((shortest, curr) => {
        return curr.length < shortest.length ? curr : shortest
    }, longest);


    longestDisp.innerText = `${longest}`;
    shortestDisp.innerText = `${shortest}`;
}

function displayAverage(txt) {
    let averageDisp = document.getElementById("average_len");
    let words = txt.split(" ");

    let lettersSum = 0;

    words.forEach(word => {
        lettersSum += word.length;
    });

    let average = lettersSum / words.length;

    averageDisp.innerText = `${average}`;
}

// 2
function loadImage() {
    let picElement = document.getElementById("ex2_img");
    const imgInput = document.querySelector('.img_input');
    const img = imgInput.files[0];
    if (img) {
        readFile(img).then((content) => {
            picElement.src = content;
            picElement.style.display = "block";
        }).catch((error) => {
            console.error(error.message);
        })
    }
}

// 3

function removeOtherChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function allTypeLoad() {
    const contentWrapper = document.querySelector(".content_wrapper");
    const allTypeInput = document.querySelector('.all_type_input');
    const element = allTypeInput.files[0];
    if (element) {
        readFile(element).then((content) => {
            if (element.type === "text/plain") {
                let newText = document.createElement("p");
                newText.innerText = content;

                removeOtherChildren(contentWrapper);
                contentWrapper.appendChild(newText);

            } else if (element.type === "image/jpeg"
                || element.type == "image/jpg"
                || element.type == "image/gif"
                || element.type == "image/png") {
                let newImage = document.createElement("img");
                newImage.src = content;
                newImage.alt = "ex3_img";

                removeOtherChildren(contentWrapper);
                contentWrapper.appendChild(newImage);
            } else {
                let newVideo = document.createElement("video");
                newVideo.width = 320;
                newVideo.controls = true;
                let newSource = document.createElement("source");
                newSource.src = content;
                newSource.type = "video/mp4";
                newVideo.appendChild(newSource)

                removeOtherChildren(contentWrapper);
                contentWrapper.appendChild(newVideo);
            }
        }).catch((error) => {
            console.log(error.message)
        })
    }
}