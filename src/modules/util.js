const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/';

// Fetches data using API
const getData = async () => {
  const res = await fetch(url); // fetch data from api
  const data = await res.json(); // change data format of json
  return data;
};

const refresh = async () => {
  const scoreContent = document.querySelector('.list-container');
  const data = await getData();
  const { result } = data;
  result.sort((a, b) => b.score - a.score);
  scoreContent.innerHTML = '';
  result.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'score-item';
    listItem.innerHTML = `<span>${item.user}</span> <span>${item.score}</span>`;
    listItem.style.background = index % 2 === 0 ? '#fff' : '#808080';
    scoreContent.appendChild(listItem);
  });
};

// let li = '';
//     li = `<li class= "score-item"><span class= "li-item">${item.user}</span><span class="li-item">${item.score}</span> </li>`;
//     scoreContent.innerHTML += li;

//  send username and score to th api
const sendData = async (user, score) => {
  const data = {
    user,
    score,
  };
  try {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    return error;
  }
  return null;
};

export { refresh, sendData };