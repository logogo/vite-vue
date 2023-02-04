import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import components from '@/components/index';
import directive from './directive/index';
import store from './store';
import './assets/main.less';

const app = createApp(App);
app.use(store).use(router).use(components).use(directive);

app.mount('#app');
