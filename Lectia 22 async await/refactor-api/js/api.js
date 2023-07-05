const ENDPOINT = 'https://newsapi.org/v2/everything';
const API_KEY = 'dd82ff3604224bf1b224da3ef75c9135';

// function getNews(query) {
//   return fetch(`${ENDPOINT}?apiKey=${API_KEY}&q=${query}`)
//     .then((res) => res.json())
//     .then(({ articles }) => articles);
// }

// function getNews(query) {
//   return axios.get(`${ENDPOINT}?apiKey=${API_KEY}&q=${query}`).then(({ data }) => data.articles);
// }

async function getNews(query) {
  try {
    const response = await axios.get(`${ENDPOINT}?apiKey=${API_KEY}&q=${query}`);
    console.log(response.data.articles);
    return response.data.articles;
  } catch (error) {
    console.error;
  }
}

export default { getNews };
