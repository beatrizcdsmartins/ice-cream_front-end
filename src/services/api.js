import axios from 'axios'

const apiCodeIce = axios.create({
  baseURL: 'https://apiice-cream-production.up.railway.app/'
})

apiCodeIce.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('codeburger:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.authorization = `Bearer ${token}`
  return config
})
export default apiCodeIce
