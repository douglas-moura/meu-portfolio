<template>
    <div class="pop-up">
        <section id="projeto-aberto" class="">
            <div class="conteudo">
                <div class="col-30 projeto-infos">
                    <h2>Nome Projeto</h2>
                    <br>
                    <ul>
                        <li>Informação</li>
                    </ul>
                    <hr>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <hr>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <hr>
                    <h4>Tecnologias:</h4>
                    <ul>
                        <li>Tecnologia</li>
                        <li>Tecnologia</li>
                        <li>Tecnologia</li>
                    </ul>
                </div>
                <section class="col-70 box-sub projeto-galeria">
                    <span>
                        <Icon icon="akar-icons:circle-x" @click="fecharProjeto()" />
                    </span>
                    <div>
                        <div class="col-90 galeria-principal">
                            <picture>
                                <ImagemCmp
                                    src="site-1"
                                />
                            </picture>
                        </div>
                        <div class="col-10 galeria-minis">
                            <picture>
                                <ImagemCmp
                                    src="site-1"
                                />
                            </picture>
                            <picture>
                                <ImagemCmp
                                    src="site-1"
                                />
                            </picture>
                            <picture>
                                <ImagemCmp
                                    src="site-1"
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
    import { onMounted } from 'vue'
    import { Icon } from '@iconify/vue'
    import ImagemCmp from '@/components/partials/ImagemCmp.vue'

    //props
    defineProps({
        statusPopup: Boolean
    })

    //lifeCycle
    onMounted(() => {
        console.log('montado')
    })
    
    //emitt
    const emit = defineEmits(['ocultarProjeto'])

    //métodos
    function fecharProjeto() {
        emit('ocultarProjeto')
    }
</script>

<style lang="scss" scoped>
    #projeto-aberto {
        height: 35rem;
        aspect-ratio: 1 / .5;
        margin: auto !important;
        position: fixed;
        border-radius: 1rem;
        overflow: hidden;
        background-color: $branco;
        border: .2rem solid $branco;
        
        .conteudo {
            overflow: hidden;
            
            >div {
                height: 100% !important;
            }
    
            .projeto-infos {
                background-color: $preto;
                padding: 2rem;
                color: $cinza-claro;

                hr {
                    margin: 1rem 0;
                    border: .1rem solid $cinza-medio;
                }
            }
            
            .projeto-galeria {
                span {
                    height: 3rem;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;

                    svg {
                        color: $laranja;
                        height: 1.5rem;
                        width: 1.5rem;
                    }
                }

                div {
                    height: calc(100% - 3rem);
                    
                    >div {
                        overflow-y: scroll;
                        overflow-x: hidden;
                        height: 100%;
                        
                    }
                    
                    .galeria-minis {
                        padding-right: .25rem;

                        picture {
                            opacity: .5;
                            cursor: pointer;
                            transition: .1s;
                            border: .1rem solid $cinza-medio;
                            border-radius: .25rem;
                            overflow: hidden;

                            &:not(:last-child) {
                                margin-bottom: .5rem;
                            }

                            &:hover {
                                opacity: 1;
                            }
                        }
                    }
                    
                    .galeria-principal {
                        border-radius: .5rem !important;
                        border: .2rem solid $cinza-claro;
                        
                        &::-webkit-scrollbar {
                            width: 0 !important;
                        }
                    }
                }
            }
        }
    }
</style>