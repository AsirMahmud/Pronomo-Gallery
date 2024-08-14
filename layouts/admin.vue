<script setup lang="ts">
import AdminSIdeBar from '~/components/admin/AdminSIdeBar.vue';
</script>

<template>
    <div class="px-8 flex  max-w-[1240px]  scroll-smooth w-full mx-auto">

        <AdminSIdeBar></AdminSIdeBar>
        <div>
            <slot />
        </div>


    </div>
</template>