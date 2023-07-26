const displayStuff = () => {
  const list = [
    { name: 'Arnold', score: 80 },
    { name: 'Shetra', score: 50 },
    { name: 'Tongoi', score: 60 },
    { name: 'Allan', score: 90 },
    { name: 'Arthur', score: 70 },
    { name: 'Andrew', score: 50 },
  ];

  const container = document.querySelector('.list-container');
  list.forEach((Score, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.innerHTML = `<span>${Score.name}</span> <span>${Score.score}</span>`;
    listItem.style.background = index % 2 === 0 ? '#fff' : '#808080';
    container.appendChild(listItem);
  });
};

export default displayStuff;