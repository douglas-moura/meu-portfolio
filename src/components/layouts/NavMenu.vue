<template>
    <aside>
        <section id="menu" class="box-sub" v-on:mouseenter="abrirMenu()" v-on:mouseleave="abrirMenu()">
            <nav id="links-nav">
                <span id="infos-pessoais" class="box-sub">
                    <h3>Douglas Moura</h3>
                    <h5>_Desenvolvedor Web FrontEnd</h5>
                    <hr>
                </span>
                <RouterLink to="/">
                    <vue-feather size="18" type="user"></vue-feather>
                    <p class="textLink">Início</p>
                </RouterLink>
                <RouterLink to="/habilidades">
                    <vue-feather size="18" type="star"></vue-feather>
                    <p class="textLink">Habilidades</p>
                </RouterLink>
                <RouterLink to="/projetos">
                    <vue-feather size="18" type="folder"></vue-feather>
                    <p class="textLink">Projetos</p>
                </RouterLink>
            </nav>
            <div id="links-sociais">
                <vue-feather id="btn-mais" size="14" type="more-horizontal"></vue-feather>
                <vue-feather class="btn-social" size="14" type="mail"></vue-feather>
                <vue-feather class="btn-social" size="14" type="linkedin"></vue-feather>
                <vue-feather class="btn-social" size="14" type="github"></vue-feather>
            </div>
        </section>
    </aside>
</template>

<script setup>
    import { RouterLink } from 'vue-router'

    //método
    function abrirMenu() {
        let menu = document.querySelector('section#menu')
        let navBox = document.querySelector('nav#links-nav')
        let nome = document.querySelector('span#infos-pessoais')
        let textLink = document.getElementsByClassName('textLink')
        let iconeSocial = document.getElementsByClassName('btn-social')

        if(menu.classList.contains('menu-aberto')) {
            // fecha menu
            for(let i = 0; i < Object.keys(textLink).length; i++) {
                textLink[i].style.opacity = '0'
                textLink[i].style.marginLeft = '0'
            }
            for(let i = 0; i < Object.keys(iconeSocial).length; i++) {
                iconeSocial[i].style.marginRight = '-1rem'
                iconeSocial[i].style.opacity = '0'
            }
            setTimeout(() => {
                nome.style.opacity = '0'
                nome.style.transform = 'scaleY(0)'
                menu.style.minWidth = '50%'
            }, 300)
            setTimeout(() => {
                menu.classList.remove('menu-aberto')
                nome.style.display = 'none'
            }, 350)
        } else {
            // abre menu
            menu.style.minWidth = '300%'
            setTimeout(() => {
                menu.classList.add('menu-aberto')
                nome.style.display = 'block'
            }, 300)
            setTimeout(() => {
                for(let i = 0; i < Object.keys(textLink).length; i++) {
                    textLink[i].style.opacity = '1'
                    textLink[i].style.marginLeft = '1rem'
                }
                for(let i = 0; i < Object.keys(iconeSocial).length; i++) {
                    iconeSocial[i].style.marginRight = '.5rem'
                    iconeSocial[i].style.opacity = '1'
                }
                nome.style.opacity = '1'
                nome.style.transform = 'scaleY(1)'
            }, 350)
        }
    }
</script>

<style scoped>
    aside {
        position: fixed;
        flex-direction: row;
        height: calc(100dvh);
        align-items: center;

        section {
            transition: .3s;
            min-width: 50%;
            min-height: 60dvh;
            max-height: 60dvh;
            background-color: var(--branco);
            margin: auto 1rem;
            justify-content: space-between;
            box-shadow: 0 3rem 7rem var(--sombra);

            &:hover {
                div {
                    display: block;
                }
            }
            
            #links-nav {     
                transition: .2s;    
                margin-bottom: 4rem;
                transition: .2s;

                #infos-pessoais {
                    transition: .2s;
                    display: none;
                    opacity: 0;
                    transform: scaleY(0);
                    transform-origin: top;
                    margin-bottom: 2rem;
    
                    h5 {
                        color: var(--laranja);
                        font-weight: 400;
                    }
    
                    hr {
                        margin-top: .5rem;
                        border: .05rem solid var(--cinza-claro);
                        width: 80%;
                    }
                }

                a {
                    min-height: 1rem;
                    padding: .5rem;
                    align-items: center;
                    border-radius: .25rem;
                    margin-bottom: .5rem;

                    &:hover {
                        background-color: var(--cinza-claro);

                        i {
                            color: var(--cinza-escuro);
                        }
                    }

                    i {
                        color: var(--laranja);
                    }

                    p {
                        transition: .2s;
                        display: none;
                        font-size: .8rem;
                        margin-left: .5rem;
                        opacity: 0;
                    }
                }
            }

            #links-sociais {
                i {
                    border: .1rem solid var(--cinza-medio);
                    padding: .5rem;
                    border-radius: 50%;
                    color: var(--cinza-medio);
                }

                .btn-social {
                    opacity: 0;
                    display: none;
                    margin-right: -1rem;
                    transition: .2s;
                }
            }
        }

        .menu-aberto {
            position: absolute;

            #links-nav {
                a {
                    p {
                        display: block;
                    }
                }
            }

            #links-sociais {
                #btn-mais {
                    display: none;
                }

                .btn-social {
                    display: inline-block;
                }
            }
        }
    }

    header, nav {
        flex-direction: column;
    }
</style>