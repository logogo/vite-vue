import axios from 'axios';

const instance = axios.create({
    baseURL: '', //import.meta.env.VITE_API
    timeout: 30000
});

axios.defaults.timeout = 30000;
axios.defaults.withCredentials = true;
document.cookie = '2222222';
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

instance.interceptors.request.use(config => {
    // 请求头把token带上
    config.headers.timestamp = parseInt(+new Date() / 1000, 10);
    console.log(config);
    return config;
},
error => {
    return Promise.reject(error);
}
);
instance.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response.data);
        }
    },
    error => {
        console.log(error);
    }
);

export default instance;
