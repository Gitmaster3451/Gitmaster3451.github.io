const canvas = document.querySelector("canvas");

let c = canvas.getContext("2d");

var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
            html.clientHeight, html.scrollHeight, html.offsetHeight );

canvas.width = window.innerWidth;
canvas.height = height;

var amplifier = height / window.innerHeight;

// get the buble cord

let bubleCord = [];
let balls = 50 * amplifier;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = height;
})

for(let i = 0; i < balls; i++) {
    bubleCord.push({
        x:Math.random() * innerWidth,
        y:Math.random() * height,
        r:Math.floor((Math.random() + 0.1) * 5),
        dx:(Math.random() - 0.5) * 2,
        dy:(Math.random() - 0.5) * 2,
    })
}

function draw() {
    for(let i = 0; i < bubleCord.length; i++) {
        let buble = bubleCord[i];
        c.beginPath();
        c.arc(buble.x, buble.y, buble.r, 0, Math.PI*2, false);
        c.stroke();
        c.fillStyle = "#2c2c2c";
        c.fill();
    }

    c.beginPath();
    for(let i = 0; i < bubleCord.length; i++) {
        let l1 = bubleCord[i];
        c.moveTo(l1.x, l1.y);

        for(let j = 0; j < bubleCord.length; j++) {
            let l2 = bubleCord[j];
            if(distance(l1, l2) < 150) {
                c.lineTo(l2.x, l2.y);

            }
        }
    }
    c.lineWidth = "0.05";
    c.strokeStyle = "#2c2c2c";
    c.stroke();
}

function update() {
    for(let i = 0; i < bubleCord.length; i++) {
        let s = bubleCord[i];
        if(s.x < s.r / 2 || s.x > canvas.width - (s.r / 2)) {
            s.dx = -s.dx;
        }
        if(s.y < s.r / 2 || s.y > canvas.height - (s.r / 2)) {
            s.dy = -s.dy;
        }
        s.x += s.dx;
        s.y += s.dy;
    }

    draw();
}

function distance(point1, point2) {
    let dx = 0;
    let dy = 0;

    dx = point2.x - point1.x;
    dx = dx * dx;

    dy = point2.y - point1.y;
    dy = dy * dy;

    return Math.sqrt(dx + dy);
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    update();
}

function Clamp(num, min, max) {
    Math.min(Math.max(num, min), max);
}

animate();