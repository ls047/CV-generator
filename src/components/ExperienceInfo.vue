    <template>
        <div class="flex flex-col w-4/5 items-center justify-center capitalize bg-slate-50">
          <header class="text-3xl">experience info</header>
            <div v-for="(experience, index) in experiences" :key="index" class="w-4/5 self-center">
            <div  class="w-full flex-row sm:flex mb-8">
                <div class="mt-8 ml-2 w-3/4 sm:w-1/3">
                <h3 class="w-40 mb-4 font-sans">Organization</h3>
                <a-input v-model="experience.organization" class="mr-2 -mt-2 rounded-none" placeholder="Organization Name" />
                </div>
                <div class="mt-8 ml-2 w-3/4 sm:w-1/3">
                <h3 class="w-40 mb-4 font-sans">Position</h3>
                <a-input v-model="experience.position" class="mr-2 -mt-2 rounded-none" placeholder="Position" />
                </div>
                <div class="mt-8 ml-2 w-3/4 sm:w-1/3">
                <h3 class="w-40 mb-4 font-sans">Duration</h3>
                <a-range-picker class="mr-2 -mt-2 rounded-none" v-model:value="experience.duration" picker="month" />
            
                </div>
            </div>
            <div class="mt-8 ml-2 w-11/12">
                <h3 class="w-40 mb-4 font-sans">discription</h3>
                <a-input v-model="experiences[0].company" class="mr-2 -mt-2 rounded-none" placeholder="experience discription" />
                <a-button v-if="index > 0"
                    @click="removeExperience(index)" class="mt-4 text-lg px-5 text-center"  type="primary" danger>close</a-button>
            </div>
            
            </div>
            <button @click="addExperience" class="mt-4 p-2 bg-blue-500 text-white rounded">Add Another Experience</button>
        </div>
    </template>
    
    <script setup>
    import { ref } from 'vue';

    const experiences = ref([
      {
        organization: '',
        position: '',
        duration: null,
        company: '',
      },
    ]);
    
    // Function to add a new experience to the array
    const addExperience = () => {
      experiences.value.push({
        organization: '',
        position: '',
        duration: null,
        company: '',
      });
    };
    
    // Function to remove an experience from the array
    const removeExperience = (index) => {
      experiences.value.splice(index, 1);
    };
    </script>
    
    <style scoped>
    </style>
    