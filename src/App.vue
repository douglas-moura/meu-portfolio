<template>
    <NavMenu />
    <RouterView />
    <PageFoot />
</template>

<script setup>
    import { RouterView } from 'vue-router'
    import NavMenu from '../src/components/layouts/NavMenu.vue'
    import PageFoot from '../src/components/layouts/PageFoot.vue'
</script>

<style lang="scss">
    main, footer {
        width: 94%;
        float: right;
        animation-name: fadeIn;
        animation-duration: 2s;
    }

    main {
        min-height: 95dvh;
        padding: 4rem 2rem;

        section {
            margin: auto !important;
            width: 80%;
        }
    }

    footer {   
        min-height: 5dvh;
        padding: 0 2rem;
    }

    aside {
        width: 6%;
    }
</style>
