

const body = document.querySelector("body");

const images = ["0.jpg","1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"];

function paintImage(imgNumber){

    const image = new Image();
    image.src = `img/${imgNumber}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom(){
    const number  = Math.floor(Math.random()*images.length);
    return number;
}

function init(){

    const randomNumber = genRandom();
    paintImage(randomNumber);

}

init();