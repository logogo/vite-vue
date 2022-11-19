/**
 * api接口的统一出口
 * 自动读取接口文件并原样输出
 */

 const modulesFiles = import.meta.globEager('../api/*.js');
 const apiFilter = Object.keys(modulesFiles).filter(item => item !== '../api/index.js');
 const modules = apiFilter.reduce((modules, modulePath) => {
     const value = modulesFiles[modulePath];
     const name = modulePath.replace('../api/', '').replace('.js', '');
     modules[name] = value.default;
     return modules;
 }, {});
 
 // 导出接口
 export default modules;
 
 // 在组件中用法 this.$api.user.login调登录接口