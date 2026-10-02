const yearFilter = document.querySelector('#ano');
const results = [...document.querySelectorAll('.result')];
yearFilter.addEventListener('change', () => {
  let count = 0;
  for (const result of results) {
    result.hidden = yearFilter.value !== 'todos' && result.dataset.year !== yearFilter.value;
    if (!result.hidden) count++;
  }
  document.querySelector('#result-count').textContent = count + (count === 1 ? ' resultado' : ' resultados');
});

