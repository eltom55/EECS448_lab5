let pic1 = "./pictures/arnold.jpeg";
let pic2 = "./pictures/milan.jpeg";
let pic3 = "./pictures/ramos.jpeg";
let pic4 = "./pictures/worldcup.jpeg";
let pic5 = "./pictures/zidan.jpeg";

let pictures = [pic1, pic2, pic3, pic4, pic5];
let currentIndex = 0;
let currentImage = document.getElementById("image");

currentImage.src = pictures[currentIndex];

function previous() {
    if (currentIndex == 0)
        currentIndex = 4;
    else currentIndex -= 1;

    currentImage.src = pictures[currentIndex];
}

function next() {
    if (currentIndex == 4)
        currentIndex = 0;
    else currentIndex += 1;

    currentImage.src = pictures[currentIndex];
}