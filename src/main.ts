import {createApp} from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import router from "./route";
import 'ant-design-vue/dist/reset.css';

const app = createApp(App)
app.use(router).use(Antd).mount('#app').$nextTick(() => postMessage({payload: 'removeLoading'}, '*'))
