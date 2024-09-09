<template>
    <footer>
        <h6>Douglas de Souza Moura | Portfólio 2024 - Feito com Vue.Js 3</h6>
        <CirculoCmp
            top=-20
            left=-10
            largura=60
            tipo="fundo"
            cor="cinza"
        />
        <CirculoCmp
            top=10
            left=30
            largura=120
            tipo="fundo"
            cor="cinza"
        />
        <CirculoCmp
            top=20
            left=-20
            largura=50
            tipo="fundo"
            cor="cinza"
        />
    </footer>
</template>

<script setup>
    import CirculoCmp from '@/components/layouts/CirculoCmp.vue'
</script>

<style scoped lang="scss">
    footer {
        text-align: center;

        h6 {
            color: $cinza-medio;
            font-weight: 500;
            margin: auto 0;
        }
    }
</style>