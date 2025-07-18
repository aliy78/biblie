fetch('test.json')
  .then(response => response.json())
  .then(data => {
    const bibleContent = document.getElementById('bible-content');
    bibleContent.innerHTML = `<p>${data.message}</p>`;
  })
  .catch(error => console.error('Ошибка загрузки:', error));
