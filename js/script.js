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

// Intro State
let intro = undefined;

// States
let state = 'intro'; // Intro, TitleScreen, Wagons(4), Ending - OOP will construct the states

/**
Preloading .json file (dialogues) & graphic elements
*/
function preload() {
  // JSON file (dialogues)
  // Visual Elements
  avatarImage = loadImage(`assets/images/temporary_avatar.png`);
  avatarAnimation = loadImage(`assets/images/temporary_animation.png`);
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

    // Fade In Effect
    // (needs to stay utop all "layers", hence why written last)
    fadeEffect();

  }
  else if ( state === 'titleScreen' ){

  }
  else if ( state === 'firstWagon' ){

    // Run Avatar
    avatar.update();

  }
  else if ( state === 'secondWagon' ){

  }
  else if ( state === 'thirdWagon' ){

  }
  else if ( state === 'fourthWagon' ){

  }
  else if ( state === 'ending' ){

  }

  // Customized Cursor (throughout)
  cursor.display();

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
