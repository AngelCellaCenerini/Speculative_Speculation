class Smoke {
  constructor(x, y, size){
    this.x = x;
    this.y = y;
    this.size = size;
    this.vx = 0;
    this.vy = 0;
    this.speed = 0.3;
    this.active = true;
  }

  update(){
    this.move();
    this.display();
  }

  move(){
    if (this.active){
      // Default Movement
      // Lights gently floating around screen
      this.y = this.y + this.vy;
      this.x = this.x + this.vx;
      let change = random(0, 1);
      if (change < 0.03){
        this.vx = random(-this.speed, this.speed);
        this.vy = random(-this.speed, this.speed);
      }
    }
    else{
      // Move Upwards
      this.y = this.y + this.vy;
      this.x = this.x + this.vx;
      let change = random(0, 1);
      if (change < 0.03){
        this.vx = random(-this.speed, this.speed);
        this.vy = -6*this.speed;
      }
    }

  }

  display(){
    // "Smoke" clouds
    push();
    stroke(255);
    fill(255, 100);
    ellipse(this.x, this.y, this.size)
    pop();
  }

}
