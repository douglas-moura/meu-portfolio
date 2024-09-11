<template>
    <img
        :src="'src/assets/img/' + src + '.jpg'"
        :class="formato"
        :alt="textoAlt"
    >
</template>

<script setup>
    import { defineProps } from 'vue'

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
        border-radius: 1rem !important; 
    }
</style>