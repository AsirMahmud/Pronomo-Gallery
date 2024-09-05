<script setup>
import { PhotoService } from '../image/photo';


const images = ref([
    {
        itemImageSrc:
            "https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg",
        thumbnailImageSrc:
            "https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg",
        alt: "Description for Image 1",
        title: "Title 1",
    },
    {
        itemImageSrc:
            "https://primefaces.org/cdn/primevue/images/galleria/galleria2.jpg",
        thumbnailImageSrc:
            "https://primefaces.org/cdn/primevue/images/galleria/galleria2s.jpg",
        alt: "Description for Image 2",
        title: "Title 2",
    },
    {
        itemImageSrc:
            "https://primefaces.org/cdn/primevue/images/galleria/galleria3.jpg",
        thumbnailImageSrc:
            "https://primefaces.org/cdn/primevue/images/galleria/galleria3s.jpg",
        alt: "Description for Image 3",
        title: "Title 3",
    },
    {
        itemImageSrc:
            "https://primefaces.org/cdn/primevue/images/galleria/galleria4.jpg",
        thumbnailImageSrc:
            "https://primefaces.org/cdn/primevue/images/galleria/galleria4s.jpg",
        alt: "Description for Image 4",
        title: "Title 4",
    },
    {
        itemImageSrc:
            "https://primefaces.org/cdn/primevue/images/galleria/galleria5.jpg",
        thumbnailImageSrc:
            "https://primefaces.org/cdn/primevue/images/galleria/galleria5s.jpg",
        alt: "Description for Image 5",
        title: "Title 5",
    },
    {
        itemImageSrc:
            "https://primefaces.org/cdn/primevue/images/galleria/galleria6.jpg",
        thumbnailImageSrc:
            "https://primefaces.org/cdn/primevue/images/galleria/galleria6s.jpg",
        alt: "Description for Image 6",
        title: "Title 6",
    },
    {
        itemImageSrc:
            "https://primefaces.org/cdn/primevue/images/galleria/galleria7.jpg",
        thumbnailImageSrc:
            "https://primefaces.org/cdn/primevue/images/galleria/galleria7s.jpg",
        alt: "Description for Image 7",
        title: "Title 7",
    },
    {
        itemImageSrc:
            "https://primefaces.org/cdn/primevue/images/galleria/galleria8.jpg",
        thumbnailImageSrc:
            "https://primefaces.org/cdn/primevue/images/galleria/galleria8s.jpg",
        alt: "Description for Image 8",
        title: "Title 8",
    },
    {
        itemImageSrc:
            "https://primefaces.org/cdn/primevue/images/galleria/galleria9.jpg",
        thumbnailImageSrc:
            "https://primefaces.org/cdn/primevue/images/galleria/galleria9s.jpg",
        alt: "Description for Image 9",
        title: "Title 9",
    },
    {
        itemImageSrc:
            "https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg",
        thumbnailImageSrc:
            "https://primefaces.org/cdn/primevue/images/galleria/galleria10s.jpg",
        alt: "Description for Image 10",
        title: "Title 10",
    },
    {
        itemImageSrc:
            "https://primefaces.org/cdn/primevue/images/galleria/galleria11.jpg",
        thumbnailImageSrc:
            "https://primefaces.org/cdn/primevue/images/galleria/galleria11s.jpg",
        alt: "Description for Image 11",
        title: "Title 11",
    },
    {
        itemImageSrc:
            "https://primefaces.org/cdn/primevue/images/galleria/galleria12.jpg",
        thumbnailImageSrc:
            "https://primefaces.org/cdn/primevue/images/galleria/galleria12s.jpg",
        alt: "Description for Image 12",
        title: "Title 12",
    },
    {
        itemImageSrc:
            "https://primefaces.org/cdn/primevue/images/galleria/galleria13.jpg",
        thumbnailImageSrc:
            "https://primefaces.org/cdn/primevue/images/galleria/galleria13s.jpg",
        alt: "Description for Image 13",
        title: "Title 13",
    },
    {
        itemImageSrc:
            "https://primefaces.org/cdn/primevue/images/galleria/galleria14.jpg",
        thumbnailImageSrc:
            "https://primefaces.org/cdn/primevue/images/galleria/galleria14s.jpg",
        alt: "Description for Image 14",
        title: "Title 14",
    },
    {
        itemImageSrc:
            "https://primefaces.org/cdn/primevue/images/galleria/galleria15.jpg",
        thumbnailImageSrc:
            "https://primefaces.org/cdn/primevue/images/galleria/galleria15s.jpg",
        alt: "Description for Image 15",
        title: "Title 15",
    },
]);



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
            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 place-items-center">
                <NuxtLink v-for="i in 9" to="/blog">
                    <HomeCard key="i" :img="images[i].itemImageSrc"></HomeCard>

                </NuxtLink>
            </div>

        </div>
    </div>
</template>