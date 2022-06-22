import axios from 'axios'

const instance = axios.create({
    apiURL: process.env.VUE_APP_URL_API
})

export default instance;