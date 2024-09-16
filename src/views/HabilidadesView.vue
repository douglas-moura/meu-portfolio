<template>
    <main id="minhas-habilidades">
        <section>
            <h1>Habilidades</h1>
            <h2 class="col-80">Front-End</h2>
            <div class="grade grade-5 col-50">
                <span class="">
                    <Icon icon="akar-icons:html-fill" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet</p>
                </span>
                <span class="">
                    <Icon icon="akar-icons:css-fill" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet</p>
                </span>
                <span class="">
                    <Icon icon="akar-icons:javascript-fill" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet</p>
                </span>
                <span class="">
                    <Icon icon="akar-icons:sass-fill" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet</p>
                </span>
                <span class="">
                    <Icon icon="akar-icons:vue-fill" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet</p>
                </span>
                <span class="">
                    <Icon icon="flowbite:tailwind-solid" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet</p>
                </span>
                <span class="">
                    <Icon icon="teenyicons:npm-solid" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet</p>
                </span>
            </div>
            <h2 class="col-80">Back-End</h2>
            <div class="grade grade-5 col-50">
                <span class="">
                    <Icon icon="akar-icons:php-fill" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet</p>
                </span>
                <span class="">
                    <Icon icon="bi:filetype-sql" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet</p>
                </span>
                <span class="">
                    <Icon icon="simple-icons:phpmyadmin" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet</p>
                </span>
            </div>
            <h2 class="col-80">Softwares</h2>
            <div class="grade grade-5 col-50">
                <span class="">
                    <Icon icon="akar-icons:vscode-fill" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet</p>
                </span>
                <span class="">
                    <Icon icon="akar-icons:github-fill" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet</p>
                </span>
                <span class="">
                    <Icon icon="bi:git" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet</p>
                </span>
                <span class="">
                    <Icon icon="devicon-plain:photoshop" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet</p>
                </span>
                <span class="">
                    <Icon icon="simple-icons:adobeillustrator" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet</p>
                </span>
            </div>
            <h2 class="col-80">Outros Conhecimentos</h2>
            <div class="grade grade-5 col-50">
                <span class="">
                    <Icon icon="devicon-plain:wordpress-wordmark" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet</p>
                </span>
            </div>
        </section>
    </main>
</template>

<script setup>
    import { Icon } from '@iconify/vue'
</script>

<style scoped lang="scss">
    #minhas-habilidades {
        section {
            h1 {
                margin-bottom: 2rem !important;
            }

            h2 {
                color: $laranja;
                padding-bottom: .5rem;
                margin-bottom: 2rem;
                border-bottom: .1rem solid $laranja;
            }

            div {
                margin-bottom: 5rem;

                span {
                    border: .1rem solid $cinza-escuro;
                    background-color: $cinza-claro;
                    aspect-ratio: 1 / 1;
                    display: flex;
                    flex-direction: column;
                    padding: 1rem;
                    overflow: hidden;
                    margin-bottom: 1rem;

                    &:hover {
                        border-color: $laranja;

                        svg {
                            color: $laranja;
                        }
                    }

                    svg {
                        height: 3rem;
                        width: 3rem;
                        margin-bottom: 1rem;
                    }

                    p {
                        font-size: .8rem;
                    }
                }
            }
        }        
    }
</style>