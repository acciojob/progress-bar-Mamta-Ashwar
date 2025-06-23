const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

function update() {
  // Update active circles
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  // Update progress width: fill percentage between first and last circle
  const activeCount = currentActive - 1;
  const totalSteps = circles.length - 1;
  const progressWidthPercent = (activeCount / totalSteps) * 100;
  progress.style.width = progressWidthPercent + '%';

  // Enable/disable buttons
  prev.disabled = currentActive === 1;
  next.disabled = currentActive === circles.length;
}

next.addEventListener('click', () => {
  if (currentActive < circles.length) {
    currentActive++;
    update();
  }
});

prev.addEventListener('click', () => {
  if (currentActive > 1) {
    currentActive--;
    update();
  }
});

// Initialize state
update();
