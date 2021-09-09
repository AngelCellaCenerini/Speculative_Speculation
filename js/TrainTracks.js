class TrainTracks{
  constructor(highlightsX){
    this.x = 400;
    this.y = 450;
    this.highlightsX = highlightsX;
    this.resetHighlightsX = undefined;
    this.lenght = 850;    // Tracks Lenght
    this.width = 30;      // Highlights Width
    this.height = 5;      // Tracks & Highlights Height
    this.vx = 0;
    this.vy = 0;
    this.speed = 1;
    this.resetTimer = 0;  // reset Highlights after set time
    this.active = true;
  }

  update(){
    // Default Behaviour
    this.move(train);
    this.reset();
    this.display();
  }

  move(train){
    // Slide Highlights along Tracks
    // Check if Train is moving
    if (this.active){
      this.highlightsX += this.vx;
      this.vx = this.speed;
    }
  }

  reset(){
    // Reset Highlights once off screen - after set timer
    // Check if off screen
    if ( this.highlightsX > 2*this.x){

      // Start counting
      this.resetTimer++;
    }
    // Check Time
    if (this.resetTimer > 4*60){
      // Reset Highlights (Random X Coordinates)
      this.resetHighlightsX = random (-150, -50);
      // Assign reset value to original
      this.highlightsX = this.resetHighlightsX;
      // Reset Timer
      this.resetTimer = 0;
    }
  }

  display(){

    push();

    // Tracks
    fill(150);
    let difference = 40;
    rect(this.x, this.y - difference, this.lenght, this.height);
    rect(this.x, this.y, this.lenght, this.height);

    // Highlights - Tracks Details (one per track)
    fill(195);
    rect(this.highlightsX - difference, this.y - difference, this.width, this.height);
    rect(this.highlightsX, this.y, this.width, this.height);

    pop();

  }
}
