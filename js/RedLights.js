class RedLights {
  // Two Red Flashing(Toggling) Lights
  // The kind that precede a rail crossing
  constructor(){
     this.x = 200;
     this.y = 230;
     this.size = 100;
     this.r = 254;
     this.g = 32;
     this.b = 32;
     this.red = 214;
     this.green = 0;
     this.blue = 0;
     this.opacity = 0;
     this.transparency = 2;
     this.finalOpacity = 100;
     this.active = true;
     this.switchingTime = 0;
  }

  update(){
    // Default Behaviour
    this.fadeIn();
    this.toggle();
    this.display();
  }

  fadeIn(){
    // Fade In Lights
    // Instead of just appearing - a bit smoother
    this.opacity += this.transparency;
    // Freeze once reached wished value
    if (this.opacity >= this.finalOpacity){
      this.transparency = 0;
    }
  }

  toggle(){

    // Start Tracking Time
    this.switchingTime++;
    // Toggle
    if (this.switchingTime > 1*60){
      // Check if alread Active
      if (this.active){
        this.active = false;
        this.switchingTime = 0;
      }
      else{
        this.active = true;
        this.switchingTime = 0;
      }

      // Resume Timer
      this.switchingTime++;

    }

  }

  display(){

    // Display Flashing Lights
    push();
    // Upper Red Light
    // Check "Toggle Status"
    if ( this.active ){
      // Display Light
      fill(this.r, this.g, this.b, this.opacity);
      ellipse(this.x, this.y - this.y/4, this.size);
    }
    else {
      // "Switch Off" Light
      // strokeWeight(5);
      // stroke(this.red, this.green, this.blue, this.opacity/2);
      fill(this.red, this.green, this.blue, this.opacity/3);
      ellipse(this.x, this.y - this.y/4, this.size);
    }

    // Lower Red Light
    if ( this.active ){
      // "Switch Off" Light
      fill(this.red, this.green, this.blue, this.opacity/3);
      ellipse(this.x, this.y + this.y/4, this.size);
    }
    else {
      // Display Light
      fill(this.r, this.g, this.b, this.opacity);
      ellipse(this.x, this.y + this.y/4, this.size);
    }

    pop();

  }
}
