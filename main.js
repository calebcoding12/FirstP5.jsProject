function preload(){
}
function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,500,500);
    circle(50,50,100);
    fill("blue");
    circle(450,50,100);
    fill("blue");
    circle(50,450,100);
    fill("blue");
    circle(450,450,100);
    fill("green");
    rect(30,90,40,320)
    fill("green");
    rect(430,90,40,320)
    fill("green");
    rect(30,90,400,40)
    fill("green");
    rect(30,400,440,40)
    fill("blue");
}
function take_snapshot(){
    save("myimage.png");
}