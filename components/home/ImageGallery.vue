<script setup>

</script>

<template>
    <div class="flex gap-16 flex-col">
        <div class="w-full text-center flex flex-col gap-4">
            <h1>Image Gallery</h1>
            <p class="w-[40%] mx-auto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam maxime nostrum
                cupiditate
                velit optio
                obcaecati cumque, consectetur aliquam explicabo eaque!</p>


        </div>
        <div class="h-[546.66px] flex gap-4">
            <div class="w-[15%] h-full flex items-center">
                <img src="https://via.placeholder.com/200x440" class="object-cover w-full h-[80%]">


            </div>
            <div class="w-[20%] flex flex-col overflow-hidden gap-2">
                <div class=" h-full overflow-hidden">
                    <img src="https://via.placeholder.com/364x540" class="object-cover w-full h-full ">


                </div>
                <div class=" h-full overflow-hidden">
                    <img src="https://via.placeholder.com/364x540" class="object-cover w-full h-full">


                </div>

            </div>
            <div class="w-[20%] h-full flex items-center">
                <img src="https://via.placeholder.com/200x440" class="object-cover w-full h-[60%]">


            </div>
            <div class="w-[30%] h-full flex items-center">
                <img src="https://via.placeholder.com/200x440" class="object-cover w-full h-full">


            </div>
            <div class="w-[15%] h-full flex items-center">
                <img src="https://via.placeholder.com/200x440" class="object-cover w-full h-[80%]">


            </div>



        </div>

        <div class="flex justify-between">
            <p class="w-[50%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolor eveniet
                distinctio facere, ab
                tempore sapiente facilis animi, ducimus blanditiis atque sunt odit debitis rerum cum iusto voluptatem
                delectus neque! At dolor expedita facere saepe, quae iusto odio ipsum in ullam dolores libero optio
                voluptates deleniti beatae soluta nulla fuga!</p>
            <NuxtLink to="/image">
                <button class="bg-black text-white items-center   p-4 h-10 border-none rounded-full flex gap-2 "
                    size="sm">
                    <span class="text-white">More
                        Gallery</span> <svg width="20" height="15" viewBox="0 0 20 15" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M19.5069 6.7359C19.6475 6.87655 19.7266 7.06731 19.7266 7.26623C19.7266 7.46514 19.6475 7.65591 19.5069 7.79656L13.4369 13.8666C13.144 14.1595 12.6691 14.1595 12.3762 13.8666C12.0833 13.5737 12.0833 13.0988 12.3762 12.8059L17.1659 8.01622L1.97652 8.01622C1.56231 8.01622 1.22652 7.68043 1.22652 7.26622C1.22652 6.85201 1.56231 6.51622 1.97652 6.51622L17.1659 6.51622L12.3762 1.72656C12.0833 1.43366 12.0833 0.95879 12.3762 0.665898C12.6691 0.373005 13.144 0.373005 13.4369 0.665898L19.5069 6.7359Z"
                            fill="white" />
                        <path
                            d="M19.5069 6.7359L19.3301 6.91267H19.3301L19.5069 6.7359ZM19.5069 7.79656L19.3301 7.61978H19.3301L19.5069 7.79656ZM13.4369 13.8666L13.2601 13.6898L13.4369 13.8666ZM12.3762 13.8666L12.1995 14.0433L12.3762 13.8666ZM12.3762 12.8059L12.1995 12.6291L12.3762 12.8059ZM17.1659 8.01622V7.76622C17.267 7.76622 17.3582 7.82713 17.3969 7.92055C17.4356 8.01397 17.4142 8.1215 17.3427 8.193L17.1659 8.01622ZM1.97652 8.01622V7.76622V8.01622ZM1.97652 6.51622V6.26622V6.51622ZM17.1659 6.51622L17.3427 6.33944C17.4142 6.41094 17.4356 6.51847 17.3969 6.61189C17.3582 6.70531 17.267 6.76622 17.1659 6.76622V6.51622ZM12.3762 1.72656L12.553 1.54978L12.553 1.54978L12.3762 1.72656ZM12.3762 0.665898L12.553 0.842675L12.553 0.842675L12.3762 0.665898ZM13.4369 0.665898L13.2601 0.842675V0.842675L13.4369 0.665898ZM19.4766 7.26623C19.4766 7.13362 19.4239 7.00644 19.3301 6.91267L19.6837 6.55912C19.8712 6.74666 19.9766 7.00101 19.9766 7.26623H19.4766ZM19.3301 7.61978C19.4239 7.52601 19.4766 7.39884 19.4766 7.26623H19.9766C19.9766 7.53144 19.8712 7.7858 19.6837 7.97333L19.3301 7.61978ZM13.2601 13.6898L19.3301 7.61978L19.6837 7.97333L13.6137 14.0433L13.2601 13.6898ZM12.553 13.6898C12.7483 13.885 13.0649 13.885 13.2601 13.6898L13.6137 14.0433C13.2231 14.4339 12.59 14.4339 12.1995 14.0433L12.553 13.6898ZM12.553 12.9827C12.3577 13.1779 12.3577 13.4945 12.553 13.6898L12.1995 14.0433C11.8089 13.6528 11.8089 13.0196 12.1995 12.6291L12.553 12.9827ZM17.3427 8.193L12.553 12.9827L12.1995 12.6291L16.9891 7.83944L17.3427 8.193ZM1.97652 7.76622L17.1659 7.76622V8.26622L1.97652 8.26622V7.76622ZM1.47652 7.26622C1.47652 7.54236 1.70038 7.76622 1.97652 7.76622V8.26622C1.42423 8.26622 0.976519 7.8185 0.976519 7.26622H1.47652ZM1.97652 6.76622C1.70038 6.76622 1.47652 6.99008 1.47652 7.26622H0.976519C0.976519 6.71393 1.42423 6.26622 1.97652 6.26622V6.76622ZM17.1659 6.76622L1.97652 6.76622V6.26622L17.1659 6.26622V6.76622ZM12.553 1.54978L17.3427 6.33944L16.9891 6.693L12.1995 1.90333L12.553 1.54978ZM12.553 0.842675C12.3577 1.03794 12.3577 1.35452 12.553 1.54978L12.1995 1.90333C11.8089 1.51281 11.8089 0.879645 12.1995 0.489121L12.553 0.842675ZM13.2601 0.842675C13.0649 0.647412 12.7483 0.647412 12.553 0.842675L12.1995 0.489121C12.59 0.0985969 13.2231 0.0985969 13.6137 0.489121L13.2601 0.842675ZM19.3301 6.91267L13.2601 0.842675L13.6137 0.489121L19.6837 6.55912L19.3301 6.91267Z"
                            fill="white" />
                    </svg>
                </button>
            </NuxtLink>
        </div>

    </div>
</template>