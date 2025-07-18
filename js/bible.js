fetch('bible.json')
  .then(r => r.json())
  .then(bible => {
    const bookSelect = document.getElementById('bookSelect');
    const chapterSelect = document.getElementById('chapterSelect');
    const bibleText = document.getElementById('bibleText');

    for (let book in bible) {
      let opt = document.createElement('option');
      opt.value = book;
      opt.textContent = book;
      bookSelect.appendChild(opt);
    }

    bookSelect.addEventListener('change', () => {
      chapterSelect.innerHTML = '<option disabled selected>Выберите главу</option>';
      const chapters = bible[bookSelect.value];
      for (let ch in chapters) {
        let opt = document.createElement('option');
        opt.value = ch;
        opt.textContent = ch;
        chapterSelect.appendChild(opt);
      }
    });

    chapterSelect.addEventListener('change', () => {
      const verses = bible[bookSelect.value][chapterSelect.value];
      bibleText.innerHTML = `<h3>${bookSelect.value} ${chapterSelect.value}</h3>`;
      for (let num in verses) {
        bibleText.innerHTML += `<p><b>${num}</b> ${verses[num]}</p>`;
      }
    });
  })
  .catch(err => console.error('Ошибка загрузки:', err));
