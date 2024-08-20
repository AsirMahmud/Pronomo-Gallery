<script setup>

</script>

<template>
    <div class="flex flex-col gap-8 mt-32">
        <h4 class=" lg:text-4xl text-2xl font-bold ">Related Post</h4>
        <div class="flex gap-4">
            <div v-for=" i in 3" class="  gap-2">
                <div class="card  border p-2">
                    <div class="h-[264px] w-full flex flex-col gap-2 ">
                        <div class="h-[149px] w-full overflow-hidden">
                            <img class="object-cover w-full h-full " alt="ricshaw"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6rcz7xyWXHgKHvndvipoT4UERH_QdQuYHUA&s">

                        </div>
                        <span class="mr-4 text-lg  flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-4 h-4 mr-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Admin
                        </span>
                        <h4 class="lg:text-2xl text-lg">Lorem ipsum dolor sit amet.</h4>

                    </div>

                </div>

            </div>

        </div>
    </div>
</template>