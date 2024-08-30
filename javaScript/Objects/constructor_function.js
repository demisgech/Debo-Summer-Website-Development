const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 2,
  },
  draw: function (radius) {
    console.log("Drawing a circle with radius ", radius);
  },
  move() {
    console.log("Move");
  },
};

// Constructor function
function Circle(radius, location) {
  this.radius = radius;
  this.location = location;

  this.draw = function (radius) {
    console.log("Draw a circle with radius " + radius);
  };

  this.move = function () {
    console.log("Move...");
  };
}

const circle3 = new Circle(1, { x: 1, y: 1 });
circle3.draw(1);
console.log(circle3);

const circle4 = new Circle(1, { x: 1, y: 1 });
circle4.draw(2);
console.log(circle4);
