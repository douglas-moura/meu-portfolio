<template>
    <button>
        {{ btnTexto }}
    </button>
</template>

<script setup>
    defineProps({
        btnTexto: String
    })
</script>

<style lang="scss" scoped>
    button {
        margin: auto;
        font-size: 1rem;
        font-weight: 700;
        padding: 1rem 2rem;
        border-radius: .5rem;
        border: .2rem solid white;
        color: white;
        background-color: rgba(#000, .5);
        position: absolute;
        cursor: pointer;
    }
</style>