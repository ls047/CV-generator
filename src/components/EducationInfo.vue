<template>
  <div class="flex flex-col w-4/5 items-center justify-center capitalize bg-slate-50 p-10">
    <header class="text-3xl">education info</header>
    <div 
      class="sm:ml-[12rem] self-center w-full" 
      v-for="(education, index) in educations" 
      :key="index"
    >
      <div class="grid mt-8 ml-2 w-4/5 grid-cols-1 sm:grid-cols-3 self-center gap-11 sm:gap-4">
        <div class="mt-8 ml-2">
          <h3 class="w-40 mb-4 font-sans">College</h3>
          <a-input 
            v-model="education.name" 
            class="mr-2 -mt-2 rounded-none" 
            placeholder="Your name" 
          />
        </div>
        <div class="mt-6 ml-2">
          <h3 class="w-40 mb-4 font-sans">Year</h3>
          <a-range-picker 
            v-model:value="education.value4" 
            picker="month" 
            class="rounded-none" 
          />
        </div>
        <div class="mt-8 ml-2">
          <h3 class="w-40 mb-4 font-sans">Qualification</h3>
          <a-input 
            v-model="education.qualification" 
            class="mr-2 -mt-2 rounded-none" 
            placeholder="Your qualification" 
          />
        </div>
      </div>
      <div class="w-4/5 mt-8 ml-2">
        <h3 class="w-40 mb-4 font-sans">Description</h3>
        <a-input 
          v-model="education.description" 
          class="mr-2 -mt-2 rounded-none" 
          placeholder="Your description" 
        />
      </div>

      <!-- Conditionally render the remove button if education is newly added -->
      <button 
        v-if="education.isNew" 
        @click="removeEducation(index)" 
        class="mt-4 px-2 py-1 bg-red-500 text-white rounded"
      >
        Remove
      </button>
    </div>

    <button 
      @click="addEducation" 
      class="mt-8 px-4 py-2 bg-blue-500 text-white rounded"
    >
      Add Education
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const educations = ref([
  {
    name: '',
    value4: null,
    qualification: '',
    description: '',
    isNew: false, // existing entries won't have the close button
  },
]);

const addEducation = () => {
  educations.value.push({
    name: '',
    value4: null,
    qualification: '',
    description: '',
    isNew: true, // new entries will have the close button
  });
};

const removeEducation = (index) => {
  educations.value.splice(index, 1);
};
</script>
