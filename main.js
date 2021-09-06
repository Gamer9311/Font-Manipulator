function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(600, 70);

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#FF7F7F');
}

function modelLoaded()
{
    console.log('PoseNet is Initialised!');
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
    }
}
