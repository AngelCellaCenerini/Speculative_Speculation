/**
Speculative Speculation - title TBD
Angel Cella Cenerini

Prompt
Context:Specu;ative Game Design
Theme: Death
Plan & Discussion: see README.md for details
*/

"use strict";
// Avatar
let avatar = undefined;
let avatarImage = undefined;
let avatarAnimation = undefined;
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

  // Set Up User's Avatar
  // Create Object & Assign Icon
  avatar = new Avatar(avatarImage, avatarAnimation);

}

/**
TBD
*/
function draw() {

  // Background color throughout
  background(19, 24, 27);

  // States
  if ( state === 'intro' ){

    // checking Avatar
    avatar.update();

  }
  else if ( state === 'titleScreen' ){

  }
  else if ( state === 'firstWagon' ){

  }
  else if ( state === 'secondWagon' ){

  }
  else if ( state === 'thirdWagon' ){

  }
  else if ( state === 'fourthWagon' ){

  }
  else if ( state === 'ending' ){

  }

}
