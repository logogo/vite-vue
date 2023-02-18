import axios from '@/utils/axios';

const user = {
    // 获取课程一级分类
    getUser() {
        return axios({
            url: 'settings/general',
            method: 'get',
            params: {
                name: '12'
            }
        });
    }
};

export default user;
