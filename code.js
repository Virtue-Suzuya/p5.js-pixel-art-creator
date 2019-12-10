/*
Right Click = Draw

Default Color = red
Change color keys = (R)ed, (G)reen, (B)lue, (W)hite, B(l)ack, (E)rase, (C)lear all, 
*/

let size = 20 // SIZE OF PIXELS

let tiles = [] // ARRAY OF PIXEL/TILES

let selected; // SELECTED COLOR 

function setup() {
  createCanvas(400, 400) // define the pixel art canvas 
  
  for (let x = 0; x < width; x+=size) { // intialize tile
    for (let y = 0; y < height; y+=size) {
      tiles.push(new tile(x, y, size))
    }
  }
  
  selected = color(255, 0, 0) // set current color to red
}

function draw() {
  for (let i = 0; i < tiles.length; i++) { // display each tiles
    tiles[i].display();
  }
  
  if (mouseIsPressed) {
    for (let i = 0; i < tiles.length; i++) { // when mouse is clicked, find the tile located the X/Y Coord, and then change the color
      if (mouseX > tiles[i].x && mouseX < tiles[i].x + size && mouseY > tiles[i].y && mouseY < tiles[i].y + size) { // find tile

        if (mouseButton === LEFT) { // change color if left click
          tiles[i].col = selected
        }
        
      }
    }
  }
  
}

function keyPressed() { // Keys
  if (key === 'R' || key === 'r') { // R = Red
    selected = color(255, 0, 0)
  } else
    
  if (key === 'G' || key === 'g') { // G = Green
    selected = color(0, 255, 0)
  } else
  
  if (key === 'B' || key === 'b') { // B = Blue
    selected = color(0, 0, 255)
  } else
    
  if (key === 'W' || key === 'w') { // W = White
    selected = color(255)
  } else
    
  if (key === 'L' || key === 'l') { // L = Black
    selected = color(0)
  } else 
    
  if (key === 'E' || key === 'e') { // E = Erase
    selected = color(200)
  } else
    
  if (key === 'C' || key === 'c') { // C = Clear all
    for (let i = 0; i < tiles.length; i++) {
      tiles[i].col = color(200);
    }
  }
}

class tile { // Tile Class
  constructor(x1, y1, s) { // Intialize 
     this.x = x1 // x coord
     this.y = y1 // y coord
     this.col = color(200) // intial color
     this.s = s // size
   }
  
  display() {
    noStroke()
    fill(this.col) // fill color
    rect(this.x, this.y, this.s, this.s) // show tile
    
  }
}
