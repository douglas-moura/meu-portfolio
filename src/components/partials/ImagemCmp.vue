<template>
    <img
        :src="'src/assets/img/' + src + '.jpg'"
        :class="formato"
        :alt="textoAlt"
    >
</template>

<script setup>
    defineProps({
        src: String,
        formato: String,
        textoAlt: String
    })
</script>

<style scoped lang="scss">
    img {
        @apply w-full object-cover;
    }
    
    .redondo {
        @apply aspect-square rounded-full;
    }

    .quadrado {
        @apply aspect-square rounded-lg object-top;
    }
</style>