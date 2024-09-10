<template>
    <main id="meus-projetos">
        <section>
            <h1>Projetos</h1>
            <div class="grade">
                <BlocoProjeto class="col-33" />
                <BlocoProjeto class="col-33" />
                <BlocoProjeto class="col-33" />
                <BlocoProjeto class="col-33" />
                <BlocoProjeto class="col-33" />
                <BlocoProjeto class="col-33" />
            </div>
        </section>
    </main>
    <ProjetoDetalhes />
</template>

<script setup>
    import BlocoProjeto from '@/components/partials/BlocoProjeto.vue'
    import ProjetoDetalhes from '@/components/layouts/ProjetoDetalhes.vue'
</script>

<style scoped>

</style>