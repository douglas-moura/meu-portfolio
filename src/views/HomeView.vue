<template>
    <main id="pag-home">
        <section>
            <div>
                <div id="minhas-infos">
                    <h1>Douglas Moura</h1>
                    <h5>_Desenvolvedor Web Front-End - São Paulo | SP</h5>
                    <br>
                    <p>Lorem ipsum dolor sit amet, consecbtetur adipisicing elit. Debitis, quia nesciunt vel similique atque, sunt unde delectus distinctio error dignissimos dolore? Repellat, voluptatem modi expedita pariatur itaque quod alias. Blanditiis.</p>
                    <br>
                    <span id="contatos">
                        <Icon icon="akar-icons:envelope" height="1.2rem" />
                        <p>douglas12345.dsm@gmail.com</p>
                        <Icon icon="akar-icons:whatsapp-fill" height="1rem" />
                        <p>+55 11 95305-5285</p>
                    </span>
                </div>
                <picture>
                    <CirculoCmp
                        top=-1.5
                        left=-2
                        largura=100
                        tipo="frente"
                        cor="laranja"
                    />
                    <ImagemCmp
                        src="foto-perfil-2"
                        formato="redondo"
                        textoAlt="Minha Foto"
                    />
                </picture>
            </div>
            <div id="tecnologias">
                <span><Icon icon="akar-icons:html-fill" /></span>
                <span><Icon icon="akar-icons:css-fill" /></span>
                <span><Icon icon="akar-icons:javascript-fill" /></span>
                <span><Icon icon="akar-icons:vue-fill" /></span>
                <span><Icon icon="akar-icons:sass-fill" /></span>
                <span><Icon icon="akar-icons:php-fill" /></span>
                <span><Icon icon="akar-icons:data" /></span>
                <span><Icon icon="akar-icons:vscode-fill" /></span>
                <span><Icon icon="akar-icons:github-fill" /></span>
            </div>
        </section>
    </main>
</template>

<script setup>
    import ImagemCmp from '@/components/layouts/ImagemCmp.vue'
    import CirculoCmp from '@/components/layouts/CirculoCmp.vue'
    import { Icon } from '@iconify/vue'
</script>

<style scoped lang="scss">
    #pag-home {
        section {
            width: 70%;

            div {
                #minhas-infos {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    position: relative;
                    width: 60%;

                    h5 {
                        color: $laranja;
                    }

                    #contatos {
                        display: flex;
                        align-items: center;

                        svg {
                            margin-right: .5rem;
                        }

                        p {
                            margin-right: 2rem;
                        }
                    }
                }

                picture {
                    width: 30%;
                    position: relative;

                    #circulo {
                        animation-name: slideRigth;
                        animation-duration: 2s;
                    }
                }
            }

            #tecnologias {
                margin-top: 2rem;
                width: 65% !important;

                span {
                    svg {
                        height: 2rem;
                        width: 2rem;
                        stroke-width: 1;
                    }
                }
            }
        }
    }
</style>