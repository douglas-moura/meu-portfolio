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
    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        /* estilos para dispositivos muito pequenos */

    }
    
    main, footer {
        width: 94%;
    }

    aside {
        width: 6%;
    }
</style>
