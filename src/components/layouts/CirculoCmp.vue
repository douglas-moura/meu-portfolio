<template>
    <div
        id="circulo"
        :class="cor"
        :style="'top:' + top + 'rem; left:' + left + 'rem; width:' + largura + '%; z-index:' + (tipo === 'fundo' ? 900 : 998) + ';'">
    </div>
</template>

<script setup>
    import { defineProps } from 'vue'

    defineProps({
        top: Number,
        left: Number,
        largura: Number,
        tipo: String,
        cor: String
    })
</script>

<style scoped>
    #circulo {
        width: 100%;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        position: absolute;
        border: .1rem solid var(--branco);
    }

    .cinza {
        border: .1rem solid var(--cinza-medio) !important;
        opacity: .15;
    }

    .laranja {
        border: .1rem solid var(--laranja) !important;
    }

    .preto {
        border: .1rem solid var(--cinza-escuro) !important;
    }
</style>