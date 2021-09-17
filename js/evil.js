// setup canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

//function to generate ball behavior
//creates a starting point on screen, speed, color, and size for each ball
function Ball(x, y, velX, velY, color, size) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
}

//function to set up a circle
function Shape(x, y, velX, velY, exists) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.exists = exists; //boolean?
}

//function to draw the balls
Ball.prototype.draw = function() {
  ctx.beginPath(); //draws circle
  ctx.fillStyle = this.color; //gives circle a color
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI); //creates a complete circle
  ctx.fill(); //completes beginPath()
}

//function to update the ball's data
Ball.prototype.update = function() {
    if ((this.x + this.size) >= width) { //bounce off right edge
        this.velX = -(this.velX);
    }

    if ((this.x - this.size) <= 0) { //bounce off left edge
        this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= height) { //bounce off bottom edge
        this.velY = -(this.velY);
    }

    if ((this.y - this.size) <= 0) { //bounce off top edge
        this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
}

//function for ball collision detection
Ball.prototype.collisionDetect = function() {
    for (let j = 0; j < balls.length; j++) { //go through every ball in the array
        if (!(this === balls[j]) && balls[j].exists) { //checking to see if we're looking at 2 different balls
            //2D collision detection algorithm
            const dx = this.x - balls[j].x;
            const dy = this.y - balls[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            //checking to see if the 2 balls overlap
            if (distance < this.size + balls[j].size) {
                balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
            }
        }
    }
}

//store and populate the balls
let balls = [];

//creating 25 balls with random sizes and colors
while (balls.length < 25) {
    let size = random(10,20);
    let ball = new Ball( 
        //ball position always drawn at least one ball width
        //away from the edge of the canvas, to avoid drawing errors
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7,7),
        random(-7,7),
        'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
        size
    );

    balls.push(ball); //adds each ball to the array
}

//animation loop function
function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)'; //makes ball trails visible bc background is semi-transparent black
    ctx.fillRect(0, 0, width, height);

    //run our functions for each ball in the array
    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect();
    }

    //recursively running our function so balls keep bouncing
    requestAnimationFrame(loop);
}

//call the loop function
loop();