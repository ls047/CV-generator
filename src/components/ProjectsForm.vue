<template>

    <div class="mt-10 flex w-full flex-col overflow-x-hidden">
        <h2 class="self-center">Projects section </h2>
        <ul>
        <li v-for="project in projects" :key="project.id">
            <div>{{ project.name }}</div>
            <div>{{ project.description }}</div>
            <div>{{ project.duration }}</div>
            <div>{{ project.technologies }}</div>
            <div>{{ project.details }}</div>
        </li>
        </ul>
        
        <a-button class="w-28 self-center" v-if="!showForm" @click="toggleForm" type="primary" primary>add project</a-button>
        
        <form class="flex items-center justify-center flex-col" v-if="showForm" @submit.prevent="addProject">
            <a-input class="m-2 p-2" v-model:value="newProject.name" placeholder="Basic usage" />
            <a-input class="m-2 p-2 " v-model:value="newProject.description" placeholder="Basic usage" />
            <a-input class="m-2 p-2 " v-model:value="newProject.duration" placeholder="Basic usage" />
            <a-input class="m-2 p-2 " v-model:value="newProject.technologies" placeholder="Basic usage" />
            <a-textarea class="m-2 p-2 " v-model:value="value" placeholder="Basic usage" :rows="4" />
            <a-button class="ml-2 self-center" type="primary" html-type="submit" primary>Done!</a-button>
        </form>
    </div>
</template>

    <script setup>
    import { ref } from 'vue';

    const projects = ref([
    // Existing projects data
    ]);

    const showForm = ref(false);

    const newProject = ref({
    name: '',
    description: '',
    duration: '',
    technologies: '',
    details: ''
    });

    const toggleForm = () => {
    showForm.value = !showForm.value;

    };

    const addProject = () => {
    projects.value.push({ ...newProject.value, id: projects.value.length + 1 });
    newProject.value = {
        name: '',
        description: '',
        duration: '',
        technologies: '',
        details: ''
    };
    showForm.value = false;
    };

</script>

