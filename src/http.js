import axios from 'axios'
import Message from 'element-ui'
import router from './router'

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://localhost:8080'

axios.interceptors.request.use(config => {
	//console.log(config)
	config.data.append('pcmn','3000-143-1')
	return config
}, error => {
	Message.error({
		message: '加载超时'
	})
	return Promise.reject(error)
})

// http response 拦截器
axios.interceptors.response.use(
  response => {
  	//console.log(response);
  	if(response.data.code == '211014'){
  		router.push({path:'/login'});
  	}
    return response
  },
  error => {
    if (error.response) {
		Message.error({
			message: '加载超时'
		})
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(error.response.data)
  },
)

export default axios