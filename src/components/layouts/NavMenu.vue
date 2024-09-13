<template>
    <aside>
        <section id="menu" :class="menuAberto.menu ? 'menu-aberto sombra' : 'sombra'" @mouseenter="abrirMenu()" @mouseleave="abrirMenu()">
            <nav id="links-nav">
                <RouterLink to="/">
                    <vue-feather size="18" type="user"></vue-feather>
                    <p :class="menuAberto.link ? 'text-link-aberto text-link' : 'text-link'">Sobre mim</p>
                </RouterLink>
                <RouterLink to="/projetos">
                    <vue-feather size="18" type="folder"></vue-feather>
                    <p :class="menuAberto.link ? 'text-link-aberto text-link' : 'text-link'">Projetos</p>
                </RouterLink>
                <RouterLink to="/habilidades">
                    <vue-feather size="18" type="code"></vue-feather>
                    <p :class="menuAberto.link ? 'text-link-aberto text-link' : 'text-link'">Minhas Habilidades</p>
                </RouterLink>
                <RouterLink to="/projetos">
                    <vue-feather size="18" type="layers"></vue-feather>
                    <p :class="menuAberto.link ? 'text-link-aberto text-link' : 'text-link'">Experiências</p>
                </RouterLink>
            </nav>
            <div id="links-sociais">
                <vue-feather :class="menuAberto.icone ? 'btn-mais-aberto' : ''" id="btn-mais" size="14" type="more-horizontal"></vue-feather>
                <vue-feather :class="menuAberto.icone ? 'btn-social-aberto btn-social' : 'btn-social'" size="14" type="mail"></vue-feather>
                <vue-feather :class="menuAberto.icone ? 'btn-social-aberto btn-social' : 'btn-social'" size="14" type="linkedin"></vue-feather>
                <vue-feather :class="menuAberto.icone ? 'btn-social-aberto btn-social' : 'btn-social'" size="14" type="github"></vue-feather>
            </div>
        </section>
    </aside>
</template>

<script setup>
    import { RouterLink } from 'vue-router'
    import { ref } from 'vue';

    const menuAberto = ref({
        menu: false,
        link: false,
        icone: false,
    });

    //método
    function abrirMenu() {
        let menu = document.querySelector('section#menu')
        if(menu.classList.contains('menu-aberto')) {
            setTimeout(() => {
                setTimeout(() => {
                    menuAberto.value.link = false
                    menuAberto.value.icone = false
                    menu.style.minWidth = '5%'
                }, 300)
                menuAberto.value.menu = false
            }, 350)
        } else {
            setTimeout(() => {
                menu.style.minWidth = '300%'
                setTimeout(() => {
                    menuAberto.value.menu = true
                }, 300)
                setTimeout(() => {
                    menuAberto.value.link = true
                    menuAberto.value.icone = true
                }, 350)
            }, 400)
        }
    }
</script>

<style scoped lang="scss">
    aside {
        position: fixed;
        flex-direction: row;
        height: calc(100dvh);
        justify-content: center;
        animation-name: slideLeft;
        animation-duration: 2s;

        #menu {
            position: absolute;
            transition: all .3s;
            min-width: 5%;
            min-height: 60dvh;
            max-height: 60dvh;
            background-color: $branco;
            margin: auto 1rem;
            justify-content: space-between;
            padding: .5rem !important;
            border-radius: .5rem !important;
            
            #links-nav {  
                margin-bottom: 4rem;

                a {
                    min-height: 1rem;
                    padding: .5rem;
                    align-items: center;
                    border-radius: .25rem;
                    margin-bottom: .5rem;
                    transition: background-color 0.3s ease;

                    &:hover {
                        background-color: $cinza-claro;
                        i { color: $cinza-escuro; }
                    }

                    i { color: $laranja; }

                    p {
                        display: none;
                        font-size: .8rem;
                        margin-left: .5rem;
                        opacity: 0;
                        transition: all 0.3s ease;
                    }
                }
                
            }

            #links-sociais {
                width: fit-content !important;
                display: flex;
                border-top: .1rem solid rgba($cinza-medio, .3);
                
                i {
                    border: .1rem solid $branco;
                    padding: .5rem;
                    border-radius: 50%;
                    color: $cinza-medio;
                }

                .btn-social {
                    opacity: 0;
                    display: none;
                    margin-right: -1rem;
                    transition: all 0.3s ease;
                }
            }
        }

        //MENU ABERTO
        .menu-aberto {
            #links-nav {
                a {
                    p {
                        display: block !important;
                    }
                }
            }

            #links-sociais {
                #btn-mais {
                    display: none !important;
                }

                .btn-social {
                    display: inline-block !important;
                }
            }
        }

        .text-link-aberto {
            opacity: 1 !important;
            margin-left: 1rem !important;
        }

        .btn-social-aberto {
            opacity: 1 !important;
            margin-right: .2rem !important;
        }
    }
</style>