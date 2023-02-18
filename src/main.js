import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import components from '@/components/index';
import directive from './directive/index';
import store from './store';
import './assets/main.less';
import logger from './arms';
const app = createApp(App);
app.use(store).use(router).use(components).use(directive)//.use(logger);

app.mount('#app');
