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
    },
    materialExportFile: data => { // 文件下载
        return axios({
            url: '/supply/product/material/v1/export',
            method: 'post',
            responseType: 'blob',
            data
        });
    },
    factoryImport: data => { // 文件上传
        return axios({
            url: '/supply/vendor/user/factory/v1/import',
            method: 'post',
            'Content-type': 'multipart/form-data',
            data
        });
    }
};

export default user;
