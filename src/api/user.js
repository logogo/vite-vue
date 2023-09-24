import axios from '@/utils/axios';

const user = {
    // 获取课程一级分类
    getUser(data) {
        return axios({
            url: 'http://localhost:80/getData',
            method: 'post',
            data
        });
    }
};

export default user;
