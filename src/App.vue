<template>
    <NavMenu />
    <RouterView class="box-sup" />
    <PageFoot />
</template>

<script setup>
    import { RouterView } from 'vue-router'
    import NavMenu from '../src/components/layouts/NavMenu.vue'
    import PageFoot from '../src/components/layouts/PageFoot.vue'
</script>

<style scoped>
    main {
        min-height: 93dvh;
    }

    main, footer {
        width: 94%;
        padding: 1rem;
        float: right;
        animation-name: fade-in;
        animation-duration: 2s;

        section {
            width: 75%;
        }
    }

    aside {
        width: 6%;
    }
</style>
