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
