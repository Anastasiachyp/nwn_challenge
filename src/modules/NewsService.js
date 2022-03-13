import axios from 'axios'

const NewsService = {
  async index() {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=se&apiKey=$(process.env.REACT_APP_NEWS_API_KEY`)
    return response.data.articles
  },

  async search(query) {

  }
}



export default NewsService