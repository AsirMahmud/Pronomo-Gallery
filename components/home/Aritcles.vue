<script setup>

</script>

<template>
    <div class="flex flex-col gap-8 bg-gradient-to-r from-[#FDF9F8] to-[#F4F7FE] p-4">
        <div class="w-full text-center flex flex-col gap-4">
            <h1>Our Most popular articales</h1>
            <p class="w-[40%] mx-auto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam maxime nostrum
                cupiditate
                velit optio
                obcaecati cumque, consectetur aliquam explicabo eaque!</p>


        </div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 place-items-center">
            <HomeCard v-for="i in 9" key="i"></HomeCard>

        </div>
    </div>
</template>