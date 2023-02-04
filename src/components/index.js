/**
全局注册组件
*/
const modules = import.meta.globEager('../components/*/*.vue');

export default {
    install: function(app) {
        for (let key in modules) {
            const item = modules[key].default;
            const startStrIndex = key.indexOf('components/');
            const endStrIndex = key.lastIndexOf('/');
            key = key.substring(startStrIndex + 11, endStrIndex);
            app.component(item.name || key, item);
        }
    }
};
