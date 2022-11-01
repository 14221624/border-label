function preload(){}


function setup()
{
    canvas = createCanvas(640, 480);
    canvas.center();
    canvas.position(350, 250);
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide();


}

function draw()
{
    fill("green");
    rect(10, 10, 620, 460);
    image(video, 15, 15, 610, 450);
    
}
