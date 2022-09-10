function setup(){
    canvas = createCanvas(550,550);
    canvas.position(560,160);
    video = createCapture(VIDEO);
    video.size(550,500);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPose );
}
function modelLoaded() {
    console.log("poseNet is initialized");
}
function draw() {
    background("#008080");
}
function gotPose(results){
if(results.length > 0){
    console.log(results);
}
}