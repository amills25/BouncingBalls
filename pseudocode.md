#### User story: 
We want the user to be able to control an "evil cirle" and see changes to the bouncing balls.

#### Variables
 * ball
 * evil circle
 * user

### START 
#### Program BouncingBalls

 * Initialize variables to set up the canvas
   * Height and width of screen

 * Function to generate a random number
   * Use Math.floor() and Math.random()

 * Function to generate ball behavior
   * All balls behave in the same way
 
 * Function to draw the balls
   * Add draw() to Ball() prototype

 * Function to update ball's data
   * Changing this.x and this.y to keep ball in window

 * Store and populate balls
   * Create array
   * WHILE
   * Random assignments of size and color

 * Function to create animation loop
   * FOR loop to draw and move balls

 * Call loop()

### END

#### Functions, Objects, Arrays

 * random()
   * Math.floor() and Math.random()
   * random number formula

 * Ball()
   * this.x, etc. for each variable

 * draw()
   * beginPath()
   * fillStyle
   * arc()
   * fill()

 * update()
   * IF statements to change velX and velY
   * x += velX
   * y += velY

 * loop()
   * ctx.fillStyle and ctx.fillRect() to fill canvas w/ background color
   * Animation loop
   * FOR to draw() and update()
   * requestAnimationFrame()