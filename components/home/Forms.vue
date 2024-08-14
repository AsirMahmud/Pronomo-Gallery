<script setup>

</script>

<template>
    <div class="flex gap-8 scroll-m-10">
        <form class="lg:w-[50%] w-full shadow-lg p-8 flex flex-col gap-8 bg-white">
            <div class="flex flex-col gap-2">
                <h2 class="font-bold text-4xl">Upload</h2>
                <p>Questions, bugs, feedback — we’re here for you</p>

            </div>

            <div class="flex flex-col gap-4  flex-1 h-full">
                <div class="flex flex-col gap-2">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" class="" placeholder="Name">

                </div>
                <div class="flex flex-col gap-2">
                    <label for="email">Email</label>
                    <input name="email" id="name" class="" type="email" placeholder="example@company.com">

                </div>
                <div class="flex flex-col gap-2">
                    <label for="mobile">Mobile</label>
                    <input name="mobile" type='tel' id="mobile" class="" placeholder="01*************">

                </div>
                <div class="flex flex-col gap-2">
                    <label for="name">Description</label>
                    <textarea name="name" id="name" class=" resize-none " placeholder="Description"></textarea>

                </div>

            </div>
            <button type="submit" class="w-full bg-black text-center text-white rounded p-2">Submit</button>


        </form>
        <form class="lg:w-[50%] w-full shadow-lg p-8 flex flex-col gap-8 bg-white">
            <div class="flex flex-col gap-2">
                <h2 class="font-bold text-4xl">Contact Us</h2>
                <p>Questions, bugs, feedback — we’re here for you</p>

            </div>

            <div class="flex flex-col gap-4 flex-1">
                <div class="flex flex-col gap-2">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" class="" placeholder="Name">

                </div>
                <div class="flex flex-col gap-2">
                    <label for="email">Email</label>
                    <input name="email" id="email" class="" type="email" placeholder="example@company.com">

                </div>

                <div class="flex flex-col gap-2">
                    <label for="name">Message</label>
                    <textarea name="name" id="name" class=" resize-none " placeholder="Write message"></textarea>

                </div>

            </div> <button type="submit" class="w-full bg-black text-center text-white rounded p-2">Submit</button>


        </form>

    </div>
</template>