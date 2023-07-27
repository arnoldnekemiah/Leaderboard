import './style.css';
import { refresh, sendData } from './modules/util.js';

document.addEventListener('DOMContentLoaded', () => {
  refresh();
  const submitButton = document.querySelector('.submit');
  const refreshButton = document.querySelector('.refresh-btn');

  // Handle refresh click event
  refreshButton.addEventListener('click', () => {
    refresh();
  });

  // Handle submit button click event
  submitButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const userInput = document.querySelector('.name');
    const scoreInput = document.querySelector('.score');
    const user = userInput.value;
    const score = parseInt(scoreInput.value, 10);
    // wait for sendData to finish before refreshing
    await sendData(user, score);
    userInput.value = '';
    scoreInput.value = '';
  });
});