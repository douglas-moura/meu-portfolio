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
    #app {
        @apply grid grid-cols-12
    }
</style>
