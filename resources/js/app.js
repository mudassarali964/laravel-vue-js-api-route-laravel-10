import './bootstrap';

import {createApp} from 'vue'
import router from './routes';
import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './components/App.vue'

const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')

