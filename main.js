
let carImage = document.querySelector('img');

let racecar = {
  direction: 'east',
  location: {
    x: carImage.style.left,
    y: carImage.style.top,
  }
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
})
