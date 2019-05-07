import axios from 'axios'



// create an axios instance
const service = axios.create({
  baseURL: process.env.API_ROOT, // api 的 base_url
  timeout: 5000 // request timeout
})

export default service
