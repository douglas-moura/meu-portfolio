<template>
    <img
        :src="'src/assets/img/' + src + '.jpg'"
        :class="formato == 'redondo' ? 'redondo' : 'quadrado'"
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

<style scoped>
    img {
        width: 100%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
    }

    .redondo {
        border-radius: 50% !important;
    }

    .quadrado {
        border-radius: 1rem;
    }
</style>