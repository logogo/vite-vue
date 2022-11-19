/**
 * 新增加的组件在这个地方主动注册全局组件
 * 组件内需要增加一个那么，否则会使用文件的名字
 */
 const modules = import.meta.globEager('../components/*/*.vue');

 export default {
     install: function (Vue) {
         for (let key in modules) {
             const item = modules[key].default;
             const startStrIndex = key.indexOf('components/');
             const endStrIndex = key.lastIndexOf('/');
             key = key.substring(startStrIndex + 11, endStrIndex);
             Vue.component(item.name || key, item);
         }
     },
 };