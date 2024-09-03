<template>
    <div class="flex flex-col w-4/5 items-center justify-center capitalize bg-slate-50 ">
      <header class="text-3xl pb-16">projects info</header>
      <ul class="grid grid-cols-3">
        <li v-for="(project, index) in projects" :key="project.id" class="flex flex-col mb-4 p-4 border rounded-lg">
          <div><strong>Name:</strong> {{ project.name }}</div>
          <div><strong>Description:</strong> {{ project.description }}</div>
          <div><strong>Project Link:</strong> <a :href="project.projectLink" target="_blank">{{ project.projectLink }}</a></div>
          
          <a-button 
            class="mt-2 self-start bg-red-500 text-white rounded" 
            @click="removeProject(index)" 
            type="primary"
          >
            Remove
          </a-button>
        </li>
      </ul>
  
      <!-- Form for each project -->
      <div 
        v-for="(form, formIndex) in projectForms" 
        :key="formIndex" 
        class="flex items-center w-4/5 self-center justify-center flex-col mb-4" 
      >
        <form @submit.prevent="addProject(formIndex)" class="w-full">
          <div class="grid grid-cols-2 gap-5"> 
            <div>
                <div>
                    <label class="flex">title</label>
                    <a-input
                        class="m-2 p-2"
                        v-model:value="form.name"
                        placeholder="Project Name"
                      />
                </div>
                <div class="mt-4">
                    description
                      <a-input
                      class="m-2 p-2 sm:w-[54rem] w-[12rem]"
                      v-model:value="form.description"
                      placeholder="Project Description"
                    />
                </div>
            </div>
            <div>
                    <label >link</label>
                    <a-input
                      class="m-2 p-2"
                      v-model:value="form.projectLink"
                      placeholder="Project Link"
                    />
                </div>
                
            
          </div>
          
          <a-button 
            class="ml-2 self-center" 
            type="primary" 
            html-type="submit"
          >
            Add
          </a-button>
        </form>
      </div>
  
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Define the projects array
  const projects = ref([]);
  
  // Initialize project forms with one default form
  const projectForms = ref([
    {
      name: '',
      description: '',
      projectLink: '',
      technologies: '',
      details: '',
      submitted: false, // Track if the form has been submitted
    }
  ]);
  
  // Add a new project from a specific form
  const addProject = (formIndex) => {
    if (projectForms.value[formIndex]) {
      projects.value.push({ 
        ...projectForms.value[formIndex], 
        id: projects.value.length + 1 
      });
      
      // Mark the form as submitted to hide it
      projectForms.value[formIndex].submitted = true;
    }
  };
  
  // Remove a project by index
  const removeProject = (index) => {
    projects.value.splice(index, 1);
  };
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  