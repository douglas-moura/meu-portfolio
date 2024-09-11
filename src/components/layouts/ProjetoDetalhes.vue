<template>
    <div v-show="ativoPopup" class="pelicula" >
        <section id="projeto-aberto" class="">
            <div class="conteudo">
                <div class="col-30 projeto-infos">
                    <h2>Nome Projeto</h2>
                    <ul>
                        <li>Informação</li>
                    </ul>
                    <br>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem esse beatae autem consequuntur temporibus quod enim sequi ab qui, laboriosam minima vero, ratione in tempore! Excepturi ipsum omnis fugit quo!</p>
                </div>
                <section class="col-70 box-sub projeto-galeria">
                    <span>
                        <Icon icon="akar-icons:circle-x" @click="fecharProjeto()" />
                    </span>
                    <div>
                        <div class="col-80 galeria-principal">
                            <picture>
                                <ImagemCmp
                                    src="site-1"
                                />
                            </picture>
                        </div>
                        <div class="col-20 galeria-minis">
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
    import { ref } from 'vue'
    import { Icon } from '@iconify/vue'
    import ImagemCmp from '@/components/partials/ImagemCmp.vue'

    const ativoPopup = ref(true)

    //métodos
    function fecharProjeto() {
        ativoPopup.value = false
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
        
        .conteudo {
            overflow: hidden;
            
            >div {
                height: 100% !important;
            }
    
            .projeto-infos {
                background-color: $preto;
                padding: 2rem;
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

                        picture:not(:last-child) {
                            margin-bottom: 1rem;
                        }
                    }
                    
                    .galeria-principal {
                        border-radius: .5rem !important;
                        border: .2rem solid $cinza-medio;
                        
                        &::-webkit-scrollbar {
                            width: 0 !important;
                        }
                    }
                }
            }
        }
    }
</style>