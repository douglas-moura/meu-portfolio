<template>
    <main id="meus-projetos">
        <section>
            <h1>Projetos</h1>
            <div class="grade">
                <BlocoProjeto
                    class="col-33"
                    @exibirProjeto="mostrarProjeto"
                    v-for="projeto in meusProjetos" :key="projeto.id"

                    :titulo="projeto.title"
                    :descr="projeto.desc"
                    :tecs="projeto.tecnologias"
                />
                <BlocoProjeto
                    v-show="qtd == 2"
                    :class="qtd == 2 ? 'col-33 oculto' : 'oculto'"
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
    import { onMounted, ref } from 'vue'
    import axios from 'axios'

    //dados
    const projetoAberto = ref(false)
    const meusProjetos = ref([])
    const qtd = ref(0)
    
    //métodos
    function mostrarProjeto() {
        projetoAberto.value = !projetoAberto.value
    }
    const getProjetos = async () => {
        try {
            const response = await axios.get('http://localhost:3000/projetos')
            meusProjetos.value = response.data
            qtd.value = (meusProjetos.value.length % 3)
        } catch(error) {
            console.error("Erro ao buscar os dados:", error);
        }
    }

    //montado
    onMounted(() => {
        getProjetos()
    })
</script>

<style scoped>
    .oculto {
        visibility: hidden;
    }
</style>