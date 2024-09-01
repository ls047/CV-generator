import './assets/main.css'
import 'ant-design-vue/dist/reset.css';

import { createApp } from 'vue'
import App from './App.vue'
import { DatePicker } from 'ant-design-vue';


//the components that beeing to imported in this project

import CertificationsForm from './components/CertificationsForm.vue';
import Certificate from './components/ProjectsForm.vue';



const app= createApp(App).mount('#app')
app.use(DatePicker);

export default {
    components: {
        CertificationsForm,
        Certificate,
    }
}