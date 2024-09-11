<template>
    <section id="bloco-projeto" @mouseenter="mostrarProjeto()" @mouseleave="ocultaProjeto()">
        <div :class="!ativo ? 'infosOculto' : ''">
            <div>
                <h5>Março 2024</h5>
                <h2>Nome do Projeto</h2>
                <hr>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At perferendis omnis explicabo corporis consectetur eos in quas, deleniti officiis blanditiis corrupti totam perspiciatis molestias amet nulla sequi facilis voluptate officia.</p>
                <span>
                    <Icon icon="akar-icons:github-fill" />
                    <Icon icon="akar-icons:github-fill" />
                    <Icon icon="akar-icons:github-fill" />
                </span>
            </div>
        </div>
        <button v-show="!ativo">
            Ver mais
        </button>
    </section>    
</template>

<script setup>
    import { Icon } from '@iconify/vue'
    import { ref } from 'vue'

    const ativo = ref(true)

    //métodos
    function mostrarProjeto() { ativo.value = false }
    function ocultaProjeto() { ativo.value = true }
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
                        height: 1.5rem;
                        width: 1.5rem;
                        margin-right: 1rem;
                    }
                }

                hr {
                    margin: 1rem 0;
                    border: .1rem solid $laranja
                }
            }
        }

        .infosOculto {
            opacity: .5;
            
            div {
                opacity: 0;
                transform: scale(.5);
            }
        }

        button {
            margin: auto;
            font-size: 1rem;
            font-weight: 700;
            padding: 1rem 2rem;
            border-radius: .5rem;
            border: .2rem solid white;
            color: white;
            background-color: rgba(#000, .5);
            position: absolute;
            cursor: pointer;
        }
    }
</style>