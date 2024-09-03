    <template>
        <div class="flex flex-col w-4/5 items-center justify-center capitalize bg-slate-50">
            <header class="text-3xl pt-3">personal info</header>
        <!-- Input Fields for User Information -->
        <div class="grid mt-8 ml-2 w-4/5 grid-cols-1 sm:grid-cols-3 self-center gap-11 sm:gap-4">
            <div class="mt-8 ml-2">
            <h3 class="w-40 mb-4 font-sans">Name</h3>
            <a-input v-model="name" class="mr-2 -mt-2 rounded-none" placeholder="Your name" />
            </div>
            <div class="mt-8 ml-2">
            <h3 class="w-40 mb-4 font-sans">Email</h3>
            <a-input v-model="email" class="mr-2 -mt-2 rounded-none" placeholder="Your Email" />
            </div>
            <div class="mt-8 ml-2">
            <h3 class="w-40 mb-4 font-sans">Phone Number</h3>
            <a-input v-model="phone" class="mr-2 -mt-2 rounded-none" placeholder="Your Phone" />
            </div>
            <div class="mt-8 ml-2">
            <h3 class="w-40 mb-4 font-sans">Street</h3>
            <a-input v-model="street" class="mr-2 -mt-2 rounded-none" placeholder="Your street" />
            </div>
            <div class="mt-8 ml-2">
            <h3 class="w-40 mb-4 font-sans">City</h3>
            <a-input v-model="city" class="mr-2 -mt-2 rounded-none" placeholder="Your city" />
            </div>
            <div class="mt-8 ml-2">
            <h3 class="w-40 mb-4 font-sans">Country</h3>
            <a-input v-model="country" class="mr-2 -mt-2 rounded-none" placeholder="Your country" />
            </div>
        </div>
    
        <!-- Social Media Inputs -->
        <div class="grid mt-8 ml-2 w-4/5 grid-cols-1 sm:grid-cols-2 self-center gap-11">
            <div class="mt-8 ml-2">
            <h3 class="w-40 mb-4 font-sans">Linkedin</h3>
            <a-input v-model="linkedin" class="mr-2 -mt-2 rounded-none" placeholder="Your Linkedin" />
            </div>
            <div class="mt-8 ml-2">
            <h3 class="w-40 mb-4 font-sans">Github</h3>
            <a-input v-model="github" class="mr-2 -mt-2 rounded-none" placeholder="Your Github" />
            </div>
        </div>
    
        <!-- Position Input -->
        <div class="grid mt-8 ml-2 w-4/5 grid-cols-1 self-center gap-11">
            <div class="mt-8 ml-2">
            <h3 class="w-40 mb-4 font-sans">Position</h3>
            <a-input v-model="position" class="mr-2 -mt-2 rounded-none" placeholder="e.g front-end developer" />
            </div>
        </div>
    
        <!-- Skills Input and Display -->
        <div class="flex flex-col mt-8 ml-2 w-4/5 self-center">
            <div class="mt-8 ml-2">
            <h3 class="w-40 mb-4 font-sans">Skills</h3>
            <div class="flex w-full gap-4 items-center">
                <a-input v-model:value="input_skills" class="rounded-none" placeholder="Enter your skill" maxlength="10" />
                <a-button class="px-6 text-center" @click="addSkill">+</a-button>
            </div>
            <div v-for="(skill, index) in skills" :key="index" class="flex flex-row w-4/5 self-center gap-2 mt-2 flex-wrap">
                <a-tag closable @close="log">{{ skill }}</a-tag>



</div>
            
            </div>
            
        </div>
        <a-form-item>
        </a-form-item>
    
        </div>
    </template>

    <script setup>
    import { ref } from 'vue';
    import { message } from 'ant-design-vue'; // Import message for notifications



    // State variables for user information
    const name = ref('');
    const email = ref('');
    const phone = ref('');
    const street = ref('');
    const city = ref('');
    const country = ref('');
    const linkedin = ref('');
    const github = ref('');
    const position = ref('');

    // State variables for skills
    const input_skills = ref('');
    const skills = ref([]);

    // Function to add a skill to the skills list
    const addSkill = () => {
    if (input_skills.value.trim()) {
        skills.value.push(input_skills.value.trim());
        input_skills.value = ''; // Clear the input after adding
    } else {
        message.warning('Please enter a skill');
    }
    };

    // Function to remove a skill from the list



</script>
