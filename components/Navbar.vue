<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
const value1 = ref(null);
</script>

<template>
    <nav class="max-w-[1440px] w-full mx-auto flex justify-between items-center">
        <section>
            <p class="text-2xl font-bold">Logo</p>
        </section>
        <section class="rounded-full bg-white px-8 p-1 border flex gap-4">
            <NuxtLink to="/">
                <button
                    :class="route.path === '/' ? 'bg-black text-white rounded-full p-2 px-4' : 'bg-white text-blacborder-none p-2 px-4'">Home</button>

            </NuxtLink>
            <NuxtLink to="/image">
                <button
                    :class="route.path === '/image' ? 'bg-black text-white rounded-full p-2 px-4' : 'bg-white text-blacborder-none p-2 px-4'">Gallery</button>
            </NuxtLink>
            <NuxtLink to="/#contact">
                <button
                    :class="route.path === '/#contact' ? 'bg-black text-white rounded-full p-2 px-4' : 'bg-white text-blacborder-none p-2 px-4'">Contact</button>
            </NuxtLink>
            <NuxtLink to="/admin">
                <button
                    :class="route.path === '/admin' ? 'bg-black text-white rounded-full p-2 px-4' : 'bg-white text-blacborder-none p-2 px-4'">Admin
                    Panel</button>
            </NuxtLink>
        </section>
        <section>
            <svg width="20" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M26.6283 28.1543L16.1917 17.7176C15.3583 18.4276 14.4 18.9771 13.3167 19.3659C12.2333 19.7548 11.1444 19.9493 10.05 19.9493C7.38111 19.9493 5.12222 19.0254 3.27333 17.1776C1.42444 15.3287 0.5 13.0704 0.5 10.4026C0.5 7.73484 1.42333 5.47539 3.27 3.62428C5.11778 1.77206 7.37556 0.845947 10.0433 0.845947C12.7122 0.845947 14.9722 1.77039 16.8233 3.61928C18.6744 5.46817 19.6 7.72761 19.6 10.3976C19.6 11.5554 19.395 12.6759 18.985 13.7593C18.5739 14.8426 18.035 15.7693 17.3683 16.5393L27.805 26.9743L26.6283 28.1543ZM10.05 18.2809C12.2611 18.2809 14.1283 17.5198 15.6517 15.9976C17.1739 14.4754 17.935 12.6082 17.935 10.3959C17.935 8.18483 17.1739 6.31817 15.6517 4.79595C14.1294 3.27372 12.2628 2.51261 10.0517 2.51261C7.84055 2.51261 5.97333 3.27372 4.45 4.79595C2.92778 6.31817 2.16667 8.18483 2.16667 10.3959C2.16667 12.6071 2.92778 14.4737 4.45 15.9959C5.97222 17.5182 7.83889 18.2809 10.05 18.2809Z"
                    fill="black" />
            </svg>
        </section>
    </nav>
</template>

<style scoped>
.pcButton {
    @apply bg-black;
}

.nuxt-link-active {
    @apply bg-black text-white;
}
</style>
