<template>
    <main>
        <section class="sessao-default">
            <h1>Projetos</h1>
            <div class="linha-sessao grid-cols-1 lg:grid-cols-3">
                <BlocoProjeto
                    v-for="projeto in meusProjetos" :key="projeto.id"
                    :periodo="projeto.periodo"
                    :titulo="projeto.title"
                    :descr="projeto.desc"
                    :tipo="projeto.tipo"
                    :link="projeto.link"
                    :tecs="projeto.tecnologias"
                    :imgs="projeto.imagens"
                />
            </div>
        </section>
    </main>
</template>

<script setup>
    import BlocoProjeto from '@/components/partials/BlocoProjeto.vue'
    import { onMounted, ref } from 'vue'
    import axios from 'axios'

    //dados
    const meusProjetos = ref([])
    const qtd = ref(0)
    
    //métodos
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

<style scoped lang="scss"></style>