class TitleScreen {
  // Setting Up 'Intro' State
  constructor(){
    // Game Title
    this.x = 400;
    this.y = 300;
    this.vx = 0;
    this.vy = 0;
    this.speed = 1.7;
    this.active = false;
    this.title = `CHOOF CHOOF`;
    this.instructions = `| SPACEBAR |`;
    this.opacity = 255;
    this.stallingTime = 0;   // wait set timer before activating Train
  }

  update(smokeClouds, smokeClouds2, trainTracks, train, redLights){
    // Default Behaviour
    this.updateSmokeClouds(smokeClouds, smokeClouds2);
    this.activateRedLights(redLights);
    this.lift(trainTracks, smokeClouds, smokeClouds2, train);
    this.activateTrain(train, trainTracks);
    this.display();
  }

  updateSmokeClouds(smokeClouds, smokeClouds2){
    // Update Both Groups of Smoke Clouds
    // Group 1
    for (let i = 0; i < smokeClouds.length; i++) {
      smokeClouds[i].update(smokeClouds);
    }
    // Group 2
    for (let i = 0; i < smokeClouds2.length; i++) {
      smokeClouds2[i].update(smokeClouds2);
    }
  }

  activateRedLights(redLights){
    // Wait Set Timer
    if (this.stallingTime > 5.8*60){
      // Call/Activate Flashing Red Lights
      redLights.update();
    }
  }

  lift(trainTracks, smokeClouds, smokeClouds2, train){
    // Check if User has Pressed Key
    if (this.active){
      // Lift Text Upwards
      this.y -= this.vy;
      // Lift & Activate Train Tracks
      trainTracks.update(train);
      trainTracks.y -= this.vy;
      // Lift smokeClouds > In Smoke Class
      // De-activate Group 1
      for (let i = 0; i < smokeClouds.length; i++) {
        smokeClouds[i].active = false;
      }
      // De-activate Group 2
      for (let i = 0; i < smokeClouds2.length; i++) {
        smokeClouds2[i].active = false;
      }

      // Reset Velocity
      this.vy = 3*this.speed/4;

      if (trainTracks.y < 400){
        this.speed = 0;
      }

      // Start Timer (to activate Train)
      this.stallingTime++;

    }
  }

  activateTrain(train, trainTracks){
    // Call Train Class & Methods
    if (this.stallingTime > 5*60){
      train.update(trainTracks);
    }
  }

    display(){

    push();

    // Display Text
    textAlign(CENTER, CENTER);
    fill(255);
    // Title
    textSize(35);
    text(this.title, this.x, this.y);
    // Instrcutions
    textSize(19);
    text(this.instructions, this.x, this.y + this.y/6);

    pop();

    }

  keyIsPressed(trainTracks){
    // Check if User presses SPACEBAR
    if (keyCode === 32) {
      // Reposition Train Tracks
      if (!this.active){
        // this extra condition is necessary so the tracks don't reset
        // if the user were to be a dear and presses SPACEBAR more than once
        trainTracks.y = 800;
      }
      // Change Status (activate 'lift' method)
      this.active = true;
    }
  }
}
