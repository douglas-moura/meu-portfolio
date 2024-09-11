<template>
    <main id="meus-projetos">
        <section>
            <h1>Projetos</h1>
            <div class="grade">
                <BlocoProjeto
                    class="col-33"
                    @exibirProjeto="mostrarProjeto"
                />
                <BlocoProjeto
                    class="col-33"
                    @exibirProjeto="mostrarProjeto"
                />
                <BlocoProjeto
                    class="col-33"
                    @exibirProjeto="mostrarProjeto"
                />
                <BlocoProjeto
                    class="col-33"
                    @exibirProjeto="mostrarProjeto"
                />
            </div>
        </section>
    </main>
    <ProjetoDetalhes
        v-if="projetoAberto"
        @ocultarProjeto="mostrarProjeto"
        :statusPopup=projetoAberto
    />
</template>

<script setup>
    import BlocoProjeto from '@/components/partials/BlocoProjeto.vue'
    import ProjetoDetalhes from '@/components/layouts/ProjetoDetalhes.vue'
    import { ref } from 'vue'

    const projetoAberto = ref(false)

    //métodos
    function mostrarProjeto() {
        projetoAberto.value = !projetoAberto.value
    }
</script>

<style scoped>
    
</style>