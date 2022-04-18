canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
nasa_mars_images_array = ["https://cdnfr2.img.sputniknews.com/images/102616/41/1026164121.jpg","https://tse4.mm.bing.net/th?id=OIP.ERslfQKmUfmyxsBEYQUi5wHaEK&pid=Api&P=0&w=296&h=167", "http://www.geo.fu-berlin.de/geol/fachrichtungen/planet/press/archiv2014/hellas1/_bilder/bild_hellas_co/hellas_co.jpg","https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2012/marsthefract.jpg"];

random_number = Math.floor(Math.random() * 4);
console.log(random_number);
rover_width = 100;
rover_height = 90;

background_image = nasa_mars_images_array[random_number];
console.log("background_image = " + background_image);
rover_image = "rover.png";

rover_x = 10;
rover_y = 10;


function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38') {
        up();
        console.log("up");
    }
    if(keyPressed == '40') {
        down();
        console.log("down");
    }
    if(keyPressed == '37') {
        left();
        console.log("left");
    }
    if(keyPressed == '39') {
        right();
        console.log("right");
    }
}

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("When up arrow pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        console.log("When down arrow pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("When left arrow pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("When right arrow pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}