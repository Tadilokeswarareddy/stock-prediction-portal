
import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_BASE_API
const axiosInstance = axios.create({
    baseURL: baseURL,
    headers:{
        'Content-Type':'application/json',
    }
})

//request interceptor
axiosInstance.interceptors.request.use(
    function(config){
        const accessToken = localStorage.getItem('accesstoken')
        if(accessToken){
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }
        return config;
    },
    function (error){
        return Promise.reject(error)

    }
    
)

// response interceptor
axiosInstance.interceptors.response.use(
    function(response){
        return response
    },
    async function(error){
        const originalRequest = error.config;
        if(error.response.status === 401 && !originalRequest.retry){
            originalRequest.retry = true;
            const refreshToken = localStorage.getItem('refreshtoken')
            try{
                const response = await axiosInstance.post('/token/refresh/',{refresh: refreshToken})
                localStorage.setItem('accesstoken',response.data.access)
                originalRequest.headers['Authorization'] = `Bearer ${response.data.access}`
                return axiosInstance(originalRequest)

            }catch(error){
                localStorage.removeItem('accesstoken')
                localStorage.removeItem('refreshtoken')
                
            }

        }
        return Promise.reject(error)
    }
)



export default axiosInstance;