<script setup>
import ProjectsForm from "./components/ProjectsForm.vue";
import personalInfo from "./components/personalInfo.vue";
import ExperienceInfo from "./components/ExperienceInfo.vue";
import EducationInfo from "./components/EducationInfo.vue";
import Miscellaneous from "./components/Miscellaneous.vue";
import preview from "./components/preview.vue";
</script>

<template>
  <div class="flex flex-col items-center justify-center w-full pb-24 ">
    <h1 class="text-xl text-slate-700 capitalize p-16 sm:text-3xl">enter your information</h1>
    <personalInfo/>
    <ProjectsForm/>
    <ExperienceInfo/>
    <EducationInfo/>
    <Miscellaneous/>


  </div>
  
</template>

<style scoped>
</style>
