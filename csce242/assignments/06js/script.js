//  MENU TOGGLE (mobile)
const menuToggle = document.getElementById('menuToggle');
const menuItems = document.getElementById('menuItems');

menuToggle.addEventListener('click', () => {
  const isOpen = menuItems.classList.toggle('open');
  menuToggle.classList.toggle('open', isOpen);
  menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

//  SECTION SWITCHING 
const exercise1 = document.getElementById('exercise1');
const exercise2 = document.getElementById('exercise2');
const navEx1 = document.getElementById('navEx1');
const navEx2 = document.getElementById('navEx2');

function showExercise1() {
  exercise1.classList.remove('hidden');
  exercise2.classList.add('hidden');
}

function showExercise2() {
  exercise2.classList.remove('hidden');
  exercise1.classList.add('hidden');
  calculateDaysLeft();
}

navEx1.addEventListener('click', (e) => {
  e.preventDefault();
  showExercise1();
});

navEx2.addEventListener('click', (e) => {
  e.preventDefault();
  showExercise2();
});

// EXERCISE 1: MISSING CLASS DEDUCTIONS
const TOTAL_CLASSES = 25;
const ATTENDANCE_WORTH = 7; // percent of overall grade

const daysMissedInput = document.getElementById('daysMissed');
const deductionResult = document.getElementById('deductionResult');
const deductionMessage = document.getElementById('deductionMessage');

function calculateDeduction() {
  const daysMissed = parseInt(daysMissedInput.value, 10);

  if (isNaN(daysMissed) || daysMissed < 0) {
    deductionResult.textContent = '';
    deductionMessage.textContent = '';
    return;
  }

  const percentLost = (daysMissed / TOTAL_CLASSES) * ATTENDANCE_WORTH;
  deductionResult.innerHTML = 'You will lose <strong>' + percentLost.toFixed(1) + '%</strong> for skipping ' + daysMissed + ' day' + (daysMissed === 1 ? '' : 's') + '.';

  let message;
  if (daysMissed === 0) {
    message = "Perfect attendance! Your future self says thank you.";
  } else if (daysMissed <= 2) {
    message = "Not bad at all, just make sure you catch up on notes.";
  } else if (daysMissed <= 5) {
    message = "That's starting to add up, try not to miss too many more.";
  } else if (daysMissed <= 10) {
    message = "This is not an online class, you are missing valuable learning oportunities.";
  } else if (daysMissed <= 15) {
    message = "That is a serious amount of missed class time, your grade will really take a hit.";
  } else {
    message = "At this point you should talk to your professor about whether you can still pass.";
  }

  deductionMessage.textContent = message;
}

daysMissedInput.addEventListener('input', calculateDeduction);

// ---------------- EXERCISE 2: END OF SEMESTER COUNTER ----------------
const daysLeftResult = document.getElementById('daysLeftResult');
const daysLeftMessage = document.getElementById('daysLeftMessage');

function calculateDaysLeft() {
  const today = new Date();
  let lastDay = new Date(today.getFullYear(), 11, 4); // December 4th

  if (today > lastDay) {
    lastDay = new Date(today.getFullYear() + 1, 11, 4);
  }

  const msPerDay = 1000 * 60 * 60 * 24;
  const daysLeft = Math.ceil((lastDay - today) / msPerDay);

  daysLeftResult.innerHTML = 'You have <strong>' + daysLeft + '</strong> days left in the semester';

  let message;
  if (daysLeft > 150) {
    message = "Not time to start counting down yet.";
  } else if (daysLeft > 100) {
    message = "The semester just started, settle in.";
  } else if (daysLeft > 30) {
    message = "The end is in sight, keep up the momentum!";
  } else if (daysLeft > 7) {
    message = "Almost there, finish strong!";
  } else if (daysLeft > 0) {
    message = "So close you can taste summer break!";
  } else {
    message = "The semester is over, congratulations!";
  }

  daysLeftMessage.textContent = message;
}

// Initialize
calculateDeduction();