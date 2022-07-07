var s1, s2
var g1, g2
function setup() {
  createCanvas(400,400);
  s1 = new Student("Hamza", 14, 9)
  s1.display()

  s2 = new Student("Zaid", 16, 12)
  s2.display()

  g1 = new Game("FNAF", "Horror", 2014)
  g1.display()

  g2 = new Game("Elden Ring", "Fantasy", 2022)
  g2.display()
}

function draw() 
{
  background(30);
  
}