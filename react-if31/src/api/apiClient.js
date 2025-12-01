import axios from "axios";

const http = axios.create({
    baseURL:"https://if31flask-python-angky-production.up.railway.app/api",
    headers :{
        Accept : "application/json"

    }
})

http.interceptors.request.use(
    (config)=>{
        const token = sessionStorage.getItem("token - bebas")
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }

    
    
)
export default http