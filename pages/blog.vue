<script setup>




</script>

<template>
    <div class="lg:p-16 mx-auto flex flex-col gap-8">
        <div class="flex justify-center flex-col gap-8">
            <h1 class=" font-bold text-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, at.
            </h1>
            <div class="flex items-center justify-center text-gray-500 text-sm mb-2">
                <span class="mr-4 text-lg  flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-4 h-4 mr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Admin
                </span>
                <span class="mr-4  text-lg flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-4 h-4 mr-1">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M8.25 15a6 6 0 117.5 0m-7.5 0A6 6 0 018.25 9m7.5 0a6 6 0 110 6" />
                    </svg>
                    January 17, 2022
                </span>
                <span class="flex text-lg   items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-4 h-4 mr-1">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M8.25 4.5a2.25 2.25 0 100 4.5 2.25 2.25 0 100-4.5zM16.5 4.5a2.25 2.25 0 100 4.5 2.25 2.25 0 100-4.5zM12 12a2.25 2.25 0 100 4.5 2.25 2.25 0 100-4.5z" />
                    </svg>
                    Location
                </span>

            </div>
        </div>
        <div class="w-full ">
            <NuxtImg
                src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSaa4PbteNbRoyr36GMCNsmqsGJyCZ9ktJ0UulsBEzwcOxZDxciW7iE5mtWzo61ZWih54NEB3GxKleuCSvoso8"
                alt="Image" class="w-full max-h-[500px] h-auto object-cover rounded-xl"></NuxtImg>

        </div>
        <p class="px-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis eligendi alias minima et
            perspiciatis
            similique nihil debitis fuga autem, beatae aspernatur facere assumenda nostrum fugit! Deserunt deleniti
            voluptatem inventore labore necessitatibus iusto in dolore enim nam harum. Eligendi accusantium suscipit
            aliquam velit porro dolore facere obcaecati sit expedita, quibusdam repellat totam. Harum alias illum
            dolorem architecto nam rerum consectetur odit quibusdam delectus quo hic vel repellat, asperiores quas nihil
            dolore, sapiente quos, explicabo ea autem magni nobis! Nostrum iusto quas labore possimus eos aut recusandae
            perspiciatis sequi voluptates eius necessitatibus in, reprehenderit repellat accusantium perferendis, esse
            odio iure! Illum nostrum iusto illo modi, similique beatae exercitationem architecto ab, aperiam quibusdam
            sit inventore, molestias dolorum! Assumenda nesciunt earum voluptate at esse illo dolore optio sed maxime
            corrupti laudantium culpa, molestiae asperiores. Rem necessitatibus facere et ipsum veritatis iure animi.
            Porro, dolores illum error nihil quibusdam ipsa dicta consequuntur exercitationem, placeat culpa, fuga
            accusantium qui odio? Adipisci obcaecati veritatis quaerat maiores quas dolore architecto dicta dignissimos
            voluptatem, repudiandae rem assumenda perspiciatis consequatur, animi, incidunt dolor autem dolores non
            reprehenderit ipsam ad ipsa nulla ipsum? Ex, repudiandae tempora beatae sequi consequatur, quibusdam nemo
            iure quos rem officia doloribus vitae aliquam odit atque corporis?</p>

        <div class=" flex flex-col gap-8" v-for="i in 5">
            <div class="w-full ">
                <NuxtImg
                    src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSaa4PbteNbRoyr36GMCNsmqsGJyCZ9ktJ0UulsBEzwcOxZDxciW7iE5mtWzo61ZWih54NEB3GxKleuCSvoso8"
                    alt="Image" class="w-full max-h-[500px] h-auto object-cover rounded-xl"></NuxtImg>

            </div>
            <h5 class=" w-[60%] text-start  text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, at.
            </h5>

            <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis eligendi alias minima et
                perspiciatis
                similique nihil debitis fuga autem, beatae aspernatur facere assumenda nostrum fugit! Deserunt deleniti
                voluptatem inventore labore necessitatibus iusto in dolore enim nam harum. Eligendi accusantium suscipit
                aliquam velit porro dolore facere obcaecati sit expedita, quibusdam repellat totam. Harum alias illum
                dolorem architecto nam rerum consectetur odit quibusdam delectus quo hic vel repellat, asperiores quas
                nihil
                dolore, sapiente quos, explicabo ea autem magni nobis! Nostrum iusto quas labore possimus eos aut
                recusandae
                perspiciatis sequi voluptates eius necessitatibus in, reprehenderit repellat accusantium perferendis,
                esse
                odio iure! Illum nostrum iusto illo modi, similique beatae exercitationem architecto ab, aperiam
                quibusdam
                sit inventore, molestias dolorum! Assumenda nesciunt earum voluptate at esse illo dolore optio sed
                maxime
                corrupti laudantium culpa, molestiae asperiores. Rem necessitatibus facere et ipsum veritatis iure
                animi.
                Porro, dolores illum error nihil quibusdam ipsa dicta consequuntur exercitationem, placeat culpa, fuga
                accusantium qui odio? Adipisci obcaecati veritatis quaerat maiores quas dolore architecto dicta
                dignissimos
                voluptatem, repudiandae rem assumenda perspiciatis consequatur, animi, incidunt dolor autem dolores non
                reprehenderit ipsam ad ipsa nulla ipsum? Ex, repudiandae tempora beatae sequi consequatur, quibusdam
                nemo
                iure quos rem officia doloribus vitae aliquam odit atque corporis?</p>
        </div>
        <BlogRelated></BlogRelated>
    </div>
</template>