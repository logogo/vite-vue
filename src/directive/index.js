/**
全局注册指令
*/
const modules = import.meta.globEager('../directive/*/*.js');

export default {
    install: function(app) {
        for (let key in modules) {
            const item = modules[key].default;
            const startStrIndex = key.indexOf('./');
            const endStrIndex = key.lastIndexOf('/');
            key = key.substring(startStrIndex + 2, endStrIndex);
            app.directive(item.name || key, item);
        }
    }
};
