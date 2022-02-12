class Avatar {
  // User's Avatar, controlled by Arrow Keys
  constructor(image, animation){
    this.x = 400;
    this.y = 300;
    this.image = image;
    this.animation = animation;
    this.moving = false;
    this.size = 38;
    this.vx = 0;
    this.vy = 0;
    this.speed = 2;

  }

  update(){
    // Default Behaviour
    this.move();
    this.direct();
    this.confine();
    this.display();
  }

  move(){
    // Apply movement
    this.x += this.vx;
    this.y += this.vy;
  }

  direct(){
    // Direct Avatar via Arrow Kyes
    // Sideways
    if ( keyIsDown(LEFT_ARROW) ){
      this.vx = -this.speed;
      this.moving = true;
    }
    else if( keyIsDown(RIGHT_ARROW) ){
      this.vx = this.speed;
      this.moving = true;
    }
    else{
          this.vx = 0;
          this.moving = false;
        }

    // Upwards/Downwards
    if( keyIsDown(UP_ARROW) ){
      this.vy = -this.speed;
      this.moving = true;
    }
    else if( keyIsDown(DOWN_ARROW) ){
      this.vy = this.speed;
      this.moving = true;
    }
    else{
          this.vy = 0;
    }

  }

  confine(){
    // Constrain Avatar to (Restricted) Canvas
    // this.x = constrain(this.x, 10, 752);
    // this.y = constrain(this.y, 10, 557);
  }

  display(){
   // Display Avatar / Assign Icon to Avatar
   // Check if User is moving
   if (!this.moving){
     // Idle Avatar
     image(this.image, this.x, this.y, this.size, this.size);
   }
   else{
     // Animated Avatar
     image(this.animation, this.x, this.y, this.size, this.size);
   }
}
}
