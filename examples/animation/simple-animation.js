var img = document.getElementById('img');
var ctx = [
    document.getElementById('anim1').getContext('2d'),
    document.getElementById('anim2').getContext('2d')
];

var loopTimeout = 100;

var animations = [{
    frames: [{ x: 0, y: 0 }, { x: 32, y: 0 }, { x: 64, y: 0 }],
    size: { width: 32, height: 32 },
    source: img,
    fps: 5,
    steps: [0, 1, 2],
    startTime: -1
}, {
    frames: [{ x: 0, y: 0 }, { x: 32, y: 0 }, { x: 64, y: 0 }],
    size: { width: 32, height: 32 },
    source: img,
    fps: 5,
    steps: [0, 1, 2, 1],
    startTime: -1
}];

function game() {
    var dt = -1;
    var timeout = -1;
    var step = -1;
    for (var i = 0; i < animations.length; i++) {
        if (animations[i].startTime < 0) {
            animations[i].startTime = currentTime();
        }
        dt = currentTime() - animations[i].startTime;
        timeout = 1000 / animations[i].fps;
        step = Math.floor(dt / timeout) % (animations[i].steps.length);
        ctx[i].drawImage(
            animations[i].source,
            animations[i].frames[animations[i].steps[step]].x,
            animations[i].frames[animations[i].steps[step]].y,
            animations[i].size.width,
            animations[i].size.height,
            0, 0,
            animations[i].size.width,
            animations[i].size.height);
    }
    setTimeout(game, loopTimeout);
}

function currentTime() {
    return (new Date()).getTime();
}

setTimeout(game, loopTimeout);