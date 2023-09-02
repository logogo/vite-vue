import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import components from '@/components/index';
import directive from './directive/index';
import './assets/main.less';
// import logger from './arms';
const app = createApp(App);
import { createPinia } from 'pinia';
const pinia = createPinia();
app.use(pinia).use(router).use(components).use(directive);// .use(logger);

app.mount('#app');
