import axios from 'axios'

const NewsService = {
  async index() {
    let result = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=b1a8b08774954983921d0e23d3017ecf`)
    return result.data.articles;
  },

  async search(query) {
    let result = await axios.get(`https://newsapi.org/v2/top-headlines?country=${query}us&apiKey=b1a8b08774954983921d0e23d3017ecf`)
    return result.data.articles;
  }
}

export default NewsService