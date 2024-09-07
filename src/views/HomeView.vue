<template>
    <main id="pag-home">
        <section>
            <div>
                <div id="minhas-infos">
                    <h1>Douglas Moura</h1>
                    <h5>_Desenvolvedor Web FrontEnd - São Paulo | SP</h5>
                    <br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, quia nesciunt vel similique atque, sunt unde delectus distinctio error dignissimos dolore? Repellat, voluptatem modi expedita pariatur itaque quod alias. Blanditiis.</p>
                </div>
                <picture>
                    <div id="circulo"></div>
                    <ImagemComp
                        src="foto-perfil"
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
    import ImagemComp from '@/components/layouts/ImagemComp.vue'
    import { Icon } from '@iconify/vue'
</script>

<style scoped>
    #pag-home {
        display: flex;

        section {
            margin: auto;
            max-width: 75%;

            div {
                #minhas-infos {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    position: relative;
                    width: 60%;

                    h5 {
                        color: var(--laranja);
                    }
                }

                picture {
                    width: 30%;
                    position: relative;
                }
            }

            #tecnologias {
                margin-top: 2rem;
                width: 65%;

                span {
                    svg {
                        height: 2rem;
                        width: 2rem;
                        stroke-width: 1;
                    }
                }
            }
        }

        #circulo {
            left: -2rem;
            top: -1rem;
            width: 100%;
            aspect-ratio: 1 / 1;
            border: .1rem solid var(--laranja);
            border-radius: 50%;
            position: absolute;
        }
    }
</style>