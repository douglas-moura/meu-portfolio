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
        class="col-100"
    >
        <div :class="!flipAtivo ? 'btnOculto' : ''">
            <div>
                <h5>{{ props.periodo }}</h5>
                <h2>{{ props.titulo }}</h2>
                <hr>
                <p>{{ props.descr }}</p>
                <span>
                    <Icon
                        v-for="tec in tecnicasProjeto" :key="tec.id"
                        :icon="tec.icone"
                    />
                </span>
            </div>
        </div>
        <BotaoPadrao
            @click="abrirProjeto()"
            v-show="!flipAtivo"
            btnTexto="Ver mais"
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
        cursor: pointer;
        margin: 0 !important;
        margin-top: 3rem !important;
        border-radius: 1rem;
        overflow: hidden;
        background-image: url('../../assets/img/site-1.jpg');
        background-color: $branco;
        background-size: cover;
        background-position: center top;
        min-height: 30rem;
        justify-content: center;
        align-items: center;
        
        >div {
            background-image: linear-gradient(rgba(#000, .8), rgba(#000, .3));
            height: 100%;
            padding: 3rem;
            backdrop-filter: blur(10px);
            transition: .3s;

            div {
                color: $branco;
                transition: .3s;
                transform: scale(1);

                h2 {
                    min-height: 5rem;
                }

                p {
                    margin-bottom: 2rem;
                    padding-right: 1rem;
                }

                hr {
                    margin: 1rem 0;
                    border: .1rem solid $laranja
                }
    
                span {
                    svg {
                        height: 1.5rem;
                        width: 1.5rem;
                        margin-right: 1rem;
                    }
                }
            }
        }

        .btnOculto {
            opacity: .3;
            
            div {
                opacity: 0;
                transform: scale(.5);
            }
        }
    }
</style>