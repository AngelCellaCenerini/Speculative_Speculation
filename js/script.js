/**
Speculative Speculation - title TBD
Angel Cella Cenerini

Prompt
Context:Specu;ative Game Design
Theme: Death
Plan & Discussion: see README.md for details
*/

"use strict";

// Fading Effect - used in different states
let fadingEffect = {
  x: 0,
  y: 0,
  width: 800,
  height: 600,
  vx: 0,
  vy: 0,
  speed: 1,
  opacity: 255,
}

// Customized Cursor
let cursor = undefined;

// Avatar
let avatar = undefined;
let avatarImage = undefined;
let avatarAnimation = undefined;

// States
// Intro State
let intro = undefined;
// Title Screen State
let titleScreen = undefined;
let smokeClouds = [];
let smokeClouds2 = [];
const NUM_SMOKE_CLOUDS = 80;
// Train Tracks //
let trainTracks = undefined;
// Train //
let train = undefined;
let trainImage = undefined;
// Flashing Red Lights //
let redLights = undefined;

// States
let state = 'titleScreen'; // Intro, TitleScreen, Wagons(3), Ending - OOP will construct the states

/**
Preloading .json file (dialogues) & graphic elements
*/
function preload() {
  // JSON file (dialogues)
  // Visual Elements
  avatarImage = loadImage(`assets/images/temporary_avatar.png`);
  avatarAnimation = loadImage(`assets/images/temporary_animation.png`);
  trainImage = loadImage(`assets/images/temporary_train.png`);
}

/**
Set Up
*/
function setup() {

  // Set Up Canvas Size
  createCanvas(800, 600);

  // General Settings
  noCursor();
  noStroke();
  imageMode(CENTER);
  rectMode(CENTER);
  textFont(`Courier`);
  textAlign(LEFT, RIGHT);
  textSize(16);

  // Set Up Customized Cursor
  // Create Object & Assign Icon
  cursor = new Cursor();

  // Set Up User's Avatar
  // Create Object & Assign Icon
  avatar = new Avatar(avatarImage, avatarAnimation);

  // States
  // Set Intro State
  intro = new Intro();
  // Set Title Screen State
  titleScreen = new TitleScreen();
  // Smoke
  // Set Up "Smoke Particles/Clouds"
  for (let i = 0; i < NUM_SMOKE_CLOUDS; i++) {
    smokeClouds[i] = new Smoke(random(-50, 2*width/5), random(-100, 3*height/2), random(20, 40));
  }
  for (let i = 0; i < NUM_SMOKE_CLOUDS; i++) {
    smokeClouds2[i] = new Smoke(random(3*width/5, width), random(-100, 3*height/2), random(20, 40));
  }

  //Train Tracks
  let highlightsX = random(-150, -50);
  trainTracks = new TrainTracks(highlightsX);
  //Train
  train = new Train(trainImage);
  // Red Flashing Lights
  redLights = new RedLights();

}

/**
TBD
*/
function draw() {

  // Background Color throughout
  background(19, 24, 27);

  // States
  if ( state === 'intro' ){

    // Run Intro State
    intro.update(cursor);

    // Customized Cursor (only in "desktop")
    cursor.display();

    // Fade In Effect
    // (needs to stay on top of all "layers", hence why written last)
    fadeEffect();

  }
  else if ( state === 'titleScreen' ){

    // Run Title Screen State
    titleScreen.update(smokeClouds, smokeClouds2, trainTracks, train, redLights);

  }
  else if ( state === 'firstWagon' ){

    // Train Tracks (Highlights should simulate movement)
    trainTracks.update();

    // Run Avatar
    avatar.update();

  }
  else if ( state === 'secondWagon' ){

    // Train Tracks (Highlights should simulate movement)
    trainTracks.update();

    // Run Avatar
    avatar.update();

  }
  else if ( state === 'thirdWagon' ){

    // Train Tracks (Highlights should simulate movement)
    trainTracks.update();

    // Run Avatar
    avatar.update();

  }
  else if ( state === 'ending' ){

  }

}

function fadeEffect(){

  // Effect Speed
  let fading = 2;

  // "Draw" Effect
  push();
  fill(19, 24, 27, fadingEffect.opacity); // bg color (dark grey)
  fadingEffect.x = width/2;
  fadingEffect.y = height/2;
  rect(fadingEffect.x, fadingEffect.y, fadingEffect.width, fadingEffect.height);
  pop();

  // Make transparent (hence create "fading" effect)
  fadingEffect.opacity -= fading;
}

// Events
function mouseIsPressed(){
  // Check/React if Mouse is Pressed in Intro State
  intro.update(cursor);
}

function keyPressed(){
  // Check Keyboar Input for Title Screen State
  titleScreen.keyIsPressed(trainTracks);
}
