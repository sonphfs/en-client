import axios from 'axios'

// create an axios instance
const service = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    baseURL: 'http://127.0.0.1:8001/api/v1',
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})

export default service