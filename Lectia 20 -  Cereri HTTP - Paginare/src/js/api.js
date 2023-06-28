const ENDPOINT = 'https://newsapi.org/v2/everything';
const API_KEY = 'dd82ff3604224bf1b224da3ef75c9135';

import axios from 'axios';

export default class NewsApi {
  constructor() {
    this.queryPage = 1;
    this.searchQuery = '';
  }

  getNews() {
    const url = `${ENDPOINT}?q=${this.searchQuery}&pageSize=5&page=${this.queryPage}`;

    const options = {
      headers: {
        'X-Api-Key': API_KEY,
      },
    };

    return axios.get(url, options).then(response => {
      this.incrementPage();
      return response.data;
    });
  }

  resetPage() {
    this.queryPage = 1;
  }

  incrementPage() {
    this.queryPage += 1;
  }
}
