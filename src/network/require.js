import axios from 'axios'

export function request(config){

  const instance = axios.create({
    // baseURL: 'http://112.125.89.181:8000/',
    baseURL: 'http://10.1.71.155:8000',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    return config
  },err => {

  })

  return instance(config)
}