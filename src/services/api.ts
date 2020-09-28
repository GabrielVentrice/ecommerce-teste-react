import axios from 'axios'

const api = axios.create({
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  },
  baseURL: 'https://corebiz-test.herokuapp.com/api/v1'
})

export default api
