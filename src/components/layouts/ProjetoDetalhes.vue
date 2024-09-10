<template>
    <div v-show="ativoPopup" class="pelicula" >
        <section id="projeto-aberto" class="box-sub">
            <div class="icone">
                <Icon icon="akar-icons:circle-x" @click="fecharProjeto()" />
            </div>
            <span class="box-sub">
                <h2>Nome Projeto</h2>
                <ul>
                    <li>Informação</li>
                </ul>
                <br>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem esse beatae autem consequuntur temporibus quod enim sequi ab qui, laboriosam minima vero, ratione in tempore! Excepturi ipsum omnis fugit quo!</p>
            </span>
            <div class="conteudo box-sub">
                <div class="col-20 galeria-projeto">
                    <picture>
                        <imagemCmp
                            src="site-1"
                        />
                    </picture>
                    <picture>
                        <imagemCmp
                            src="site-1"
                        />
                    </picture>
                    <picture>
                        <imagemCmp
                            src="site-1"
                        />
                    </picture>
                    <picture>
                        <imagemCmp
                            src="site-1"
                        />
                    </picture>
                    <picture>
                        <imagemCmp
                            src="site-1"
                        />
                    </picture>
                    <picture>
                        <imagemCmp
                            src="site-1"
                        />
                    </picture>
                    <picture>
                        <imagemCmp
                            src="site-1"
                        />
                    </picture>
                    <picture>
                        <imagemCmp
                            src="site-1"
                        />
                    </picture>
                    <picture>
                        <imagemCmp
                            src="site-1"
                        />
                    </picture>
                </div>
                <div class="col-80 imagem-projeto">
                    <picture>
                        <imagemCmp
                            src="site-1"
                        />
                    </picture>
                </div>
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
        top: 0;
        right: 0;
        width: 50%;
        height: calc(100dvh - 6rem);
        margin: 3rem !important;
        position: fixed;
        float: right;
        background-color: $branco;

        .icone {
            height: 5% !important;
            display: flex;
            justify-content: flex-end;

            svg {
                color: $laranja;
                height: 2rem;
                width: 2rem;
            }
        }
        
        span {
            height: 20% !important;
        }

        .conteudo {
            height: 75% !important;
            overflow: hidden;
            
            div {
                height: 100%;
                overflow-y: scroll;
            }

            .galeria-projeto {
                padding-right: .5rem;
                picture {
                    img {
                        margin-bottom: 1rem;
                    }
                }
            }
        }
    }
</style>