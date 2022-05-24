
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

document.addEventListener('keydown', event => {
  switch (event.key) {
    case 'ArrowUp':
      carImage.className = 'north';
      racecar.direction = 'north';
      break;
    case 'ArrowDown':
      carImage.className = 'south';
      racecar.direction = 'south';
      break;
    case 'ArrowLeft':
      carImage.className = 'west';
      racecar.direction = 'west';
      break;
    case 'ArrowRight':
      carImage.className = 'east';
      racecar.direction = 'east';
      break;
    default:
      break;
  }
});

document.addEventListener('keydown', event => {
  if (event.key === ' ') {
    racecar.engineOn = !racecar.engineOn;
    if (racecar.engineOn) {
      racecar.intervalID = setInterval(() => {
        let newXCoordinate = parseInt(carImage.style.left.slice(0, -2)) + 5;
        carImage.style.left = newXCoordinate + 'px';
        racecar.location.x = carImage.style.left;
      }, 16)
    } else {
      clearInterval(racecar.intervalID);
    }
  }
})
