<template>
    <button id="btn-padrao" class="absolute cursor-pointer m-auto text-base font-extrabold py-4 px-8 rounded-lg border-4 border-branco text-branco ">
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
        background-color: rgba(#000, .5) !important;
    }
</style>