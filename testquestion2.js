
function setup() {
    new Canvas(600, 600);
    background(220);
}
function draw() {
    for( let i = 0; i < 10; i++) {
        noStroke();
        fill(0 + i * 25)
        circle(30 + i * 60, 30 + i * 60, 50)
    }
}

