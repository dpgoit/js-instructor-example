import API from './api.js';

const form = document.getElementById('form');

form.addEventListener('submit', onSubmit);

async function onSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const inputValue = form.elements.news.value;

  try {
    const articles = await API.getNews(inputValue);

    if (articles.length === 0) throw new Error('No data');

    const markup = articles.reduce((markup, article) => createMarkup(article) + markup, '');

    updateNewsList(markup);
  } catch (error) {
    onError(error);
  } finally {
    form.reset();
  }
}

// webformatURL - un link către imaginea mică.
// largeImageURL - un link către imaginea mare.
// tags - un text care descrie imaginea. Potrivit pentru atribut alt.
// likes - numărul de like-uri.
// views - numărul de vizualizări.
// comments - numărul de comentarii.
// downloads - numărul de descărcări.
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

function updateNewsList(markup) {
  document.getElementById('articlesWrapper').innerHTML = markup;
}

function onError(err) {
  console.error(err);
  updateNewsList('<p>Articles not found</p>');
  Notiflix.Notify.warning(err);
}

// TEMA
//! - important este sa impartim fiecare task in functii diferite
//? - o functie care cere imagini (cel mai bine este sa facem o clasa care sa contina toate astea) - / poate si reset,get queyr, setQuery (adica ce cauti)
// async function fetchImages() {
//   const response = await axios.get(`${this.BASE_URL}${this.API_KEY}`, {
//       params: {
//           q: this.searchQuery,
//           image_type: 'photo',
//           orientation: 'horizontal',
//           safesearch: true,
//           page: this.page,
//           per_page: this.per_page
//       }
//   });

//   return response.data;
// }

//? - o functie care introduce textul in html (deja avem sintaxa) - exista doua monduri prin care poti introduce html din javascript in html clasic
//? - poate o clasa load? similar cu ce am facut deja
//? - functie de search care ia data din html
//? - functie lazyload
//? - functie simpleLightBox
//? - functii de clear ?
