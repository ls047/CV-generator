<template>
    <div class="mt-10 flex w-full flex-col overflow-x-hidden">
        <h class="self-center ">here's the certification section</h><br>
        <div class="flex w-full mt-8 ml-2">
            <h3 class="w-40">certification name :</h3>
            <a-input class="mr-2 -mt-2" v-model:value="value" placeholder="the name of your certification" />
            
        </div>
        <div class="flex w-full mt-8 ml-2">
            <h3 class="w-44">issuing organization :</h3>
                <a-input class="mr-2 -mt-2" v-model:value="value" placeholder="the name of the issuing organization" />
        </div>
        <div class="flex w-full mt-8 ml-2">
            <h3 class="w-44">date obtained :</h3>
            <a-date-picker class="mr-2 -mt-2" v-model:value="value1" :format="dateFormat" />
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>