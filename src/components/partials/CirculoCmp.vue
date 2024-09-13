<template>
    <div
        id="circulo"
        :class="cor"
        :style="'top:' + top + 'rem; left:' + left + 'rem; width:' + largura + '%; z-index:' + (tipo == 'fundo' ? 900 + '; position: fixed;' : 998 + '; position: absolute;')">
    </div>
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
        width: 100%;
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