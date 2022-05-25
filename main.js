
let carImage = document.querySelector('img');

let racecar = {
  direction: 'east',
  location: {
    x: carImage.style.left,
    y: carImage.style.top,
  },
  engineOn: false,
  intervalID: null
};

function turnLeft() {
  return parseInt(carImage.style.transform.slice(7, -4)) - 90;
}

function turnRight() {
  return parseInt(carImage.style.transform.slice(7, -4)) + 90;
}

function turnAround() {
  return parseInt(carImage.style.transform.slice(7, -4)) + 180;
}

document.addEventListener('keydown', event => {
  let currentDirection = racecar.direction;
  let newTransform;
  switch (event.key) {
    case 'ArrowUp':
      if (currentDirection === 'west') {
        newTransform = turnRight();
      } else if (currentDirection === 'east') {
        newTransform = turnLeft();
      } else if (currentDirection === 'south') {
        newTransform = turnAround();
      }
      racecar.direction = 'north';
      break;
    case 'ArrowDown':
      if (currentDirection === 'east') {
        newTransform = turnRight();
      } else if (currentDirection === 'west') {
        newTransform = turnLeft();
      } else if (currentDirection === 'north') {
        newTransform = turnAround();
      }
      racecar.direction = 'south';
      break;
    case 'ArrowLeft':
      if (currentDirection === 'south') {
        newTransform = turnRight();
      } else if (currentDirection === 'north') {
        newTransform = turnLeft();
      } else if (currentDirection === 'east') {
        newTransform = turnAround();
      }
      racecar.direction = 'west';
      break;
    case 'ArrowRight':
      if (currentDirection === 'north') {
        newTransform = turnRight();
      } else if (currentDirection === 'south') {
        newTransform = turnLeft();
      } else if (currentDirection === 'west') {
        newTransform = turnAround();
      }
      racecar.direction = 'east';
      break;
  }
  carImage.style.transform = `rotate(${newTransform}deg)`;
});

document.addEventListener('keydown', event => {
  if (event.key === ' ') {
    racecar.engineOn = !racecar.engineOn;
    if (racecar.engineOn) {
      let newCoordinate;
      racecar.intervalID = setInterval(() => {
        switch (racecar.direction) {
          case 'south':
            newCoordinate = parseInt(carImage.style.top.slice(0, -2)) + 5;
            carImage.style.top = newCoordinate + 'px';
            racecar.location.y = carImage.style.top;
            break;
          case 'west':
            newCoordinate = parseInt(carImage.style.left.slice(0, -2)) - 5;
            carImage.style.left = newCoordinate + 'px';
            racecar.location.x = carImage.style.left;
            break;
          case 'north':
            newCoordinate = parseInt(carImage.style.top.slice(0, -2)) - 5;
            carImage.style.top = newCoordinate + 'px';
            racecar.location.y = carImage.style.top;
            break;
          default:
            newCoordinate = parseInt(carImage.style.left.slice(0, -2)) + 5;
            carImage.style.left = newCoordinate + 'px';
            racecar.location.x = carImage.style.left;
        }
      }, 16)
    } else {
      clearInterval(racecar.intervalID);
    }
  }
})
