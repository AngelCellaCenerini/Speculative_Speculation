class FirstSpace{
  construct(){
    // First Explorable Space
    // Water Body
    this.waterX = 400;
    this.waterY = 300;
    this.waterWidth = 200;
    this.waterHeight = 200;
    this.waterRadius = 10;
  }

  update(){
    // Default Behaviour
    this.display();
  }

  display(){

    push();

    // Water Body
    fill(109, 129, 182);
    rect(this.waterX, this.waterY, this.waterWidth, this.waterHeight, this.waterRadius);
    // rect(400, 300, 400, 200, 10);

    pop();

  }
}
