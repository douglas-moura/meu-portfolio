<template>   
    <section
        v-if="props
        && props.imgs
        && props.imgs.length > 0
        && props.imgs[0].arquivos
        && props.imgs[0].arquivos.length > 0"
        :style="'background-image: url(' + getImagePath(props.imgs[0].pasta, 1) + '.jpg);'"
        @mouseenter="mostrarFlip()"
        @mouseleave="ocultaFlip()"
        id="bloco-projeto"
        class="relative flex cursor-pointer m-0 mt-6 rounded-xl overflow-hidden bg-branco bg-cover bg-top justify-center items-center min-h-96 md:min-h-35rem"
    >
        <div id="bloco-conteudo" :class="['absolute h-full w-full backdrop-blur-lg transition-all duration-300 p-4 md:p-12', {'btn-oculto': !flipAtivo}]">
            <div class="text-branco transition-all duration-300 scale-100">
                <h5>{{ props.periodo }}</h5>
                <h2 class="min-h-20">{{ props.titulo }}</h2>
                <hr class="my-4 mx-0 border-laranja">
                <p class="mb-8 pr-4 text-xs md:text-base">{{ props.descr }}</p>
                <span class="flex">
                    <Icon
                        v-for="tec in tecnicasProjeto" :key="tec.id"
                        :icon="tec.icone"
                        class="size-6 mr-4 md:size-10 md:mr-6"
                    />
                </span>
            </div>
        </div>
        <BotaoPadrao
            @click="abrirProjeto()"
            v-show="!flipAtivo"
            btnTexto="Ver mais"
            class="m-auto"
        />
        <span>
            <ProjetoDetalhes
                @ocultarProjeto="abrirProjeto"
                v-show="projetoAberto"
                :infoProjeto = props
                :tecsProjeto = tecnicasProjeto
            />
        </span>
    </section>
</template>

<script setup>
    import { Icon } from '@iconify/vue'
    import { onMounted, ref } from 'vue'
    import BotaoPadrao from './BotaoPadrao.vue'
    import ProjetoDetalhes from '@/components/layouts/ProjetoDetalhes.vue'
    import axios from 'axios'

    //dados
    const flipAtivo = ref(true)
    const tecnicasGeral = ref([])
    const tecnicasProjeto = ref([])
    const projetoAberto = ref(false)

    //props
    const props = defineProps({
        titulo: String,
        descr: String,
        tecs: Object,
        periodo: Number,
        imgs: Object,
        link: String,
        tipo: String
    })

    //métodos
    function abrirProjeto() {
        projetoAberto.value = !projetoAberto.value
    }
    function mostrarFlip() {
        flipAtivo.value = false
    }
    function ocultaFlip() {
        flipAtivo.value = true
    }
    const getTecnologias = async () => {
        try {
            const response = await axios.get('http://localhost:3000/conhecimentos')
            tecnicasGeral.value = response.data
            montaTecnologias()
        } catch(error) {
            console.error("Erro ao buscar os dados:", error);
        }
    }
    function montaTecnologias() {
        if(props.tecs) {
            for(let i = 0; i < props.tecs.length; i++) {
                for(let t = 0; t < tecnicasGeral.value.length; t++) {
                    if(props.tecs[i] == tecnicasGeral.value[t].id) {
                        tecnicasProjeto.value.push(tecnicasGeral.value[t])
                    }
                }
            }
        }
    }
    function getImagePath(pasta, arquivo) {
        return `../src/assets/img/projetos/${pasta}/${arquivo}`
    }

    //lifecycle
    onMounted(() => {
        getTecnologias()
    })
</script>

<style scoped lang="scss">
    #bloco-projeto {
        #bloco-conteudo {
            background-image: linear-gradient(rgba(#000, .8), rgba(#000, .3)) !important;
        }

        .btn-oculto {
            opacity: .3;
            
            div {
                opacity: 0;
                transform: scale(.5);
            }
        }
    }
</style>