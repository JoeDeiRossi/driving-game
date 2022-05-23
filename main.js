
let racecar = {
  direction: 'east'
};

let carImage = document.querySelector('img');

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
