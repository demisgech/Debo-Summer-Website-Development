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

// Factory function
function createCircle(radius, location) {
  return {
    radius: radius,
    location: location,
    draw: function (radius) {
      console.log("Drawing a circle with radius ", radius);
    },
    move() {
      console.log("Move");
    },
  };
}
const cirlce1 = createCircle(1, { x: 1, y: 1 });
console.log(cirlce1);

const circle2 = createCircle(2, { x: 2, y: 5 });
circle2.radius = 2;
console.log(circle2);

// Constructor function

class Circle {
  constructor(radius, location) {
    this.radius = radius;
    this.location = location;

    this.draw = function (radius) {
      console.log("Draw a circle with radius " + radius);
    };

    this.move = function () {
      console.log("Move...");
    };
  }
}

const circle3 = new Circle(1, { x: 1, y: 1 });
circle3.draw(1);
console.log(circle3);

const circle4 = new Circle(1, { x: 1, y: 1 });
circle4.draw(2);
console.log(circle4);
