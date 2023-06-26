import API from './api.js';

const form = document.getElementById('form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const inputValue = form.elements.news.value;
  API.getNews(inputValue)
    .then(res => {
      const { articles } = res;
      if (articles.length === 0) throw new Error('Nu exista nici un articol');

      return articles.reduce((markup, article) => {
        return createMarkup(article) + markup;
      }, '');
    })
    .then(markup => updateNewsList(markup))
    .catch(err => onError(err))
    .finally(() => form.reset());
}

function updateNewsList(markup) {
  document.getElementById('articlesWrapper').innerHTML = markup;
}

function createMarkup({ author, title, description, url, urlToImage }) {
  return `
    <div class="article-card">
      <h2 class="article-title">${title}</h2>
      <h3 class="article-author">${author || 'Anonym'}</h3>
      <img src=${urlToImage} class="article-img">
      <p class="article-description">${description}</p>
      <a href=${url} class="article-link" target="_blank">Read more</a>
    </div> 
    `;
}

function onError(err) {
  console.error(err);
}
