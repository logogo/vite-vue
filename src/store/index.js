import { createStore } from 'vuex';

const modules = import.meta.globEager('./modules/*.js');

const storeModule = {};

for (let key in modules) {
    const item = modules[key].default;
    const startStrIndex = key.indexOf('./modules');
    const endStrIndex = key.lastIndexOf('.js');
    key = key.substring((startStrIndex + 10), endStrIndex);
    storeModule[key] = item;
}

const store = createStore({
    modules: storeModule
});

export default store;

