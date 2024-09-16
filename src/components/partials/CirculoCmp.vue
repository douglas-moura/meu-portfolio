<template>
    <div class="circulo"></div>
</template>

<script setup>
    defineProps({
        top: Number,
        left: Number,
        largura: Number,
        tipo: String,
        cor: String
    })
</script>

<style scoped lang="scss">
    #circulo {
        width: 100% !important;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        border: .1rem solid $branco;
    }

    .cinza {
        border: .1rem solid $cinza-medio !important;
        opacity: .15;
    }

    .laranja {
        border: .1rem solid $laranja !important;
    }

    .preto {
        border: .1rem solid $cinza-escuro !important;
    }
</style>