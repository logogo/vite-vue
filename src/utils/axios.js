import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_API,
    timeout: 30000,
});

axios.defaults.timeout = 30000;

instance.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

instance.interceptors.request.use(config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)
instance.interceptors.response.use(
    response => {
        if(response.status === 200){
            return Promise.resolve(response.data);
        }
    },
    error => {
        console.log(error)
    }
)

export default instance;