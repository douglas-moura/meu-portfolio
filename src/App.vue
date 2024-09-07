<template>
    <NavMenu />
    <RouterView class="box-sup" />
</template>

<script setup>
    import { RouterView } from 'vue-router'
    import NavMenu from '../src/components/layouts/NavMenu.vue'
</script>

<style scoped>
    main {
        width: 94%;
        padding: 1rem;
        float: right;
        min-height: 100dvh;

        section {
            width: 75%;
        }
    }

    aside {
        width: 6%;
        animation-name: fade-in;
        animation-duration: 2s;
    }
</style>
