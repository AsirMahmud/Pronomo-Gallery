<script setup>

</script>

<template>
    <div class="flex flex-col gap-8 bg-gradient-to-t from-[#FDF9F8] to-[#F4F7FE] p-4">
        <div class="max-w-[1240px] mx-auto flex flex-col gap-8 ">
            <div class="w-full text-center flex flex-col gap-4">
                <h1>Our Most popular articales</h1>
                <p class="w-[40%] mx-auto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam maxime nostrum
                    cupiditate
                    velit optio
                    obcaecati cumque, consectetur aliquam explicabo eaque!</p>


            </div>
            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 place-items-center">
                <NuxtLink v-for="i in 9" to="/blog">
                    <HomeCard key="i"></HomeCard>

                </NuxtLink>
            </div>

        </div>
    </div>
</template>