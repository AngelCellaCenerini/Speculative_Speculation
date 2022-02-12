class Train {
  constructor(image) {
    // Set Up Train
    this.x = 1200;
    this.y = 335;
    this.doorY = 335;
    this.width = 600;
    this.height = 110;
    this.doorHeight = 78;
    this.radius = 25;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.speed = -2;
    this.doorSpeed = 0;
    this.acceleration = 0.0028;
    this.stop = 400;
    this.accelerating = false;
    this.doorActive = false;
    this.image = image;
    this.stallingTime = 0;
    this.timer = 0;
  }

  update(trainTracks){
    // Start Timer
    this.timer++;
    // Wait Timer
    if(this.timer > 2.5*60){
      // Default Behaviour
      this.move();
      this.accelerate();
      this.stopping(trainTracks);
      this.restarting(trainTracks);
      this.manageDoor();
      this.display();
    }
  }

  move(){
    // Move Train (along tracks)
    this.x += this.vx;
    this.vx = this.speed;
    // Change State when Train has gone Off-Screen
    if(this.x <= -500){
      // Change State
      state = `firstWagon`;
    }
    // Keep ready to Move Train Door
    this.doorY += this.vy;
    this.vy = this.doorSpeed;

  }

  accelerate(){
    // Accelerate or Decelerate
    this.speed -= this.ax;
    // Check if accelerating
    if (this.accelerating){
      this.ax = this.acceleration;
    }
    // Check if decelerating
    else{
      this.stallingTime++;
      this.ax = -this.acceleration;
    }

  }

  stopping(trainTracks){
    // Decelerate & Slowly Stop
    if (this.accelerating === false && (this.acceleration < this.speed)){
      // Stop Train
      this.acceleration = 0;
      this.speed = 0;
      // "Stop" Traks (Highlights are momentarily deactivated)
      trainTracks.active = false;
      // Activate Door
      this.doorActive = true;
    }
  }

  manageDoor(){
    // Open & Close Train Door
    // Open Door
    // Wait set Timer & Check if Door Active (aka if Train has stopped)
    if ( this.stallingTime > 13*60 && this.doorActive === true ){
        // Lift Door Upwards (Open Door)
        this.doorSpeed = -0.8;
        // Check Door Progress
        if (this.doorY < 280){
          // Stop Door
          this.doorSpeed = 0;
          this.vy = 0;
        }
    }

    // Close Door
    // Wait Set Timer & Check if Door Active (aka if Train has stopped)
    if (this.stallingTime > 17*60 && this.doorActive === true ){
      // Lift Door Downwards (Close Door)
      this.doorSpeed = 0.8;
      this.vy = this.doorSpeed;
      // Resize Door
      this.doorHeight--;
      // Restrain Door Tranformation once regained initial height value
      if (this.doorHeight < (-77)){
        this.doorHeight = -78;
      }
      // Check Door Progress
      if (this.doorY > 334){
        // Stop Door
        this.doorSpeed = 0;
        this.vy = 0;
      }
    }

  }

    restarting(trainTracks){
      if ( this.stallingTime > 20*60){
        trainTracks.active = true;
        this.accelerating = true;
        this.acceleration = 0.005;
        this.speed -= this.acceleration;
      }
    }

  display(){
    // Display train
    // push();
    // fill(190);
    // rect(this.x - this.x/30, this.y, this.width, 9*this.height/10, this.radius);
    // fill(255);
    // rect(this.x, this.y, this.width, this.height, this.radius);
    // fill(180);
    // rect(7*this.x/13, this.y, this.width/400, 3*this.height/5);
    // fill(193, 211, 212);
    // ellipse(6*this.x/13, this.y, this.width/28);
    // noFill();
    // stroke(190);
    // strokeWeight(3);
    // rect(this.x + this.x/7, this.y, 3*this.width/4, this.height/2, this.radius);
    // pop();
    image(this.image, this.x, this.y, this.width, this.height);

    // Train Door
    push();
    // Door Edge
    stroke(120);
    // "Open" Door ('Empty' Space)
    fill(60);
    rect(this.x, this.y, this.width/10, 2*this.height/3, this.radius);
    fill(200);
    rect(this.x, this.doorY, this.width/10, this.doorHeight, this.radius);
    pop();
  }
}
