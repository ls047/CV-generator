<template>
    <div class="flex flex-col w-4/5 items-center justify-center capitalize bg-slate-50 pb-24 pt-[6rem]">
      <header class="text-3xl">miscellaneous</header>
      <!-- Languages Section -->
      <div class="flex flex-col mt-8 ml-2 w-4/5 self-center">
        <div class="mt-8 ml-2">
          <h3 class="w-40 mb-4 font-sans">Languages</h3>
          <div class="flex w-full gap-4 items-center">
            <a-input v-model:value="inputLanguages" class="rounded-none" placeholder="Enter your Language" maxlength="16" />
            <a-button class="px-6 text-center" @click="addLanguage">+</a-button>
          </div>
          <div v-for="(language, index) in languages" :key="index" class="flex flex-row w-4/5 self-center gap-2 mt-2 flex-wrap">
            <a-tag closable @close="log">{{ language }}</a-tag>
            
          </div>
        </div>
      </div>
  
      <!-- Achievements Section -->
      <div class="flex flex-col mt-8 ml-2 w-4/5 self-center">
        <div class="mt-8 ml-2">
          <h3 class="w-40 mb-4 font-sans">Achievements</h3>
          <div class="flex w-full gap-4 items-center">
            <a-input v-model:value="inputAchievements" class="rounded-none" placeholder="Enter your achievement" maxlength="30" />
            <a-button class="px-6 text-center" @click="addAchievement">+</a-button>
          </div>
          <div v-for="(achievement, index) in achievements" :key="index" class="flex flex-row w-4/5 self-center gap-2 mt-2 flex-wrap">
            <a-tag closable @close="log">{{ achievement }}</a-tag>
            
          </div>
        </div>
      </div>
  
      <!-- Certificates Section -->
      <div class="flex flex-col mt-8 ml-2 w-4/5 self-center">
        <div class="mt-8 ml-2">
          <h3 class="w-40 mb-4 font-sans">Certificates</h3>
          <div class="flex w-full gap-4 items-center">
            <a-input v-model:value="inputCertificates" class="rounded-none" placeholder="Enter your certificate" maxlength="30" />
            <a-button class="px-6 text-center" @click="addCertificate">+</a-button>
          </div>
          <div v-for="(certificate, index) in certificates" :key="index" class="flex flex-row w-4/5 self-center gap-2 mt-2 flex-wrap">
            <a-tag closable @close="log">{{ certificate }}</a-tag>
           
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const inputLanguages = ref('');
  const inputAchievements = ref('');
  const inputCertificates = ref('');
  
  const languages = ref([]);
  const achievements = ref([]);
  const certificates = ref([]);
  
  function addLanguage() {
    if (inputLanguages.value.trim()) {
      languages.value.push(inputLanguages.value.trim());
      inputLanguages.value = '';
    }
  }
  

  
  function addAchievement() {
    if (inputAchievements.value.trim()) {
      achievements.value.push(inputAchievements.value.trim());
      inputAchievements.value = '';
    }
  }
  
  function removeAchievement(index) {
    achievements.value.splice(index, 1);
  }
  
  function addCertificate() {
    if (inputCertificates.value.trim()) {
      certificates.value.push(inputCertificates.value.trim());
      inputCertificates.value = '';
    }
  }
  
  function removeCertificate(index) {
    certificates.value.splice(index, 1);
  }
  </script>
  