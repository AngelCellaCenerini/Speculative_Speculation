class FirstWagon {
  constructor(){
    // Set Up First Wagon State
    // User/Avatar encounters Simulated Friend SF (yea real original I know)
    this.x = 400;
    this.y = 330;
    this.width = 550;
    this.height = 200;
    this.radius = 8;
    this.vx = 0;
    this.vy = 0;
    this.speed = 1;
    // State (Wagon/Open Space)
    this.active = false;
    // Fading Effect
    this.opacity = 255;
    this.fading = 20;
    // Current Borders constraining Avatar
    this.leftBorder = 0;
    this.rightBorder = 0;
    this.topBorder = 0;
    this.bottomBorder = 0;
    // Wagon Measures
    this.wagonLeftBorder = 155;
    this.wagonRightBorder = 645;
    this.wagonTopBorder = 255;
    this.wagonBottomBorder = 400;
    // Space Measures
    this.spaceLeftBorder = -50;
    this.spaceRightBorder = 850;
    this.spaceTopBorder = -50;
    this.spaceBottomBorder = 650;
    // "Doors"
    this.door1X = 150;
    this.door1Y = 330;
    this.door2X = 650;
    this.door2Y = 330;
    this.door3X = 400;
    this.door3Y = 235;
    this.doorWidth = 25;
    this.doorHeight = 50;
  }

  update(avatar, trainTracks){
    // Default Behaviour
    this.constrain(avatar);
    this.open(avatar);
    this.display(trainTracks);

  }

  constrain(avatar){
    // Constrain Avatar to State's (variable) structure
    // Check State Status
    // State is not Active - Wagon
    if (!this.active){
      // Set Wagon Borders
      this.leftBorder = this.wagonLeftBorder;
      this.rightBorder = this.wagonRightBorder;
      this.topBorder = this.wagonTopBorder;
      this.bottomBorder = this.wagonBottomBorder;

    }
    // State is Active - Open Room/Space
    else{
      // Set Space Borders
      this.leftBorder = this.spaceLeftBorder;
      this.rightBorder = this.spaceRightBorder;
      this.topBorder = this.spaceTopBorder;
      this.bottomBorder = this.spaceBottomBorder;

    }

    // Constrain Avatar
    avatar.x = constrain(avatar.x, this.leftBorder, this.rightBorder);
    avatar.y = constrain(avatar.y, this.topBorder, this.bottomBorder);

  }

  fade(){
    // Fade Wagon Out
    this.opacity = this.opacity - this.fading;
    if(this.opacity <= 0){
      // Change State
      state = 'firstSpace';
    }

  }

  open(avatar){
    // "Open"/Transorms Wagon into Space once Avatar oversteps "Invisible Door"
    // Check Avatar Location
    // Avatar Opens Space
    if(avatar.y < (this.wagonTopBorder + 10)){
      // Activate Fade Effect & Open Space
      this.fade();
      this.active = true;
    }
    // else{
    //   // Avatar goes bacl to Wagon
    //   this.active = false;
    // }
  }

  display(trainTracks){

    push();

    // Check Space Status
    // If Closed (Wagon)
    if (!this.active){
      // TrainTracks
      trainTracks.update();
    }

    // Display Wagon
    stroke(255, this.opacity);
    strokeWeight(5);
    fill(180, this.opacity);
    rect(this.x, this.y, this.width, this.height, this.radius);
    // Display Doors
    // Left/Right Doors
    noStroke();
    fill(255, this.opacity);
    rect(this.door1X, this.door1Y, this.doorWidth, this.doorHeight, this.radius/2);
    rect(this.door2X, this.door2Y, this.doorWidth, this.doorHeight, this.radius/2);

    // }
    // else{
    //   // Display Space
    // }

    // Top "Door" (non visible)
    fill(255, 0);
    rect(this.door3X, this.door3Y, 2*this.doorHeight, this.doorWidth, this.radius/2);

    pop();

  }

}
