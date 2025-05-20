const circleProgress = document.querySelector('.circle-progress');
const numberOfBreaths = document.querySelector('.breath-input');
const start = document.querySelector('.start');
const instructions = document.querySelector('.instructions');
const breathsText = document.querySelector('.breaths-text');
let breathsLeft = 3;

// Watching for selected breaths from user
numberOfBreaths.addEventListener('change', () => {
  breathsLeft = numberOfBreaths.value;
  breathsText.innerText = breathsLeft;
});

// Grow/Shrink Circle
const growCircle = () => {
  circleProgress.classList.add('circle-grow');
  setTimeout(() => {
    circleProgress.classList.remove('circle-grow');
  }, 8000);
};

// Breathing Instructions
const breathTextUpdate = () => {
  breathsLeft--;
  breathsText.innerText = breathsLeft;
  instructions.innerText = 'Breath in';
  setTimeout(() => {
    instructions.innerText = 'Hold Breath';
    setTimeout(() => {
      instructions.innerText = 'Exhale Breath Slowly';
    }, 4000);
  }, 4000);
};

// Breathing App Function
const breathingApp = () => {
  const breathingAnimtaion = setInterval(() => {
    if (breathsLeft === 0) {
      clearInterval(breathingAnimtaion);
      instructions.innerText =
        "Breathing session completed. Click 'Begin' to start another session!";
      start.classList.remove('button-inactive');
      breathsLeft = numberOfBreaths.value;
      breathsText.innerText = breathsLeft;
      return;
    }
    growCircle();
    breathTextUpdate();
  }, 12000);
};

const quotes = [
  'Be stronger than your strongest excuse.',
  'Don’t stop when you’re tired, stop when you’re done.',
  'Don’t wish for a good body, work for one.',
  'Don’t workout because you hate your body, workout because you love it.',
  'Exercise is a celebration of what your body can do.',
  'If you want something you’ve never had, you must be willing to do something you’ve never done.',
  'Nothing will work unless you do.',
  'Making excuses burns 0 calories.',
  'Someone busier than you is working out right now.',
  'Sore today, strong tomorrow.',
  'Sweat now so that you can glow and celebrate later.',
  'The body achieves what the mind believes.',
  'The hardest part of working out is starting.',
  'The only bad workout is the one that didn’t happen.',
  'The secret to a successful workout is showing up.',
  'You’re only one workout away from a good mood.',
  'Your body is not giving out, your mind is giving up.',
  'You’re far too smart to be the only thing standing in your way.',
  'Wake up with determination, go to bed with satisfaction.',
  'Train insane or remain the same.',
];

// Start Breathing
start.addEventListener('click', () => {
  start.classList.add('button-inactive');
  instructions.innerText = `“${
    quotes[Math.floor(Math.random() * quotes.length)]
  }”`;
  setTimeout(() => {
    instructions.innerText = 'Breathing is about to begin...';
    setTimeout(() => {
      breathingApp();
      growCircle();
      breathTextUpdate();
    }, 5000);
  }, 5000);
});
