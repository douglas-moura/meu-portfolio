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
        width: 100%;
        object-fit: cover;
    }
    
    .redondo {
        aspect-ratio: 1 / 1;
        border-radius: 50% !important;
    }

    .quadrado {
        aspect-ratio: 1 / 1;
        border-radius: .5rem !important;
        object-position: top;
    }
</style>