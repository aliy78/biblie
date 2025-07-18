fetch('biblie.json') // Или 'data/biblie.json', если файл в папке data
  .then(response => response.json())
  .then(data => {
    const bibleContent = document.getElementById('bible-content');
    let html = '';

    data.Books.forEach(book => { // Изменено: data.books -> data.Books
      html += `<h3>${book.BookId}</h3>`; // можно добавить ${book.BookId} ${book.Translation}
      book.Chapters.forEach(chapter => { // Изменено: book.chapters -> book.Chapters
        html += `<h4>Глава ${chapter.ChapterId}</h4>`; // Изменено: chapter.number -> chapter.ChapterId
        chapter.Verses.forEach(verse => { // Изменено: chapter.verses -> chapter.Verses
          html += `<p><sup>${verse.VerseId}</sup> ${verse.Text}</p>`; // Изменено: verse.Text -> verse.Text, index -> verse.VerseId
        });
      });
    });

    bibleContent.innerHTML = html;
  })
  .catch(error => console.error('Ошибка загрузки Библии:', error));
