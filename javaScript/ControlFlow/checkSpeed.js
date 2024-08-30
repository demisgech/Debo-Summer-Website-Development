// Speed Limit = 70
// for each 5km above a speed limit give 1 point
// Math.floor(1.2)
// if points === 12 license suspended

checkSpeed(70);

function checkSpeed(speed) {
  const speedLimit = 75;
  const kmPerPoint = 5;
  if (speed < speedLimit + kmPerPoint) console.log("Ok");
  else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) console.log("License suspended");
    else console.log("Points", points);
  }
}
