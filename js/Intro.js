class Intro {
  // Setting Up 'Intro' State
  constructor(){
    // Set up Game Window
    this.gameWindowX = 400;
    this.gameWindowY = 325;
    this.gameWindowWidth = 500;
    this.gameWindowHeight = 200;
    this.radius = 4;
    // Progress Bar
    this.currentProgress = 0;
    this.progress = undefined;
    this.startBarTimer = 0;     // start running progress bar after set timer

    // Set up Chat Icon
    this.chatIcon1Active = false;
    this.chatIcon2Active = false;
    this.activatingIconsTime = 0;
    this.chatIconX1 = 725;
    this.chatIconY1 = 500;
    this.chatIconFinalY = 430;
    this.chatIconX2 = 725;
    this.chatIconY2 = 500;
    this.chatIconSize = 50;
    this.chatIconVX = 0;
    this.chatIconVY = 0;
    this.chatIconSpeed = 6.7;
    this.chatIcon1Ringing = true;
    this.chatIcon2Ringing = true;

    // Set up Chat Window
    this.chatWindow1Active = false;
    this.chatWindow2Active = false;
    this.chatWindowX1 = 260;
    this.chatWindowY1 = 230;
    this.chatWindowX2 = 530;
    this.chatWindowY2 = 290;
    this.chatWindowWidth = 280;
    this.chatWindowHeight = 350;
    this.chatWindowVX = 0;
    this.chatWindowVY = 0;
    this.chatWindowSpeed = 4;
    this.chatWindowGrowth = 4;

    // Color (shared by all on-screen elements)
    this.red = 144;
    this.green = 255;
    this.blue = 255;
    this.opacity = 150;
  }

  update(cursor){
    this.trackProgress();
    this.activateIcons();
    this.openWindows(cursor);
    this.display();
  }

  activateIcons(){
    // Time Icons Activation (Dependent from each other)
    this.activateIcon1();
    this.slideIcon1();
    this.activateIcon2();
  }

  activateIcon1(){
    // Check if Inactive
    if(!this.chatIcon1Active){
      // Start Counting
      this.activatingIconsTime++;
      // Reach 2 secs
      if (this.activatingIconsTime > 2*60){
        // Activate Icon 1
        this.chatIcon1Active = true;
        // Reset Timer
        this.activatingIconsTime = 0;
      }
    }
  }

  slideIcon1(){
    // Slide Icon 1 Updwards once Icon 2 activates
    if(!this.chatIcon1Ringing){
      if (this.activatingIconsTime > 3.7*60){
        this.chatIconY1 -= this.chatIconVY;
        this.chatIconVY = this.chatIconSpeed;
        if (this.chatIconY1 < this.chatIconFinalY){
          this.chatIconSpeed = 0;
        }
      }
    }
  }

  activateIcon2(){
    // Check if Icon 1 has been cliked (aka not Ringing)
    if(!this.chatIcon1Ringing){
      // Start Counting
      this.activatingIconsTime++;
      // Reach 3 secs
      if (this.activatingIconsTime > 4*60){
        // Activate Icon 2
        this.chatIcon2Active = true;
        // Reset(Stop) Timer
        this.activatingIconsTime = 0;
      }
    }
  }

  openWindows(cursor){
    // User opens Chat Windows by clicking on respective Icon
    // Calculate Cursor-Icon Distances
    let d1 = dist(cursor.x, cursor.y, this.chatIconX1, this.chatIconY1);  // Icon 1
    let d2 = dist(cursor.x, cursor.y, this.chatIconX2, this.chatIconY2);  // Icon 2
    // Check if User pressed Mouse
    if (mouseIsPressed){
      // Check if User clicked (Active) Icon 1
      if((d1 < cursor.bodySize/2 + this.chatIconSize/2) && this.chatIcon1Active){
        // Open Window 1
        this.chatWindow1Active = true;
        // Remove "Notification" from respective Chat Icon
        this.chatIcon1Ringing = false;
      }
      // Check if User clicked (Active) Icon 2
      else if((d2 < cursor.bodySize/2 + this.chatIconSize/2) && this.chatIcon2Active){
        // Open Window 2
        this.chatWindow2Active = true;
        // Remove "Notification" from respective Chat Icon
        this.chatIcon2Ringing = false;
      }

     }
  }

  trackProgress(){
    // Track Bar Progress - Depending on User's Progress
    // Start progress (start 'downloading')
    if (this.currentProgress < 6*this.gameWindowY/11){
      this.progressBar();
    }
    // Stop a bit after halfway
    else{
      this.progress = 0;
    }
    // Restart after User has opened Window 1
    if (this.chatWindow1Active){
      if (this.currentProgress < 8*this.gameWindowY/11){
        this.progressBar();
      }
      // Stop after...a bit XD
      else{
        this.progress = 0;
      }
    }
    // Restart after User has opened Window 2
    if (this.chatWindow2Active){
      if (this.currentProgress < 5*this.gameWindowWidth/8){
        this.progressBar();
      }
      // Stop once Progress is complete
      else{
        this.progress = 0;
      }
    }
  }

  progressBar(){
    // Check if set timer has been met
    // Start counting
    this.startBarTimer++;
    // Check the 4 sec mark
    if ( this.startBarTimer > 4*60){
      // Randomize Progress Speed
      this.progress = random(0.03, 0.15);
      // Add to Bar Progress
      this.currentProgress += this.progress;
    }
  }

  display(){

    push();

    // Game Window
    fill(this.red, this.green, this.blue, this.opacity);  // Aqua Color
    // Window
    rect(this.gameWindowX, this.gameWindowY, this.gameWindowWidth, this.gameWindowHeight, this.radius);
    // Text
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(23);
    // Caption
    text(`Downloading..`, this.gameWindowX, this.gameWindowY - this.gameWindowY/6);
    // Blinking Dot
    fill(255);
    text(`.`, this.gameWindowX + this.gameWindowX/4, this.gameWindowY - this.gameWindowY/6);
    // Description
    // Create seperate Class (Dialogues/JSON)
      push();
      rectMode(CORNER);
      rect(this.gameWindowX - 156, this.gameWindowY + 58, this.currentProgress, this.gameWindowHeight/15, this.radius);
      pop();

    // Borders
    noFill();
    stroke(255);
    strokeWeight(3);
    rect(this.gameWindowX, this.gameWindowY + this.gameWindowY/5, 2*this.gameWindowWidth/3, this.gameWindowHeight/8, this.radius);

    // Chat Icons
    noStroke();
    fill(this.red, this.green, this.blue, this.opacity);  // Aqua Color
    // Check if Icons are active
    // Icon 1
    if (this.chatIcon1Active){
      // Display Icon 1
      ellipse(this.chatIconX1, this.chatIconY1, this.chatIconSize);
      // Check if Icon is in 'Ringing' Mode
      if (this.chatIcon1Ringing){
         // Display Temporary Text (kinda like a notification)
         // Notification disappears once User clicks on Icon and opens respective Window
         push();
         fill(255);
         textSize(15);
         text(`...`, this.chatIconX1, this.chatIconY1);
         pop();
      }
    }
    // Icon 2
    if (this.chatIcon2Active){
      // Display Icon 2
      ellipse(this.chatIconX2, this.chatIconY2, this.chatIconSize);
      // Check if Icon is in 'Ringing' Mode
      if (this.chatIcon2Ringing){
         // Display Temporary Text (kinda like a notification)
         // Notification disappears once User clicks on Icon and opens respective Window
         push();
         fill(255);
         textSize(15);
         text(`...`, this.chatIconX2, this.chatIconY2);
         pop();
      }
    }

    // Chat Windows
    // Check if Windows are open/activated
    // Window 1
    if (this.chatWindow1Active){
      // Display Window 1
      rect(this.chatWindowX1, this.chatWindowY1, this.chatWindowWidth, this.chatWindowHeight, this.radius);
      // Little White Detail
      noFill();
      stroke(255);
      rect(this.chatWindowX1, this.chatWindowY1 - 140, this.chatWindowWidth/2, this.chatWindowHeight/50, this.radius);
    }

    // Window 2
    if (this.chatWindow2Active){
      // Display Window 2
      noStroke();
      fill(this.red, this.green, this.blue, this.opacity);  // Aqua Color
      rect(this.chatWindowX2, this.chatWindowY2, this.chatWindowWidth, this.chatWindowHeight, this.radius);
      // Little White Detail
      noFill();
      stroke(255);
      rect(this.chatWindowX2, this.chatWindowY2 - 140, this.chatWindowWidth/2, this.chatWindowHeight/50, this.radius);
    }

    pop();

  }

}
