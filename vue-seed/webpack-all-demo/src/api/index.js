
import axios from 'axios'

const API = {
  fetchHomeData() {
    let URL = '../data/home.json';
    return  axios.get(URL);  
  }
}

export default API;