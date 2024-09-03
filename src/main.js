import './assets/main.css'
import 'ant-design-vue/dist/reset.css';
import { createApp } from 'vue'
import App from './App.vue'
import { DatePicker } from 'ant-design-vue';



//the components that beeing to imported in this project

import ProjectsForm from "./components/ProjectsForm.vue";
import personalInfo from "./components/personalInfo.vue";
import ExperienceInfo from "./components/ExperienceInfo.vue";
import EducationInfo from "./components/EducationInfo.vue";
import Miscellaneous from "./components/Miscellaneous.vue";
import preview from "./components/preview.vue";


const app= createApp(App).mount('#app')
app.use(DatePicker);

export default {
    components: {
        ProjectsForm,
        personalInfo,
        ExperienceInfo,
        EducationInfo,
        Miscellaneous,
        preview,
    }
}