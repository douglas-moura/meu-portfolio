<template>
    <div class="pop-up">
        <section id="projeto-aberto" :class="oculto ? 'ocultar' : ''">
            <span>
                <Icon icon="akar-icons:circle-x" @click="fecharProjeto()" />
            </span>
            <div class="conteudo">
                <div class="col-30 projeto-infos">
                    <h2>{{ infoProjeto.titulo }}</h2>
                    <br>
                    <p>{{ infoProjeto.tipo }}</p>
                    <hr>
                    <ul>
                        <li>{{ infoProjeto.descr }}</li>
                    </ul>
                    <hr>
                    <p class="acessar-projeto">
                        <Icon icon="akar-icons:arrow-right" />
                        <a :href="infoProjeto.link" target="_blank">Acesse</a>
                    </p>
                    <hr>
                    <h4>Tecnologias Usadas:</h4>
                    <ul id="tecs-lista">
                        <li v-for="tec in tecsProjeto" :key="tec.id">
                            <Icon :icon="tec.icone" />
                            {{ tec.nome }}
                        </li>
                    </ul>
                </div>
                <section class="col-70 box-sub projeto-galeria">
                    <div>
                        <div class="col-90 galeria-principal">
                            <picture v-if="infoProjeto && infoProjeto.imgs && infoProjeto.imgs.length > 0 && infoProjeto.imgs[0].arquivos && infoProjeto.imgs[0].arquivos.length > 0">
                                <ImagemCmp
                                    :src="getImagePath(infoProjeto.imgs[0].pasta, imgAberta)"
                                />
                            </picture>
                        </div>
                        <div class="col-10 galeria-minis" v-if="infoProjeto.imgs && infoProjeto.imgs.length && infoProjeto.imgs[0].arquivos.length">
                            <picture v-for="(arquivo, index) in infoProjeto.imgs[0].arquivos" :key="index" >
                                <ImagemCmp
                                    :src="getImagePath(infoProjeto.imgs[0].pasta, arquivo)" :alt="'Imagem ' + index"
                                    @click="abrirImagem(arquivo)"                             
                                />
                            </picture>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </div>
</template>

<script setup>
    import { Icon } from '@iconify/vue'
    import { ref } from 'vue'
    import ImagemCmp from '@/components/partials/ImagemCmp.vue'
    
    //dados
    const oculto = ref(false)
    const imgAberta = ref(1)

    //props
    defineProps({
        infoProjeto: Object,
        tecsProjeto: Object
    })

    //emitt
    const emit = defineEmits(['ocultarProjeto'])

    //métodos
    function fecharProjeto() {
        oculto.value = true
        setTimeout(() => {
            oculto.value = false
            imgAberta.value = 1
            emit('ocultarProjeto')
        }, 500)
    }
    function getImagePath(pasta, arquivo) {
        return `projetos/${pasta}/${arquivo}`
    }
    function abrirImagem(img) {
        imgAberta.value = img
    }
</script>

<style lang="scss" scoped>
    #projeto-aberto {
        cursor: auto;
        width: 60%;
        height: 80%;
        margin: auto !important;
        position: fixed;
        border-radius: 1rem;
        overflow: hidden;
        background-color: rgba($cinza-escuro, .7);
        border: .2rem solid $branco;
        animation-name: slideTop;
        animation-duration: .8s;
        transition: .4s;
                
        span {
            height: 3rem;
            background-color: $preto;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;

            svg {
                color: $laranja;
                height: 2rem;
                width: 2rem;
                margin: .5rem;
            }
        }

        .conteudo {
            overflow: hidden;
            height: calc(95% - 4rem);
            margin: 1rem !important;
            
            div, section {
                height: 100%;
            }
            
            .projeto-infos {
                padding: 2rem;
                color: $cinza-claro;

                hr {
                    margin: 1rem 0;
                    border: .1rem solid $cinza-medio;
                }

                .acessar-projeto {
                    display: flex;
                    align-items: center;
                    
                    a {
                        font-size: 1rem;
                        color: $cinza-claro !important;
                    }

                    svg {
                        margin: 0 .5rem !important;
                        height: 1.5rem;
                        width: 1.5rem;
                    }
                }

                #tecs-lista {
                    li {
                        margin-top: .5rem !important;
                        display: flex;
                        align-items: center;
                        line-height: 2rem;

                        svg {
                            margin-right: .5rem;
                            height: 1.5rem;
                            width: 1.5rem;
                        }
                    }
                }
            }
            
            .projeto-galeria {
                div {

                    >div {
                        overflow-y: scroll;
                        overflow-x: hidden;
                    }
                    
                    .galeria-minis {
                        padding-right: .25rem;

                        &::-webkit-scrollbar-thumb {
                            background: $laranja !important; 
                        }
                        
                        picture {
                            opacity: .5;
                            cursor: pointer !important;
                            transition: .1s;
                            border: .2rem solid $cinza-claro;
                            border-radius: .25rem;
                            aspect-ratio: 1 / 2;
                            overflow: hidden;

                            &:not(:last-child) {
                                margin-bottom: 1rem;
                            }

                            &:hover {
                                opacity: 1;
                            }    
                        }
                    }
                    
                    .galeria-principal {
                        border-radius: .5rem !important;
                        border: .2rem solid $cinza-medio;
                        cursor: pointer !important;

                        &::-webkit-scrollbar {
                            width: 0 !important;
                        }
                    }
                }
            }
        }
    }

    .ocultar {
        transform: translateY(-300%);
    }
</style>