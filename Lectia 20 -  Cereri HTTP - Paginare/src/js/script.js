// import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';

// import NewsApi from './api';

// fetchNews();
// // ? 1. Adaugam axios
// // ? 2. adaugam paginare
// // ? 3. adaugam clase pt api si paginare

// const form = document.getElementById('form');

// const loadMoreBtn = new LoadMoreBtn({
//   selector: '#loadMoreBtn',
//   isHidden: true,
// });

// const newsApi = new NewsApi(); // * eventListener care adauga articole
// form.addEventListener('submit', onSubmit);
// loadMoreBtn.button.addEventListener('click', fetchNews);

// // * functie care apeleaza api
// function onSubmit(event) {
//   event.preventDefault();
//   const form = event.currentTarget;
//   const inputValue = form.elements.news.value;
//   newsApi.searchQuery = inputValue;
//   loadMoreBtn.show();
//   fetchNews().finally(() => form.reset());
// }

// function fetchNews() {
//   loadMoreBtn.disable();
//   return newsApi
//     .getNews()
//     .then(res => {
//       const { articles } = res;
//       if (articles.length === 0) throw new Error('Nu exista nici un articol');

//       return articles.reduce((markup, article) => {
//         return createMarkup(article) + markup;
//       }, '');
//     })
//     .then(markup => {
//       updateNewsList(markup);
//       loadMoreBtn.enable();
//     })
//     .catch(err => onError(err));
// }

// // * functie care creeaza html ce urmeaza sa fie introdus in pagina
// function createMarkup({ author, title, description, url, urlToImage }) {
//   return `
//         <div class="article-card">
//             <img src=${urlToImage} class="article-img">
//             <h2 class="article-title">${title}</h2>
//             <h3 class="article-author">${author || 'Anonym'}</h3>
//             <p class="article-description">${description}</p>
//             <a href=${url} class="article-link" target="_blank">Read more</a>
//         </div>

//         `;
// }

// // * functie ce introduce html in pagina
// function updateNewsList(markup) {
//   document
//     .getElementById('articlesWrapper')
//     .insertAdjacentHTML('beforeend', markup);
// }

// // * functie error
// function onError(err) {
//   console.error(err);
//   updateNewsList('<p>Articles not found</p>');
// }

//TEMA
// API KEY PE MAIL
/*
const api_key_cats =
  'live_RymLoVaN8NBPQgOOP7tTg2Py2YI44MYt8YCBz5GMDK41QjRR7lTyXQKzDSJevrwv';

  Use it as the 'x-api-key' header when making any request to the API, or by adding as a query string parameter e.g. 
  'api_key=live_RymLoVaN8NBPQgOOP7tTg2Py2YI44MYt8YCBz5GMDK41QjRR7lTyXQKzDSJevrwv'
  */

// 1. Select all la tot ce am nevoie
// 2. O functie care populeaza selectul
// 3. un event cu o functie care afiseaza data si face request catre server cand apasa pe ceva
// 4. acel ceva o sa genereze data pe care trebuie sa le introduc in html
