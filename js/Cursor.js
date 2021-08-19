class Cursor {
  // Customized Cursor
  constructor(){
    this.x = undefined;
    this.y = undefined;
    this.bodySize = 11;
    this.glowSize = 16;
    this.opacity = 150;
  }

  display(){
   // Display Customized Cursor
   // Associate Object with Cursos Coordinates
   this.x = mouseX;
   this.y = mouseY;
   // Main Round Body (White)
   push();
   fill(255);
   ellipse(this.x, this.y, this.bodySize);
   // Glow (White)
   fill(255, this.opacity);
   ellipse(this.x, this.y, this.glowSize);
   pop();
}
}
