<template>
    <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :autoplay="{
        delay: 1000,  // Time between slides in milliseconds
        disableOnInteraction: false  // Continue autoplay after user interactions
    }" :slidesPerView="'auto'" :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    }" :pagination="true" :modules="modules" class="mySwiper">
        <swiper-slide v-for="(image, index) in images" :key="index">
            <img :src="image" />
        </swiper-slide>
    </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const modules = [EffectCoverflow, Autoplay];

const images = [
    'https://swiperjs.com/demos/images/nature-1.jpg',
    'https://swiperjs.com/demos/images/nature-2.jpg',
    'https://swiperjs.com/demos/images/nature-3.jpg',
    'https://swiperjs.com/demos/images/nature-4.jpg',
    'https://swiperjs.com/demos/images/nature-5.jpg',
    'https://swiperjs.com/demos/images/nature-6.jpg',
    'https://swiperjs.com/demos/images/nature-7.jpg',
    'https://swiperjs.com/demos/images/nature-8.jpg',
    'https://swiperjs.com/demos/images/nature-9.jpg'
];
</script>

<style scoped>
.mySwiper {
    width: 60vw;
    /* Adjust the width as needed */
    height: 60vh;
    /* Adjust the height as needed */
    margin:
        -mt-20
        /* Center the swiper horizontally */
}

html,
body {
    background: #5a2121;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
}

.swiper {
    width: 100%;
    height: 100%;
    padding-top: 50px;
    padding-bottom: 50px;

}

.swiper-slide {
    background-position: center;
    background-size: cover;
    width: 40%;
    /* Adjust the width of each slide as needed */
    height: 40%;
    /* Adjust the height of each slide as needed */
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Ensure the image covers the slide area */
}
</style>
