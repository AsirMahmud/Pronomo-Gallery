<template>
    <div class="flex flex-col gap-8 mt-10">
        <div class="w-full text-center flex flex-col gap-4">
            <h1>Image Gallery</h1>
            <p class="w-[40%] mx-auto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam maxime nostrum
                cupiditate
                velit optio
                obcaecati cumque, consectetur aliquam explicabo eaque!</p>


        </div>
        <div class="card flex flex-col items-center w-full">
            <Galleria v-model:activeIndex="activeIndex" v-model:visible="displayCustom" :value="images"
                :responsiveOptions="responsiveOptions" :numVisible="3" containerStyle="width:40%" :circular="true"
                :fullScreen="true" :showItemNavigators="true" :showThumbnails="false">
                <template #item="slotProps">
                    <div>
                        <div>
                            <div class=" absolute flex flex-col gap-4 bottom-0 left-0 p-8 w-[60%]">
                                <h3 class=" text-2xl  text-white">Alfredo dfsd</h3>
                                <span class=" text-white">Lets go to there! Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Ut quia dolorum optio est dolores praesentium natus minus quas
                                    blanditiis, nostrum sequi laborum obcaecati placeat nulla officia quaerat
                                    repudiandae
                                    quam qui?</span>
                                <div class="text-2xl hover:underline text-white cursor-pointer">Show more</div>
                            </div>
                            <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" class=" rounded-lg" />
                        </div>
                    </div>
                </template>
                <template #thumbnail="slotProps">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" class="block" />
                </template>
            </Galleria>

            <div v-if="images" class="grid grid-cols-3 gap-8 w-full mt-8">
                <div v-for="(image, index) of images" :key="index" class="w-full relative rounded-lg">
                    <div class=" absolute bottom-0 left-0 p-8 w-[60%]">
                        <h3 class=" text-2xl  text-white">Alfredo dfsd</h3>
                        <span class=" text-white">Lets go to there!</span>

                    </div>
                    <img :src="image.itemImageSrc" :alt="image.alt" class="w-full cursor-pointer rounded-lg"
                        @click="imageClick(index)" />

                </div>
            </div>

            <div>
                <Button size="small" class="bg-black rounded-full flex gap-1 items-center mt-4">Loadmore <svg
                        class=" animate-spin " width="12" height="13" viewBox="0 0 12 13" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.978 6.76909C11.978 7.90032 11.657 9.00833 11.0522 9.96434C10.4475 10.9204 9.58383 11.6851 8.56167 12.1698C7.53951 12.6544 6.4008 12.839 5.27787 12.7022C4.15495 12.5653 3.09392 12.1126 2.2181 11.3966C1.34228 10.6806 0.687618 9.73079 0.330208 8.6575C-0.0272022 7.58421 -0.0726888 6.43153 0.199034 5.33342C0.470757 4.2353 1.04853 3.23684 1.86521 2.45408C2.6819 1.67131 3.70395 1.13638 4.81259 0.911456L5.01555 1.9118C4.09623 2.09831 3.24872 2.54189 2.57151 3.19098C1.8943 3.84007 1.41519 4.66801 1.18987 5.57859C0.964553 6.48918 1.00227 7.44501 1.29864 8.335C1.59502 9.225 2.13788 10.0126 2.86413 10.6063C3.59038 11.2 4.47021 11.5754 5.40137 11.6889C6.33252 11.8024 7.27677 11.6493 8.12437 11.2475C8.97197 10.8456 9.68812 10.2114 10.1896 9.41867C10.6911 8.62592 10.9573 7.70714 10.9573 6.76909H11.978Z"
                            fill="white" />
                    </svg>
                </Button>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from './photo.js';

onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
});

const images = ref([]);
const activeIndex = ref(0);
const responsiveOptions = ref([
    {
        breakpoint: '1024px',
        numVisible: 3
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
]);
const displayCustom = ref(false);

const imageClick = (index) => {
    activeIndex.value = index;
    displayCustom.value = true;
};
</script>

<style scoped>
/* Optional: Customize the spacing or appearance further */
.card {
    max-width: 1200px;
    margin: auto;
}
</style>
