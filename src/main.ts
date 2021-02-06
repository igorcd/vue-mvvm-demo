import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import alert from '@/plugins/alert';

const app = createApp(App);
app.use(alert);

app.use(router);

app.mount('#app');
