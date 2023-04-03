import axios from '@/utils/axios';

const user = {
    // 获取课程一级分类
    getUser() {
        return axios({
            url: 'http://localhost:80/getData',
            method: 'get',
            params: {
                name: '12'
            }
        });
    }
};

export default user;
