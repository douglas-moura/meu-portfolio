<template>
    <button id="btn-padrao" class="absolute cursor-pointer m-auto text-base font-extrabold py-2 px-6 rounded-full border-4 border-branco text-branco md:py-4 md:px-8 md:rounded-full md:border-4 lg:text-sm lg:py-4 lg:px-8 2xl:text-lg">
        {{ btnTexto }}
    </button>
</template>

<script setup>
    defineProps({
        btnTexto: String
    })
</script>

<style lang="scss" scoped>
    #btn-padrao {
        background-color: rgba(#000, .8) !important;
    }
</style>