<template>
    <section id="bloco-projeto" @mouseenter="mostrarFlip()" @mouseleave="ocultaFlip()">
        <div :class="!flipAtivo ? 'btnOculto' : ''">
            <div>
                <h5>Março 2024</h5>
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
            v-show="!flipAtivo"
            btnTexto="Ver mais"
            @click="abrirProjeto()"
        />
    </section>  
</template>

<script setup>
    import { Icon } from '@iconify/vue'
    import { onMounted, ref } from 'vue'
    import BotaoPadrao from './BotaoPadrao.vue'
    import axios from 'axios'

    //dados
    const flipAtivo = ref(true)
    const tecnicasGeral = ref([])
    const tecnicasProjeto = ref([])

    //emitt
    const emit = defineEmits(['exibirProjeto'])

    //props
    const props = defineProps({
        titulo: String,
        descr: String,
        tecs: Array
    })

    //métodos
    function mostrarFlip() {
        flipAtivo.value = false
    }
    function ocultaFlip() {
        flipAtivo.value = true
    }
    function abrirProjeto() {
        emit('exibirProjeto')
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
        background-color: $branco;
        background-image: url('../../assets/img/site-1.jpg');
        background-size: cover;
        background-position: center top;
        min-height: 30rem;
        justify-content: center;
        align-items: center;
        
        >div {
            background-image: linear-gradient(rgba(#000, .8), rgba(#000, .6));
            height: 100%;
            padding: 3rem;
            backdrop-filter: blur(15px);
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
    
                span {    
                    svg {
                        height: 2rem;
                        width: 2rem;
                        margin-right: 1rem;
                    }
                }

                hr {
                    margin: 1rem 0;
                    border: .1rem solid $laranja
                }
            }
        }

        .btnOculto {
            opacity: .5;
            
            div {
                opacity: 0;
                transform: scale(.5);
            }
        }
    }
</style>