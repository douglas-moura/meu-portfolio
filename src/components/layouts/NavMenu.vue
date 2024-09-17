<template>
    <aside class="h-dvh justify-center animate-fade-left">
        <section
            id="menu"
            :class="['fixed min-w-3.5 min-h-96 max-h-96 my-auto mx-4 p-2 flex flex-col justify-between rounded-lg bg-white transition-all duration-300 ease-out', {'menu-aberto': menuAberto.menu}]"
            @mouseenter="abrirMenu()"
            @mouseleave="abrirMenu()"
        >
            <nav id="links-nav">
                <RouterLink class="flex-row min-h-2 p-2 items-center rounded-md mb-2 hover:bg-zinc-200 group" to="/">
                    <vue-feather class="text-orange-600 size-5 group-hover:text-zinc-900" type="user"></vue-feather>
                    <p :class="['text-link p-0 m-0 hidden text-sm opacity-0 ease-in duration-150', {'menu-aberto-link': menuAberto.link}]">Sobre mim</p>
                </RouterLink>
                <RouterLink class="flex-row min-h-2 p-2 items-center rounded-md mb-2 hover:bg-zinc-200 group" to="/projetos">
                    <vue-feather class="text-orange-600 size-5 group-hover:text-zinc-900" type="folder"></vue-feather>
                    <p :class="['text-link p-0 m-0 hidden text-sm opacity-0 ease-in duration-150', {'menu-aberto-link': menuAberto.link}]">Projetos</p>
                </RouterLink>
                <RouterLink class="flex-row min-h-2 p-2 items-center rounded-md mb-2 hover:bg-zinc-200 group" to="/habilidades">
                    <vue-feather class="text-orange-600 size-5 group-hover:text-zinc-900" type="code"></vue-feather>
                    <p :class="['text-link p-0 m-0 hidden text-sm opacity-0 ease-in duration-150', {'menu-aberto-link': menuAberto.link}]">Minhas Habilidades</p>
                </RouterLink>
            </nav>
            <span id="links-social" :class="['w-fit pt-2 border-t-2 border-zinc-300 transition-all', {'menu-aberto-social': menuAberto.icone}]">
                <Icon id="more" class="size-4 m-2 text-zinc-500" icon="akar-icons:more-horizontal" />
                <a href="mailto:douglas12345.dsm@gmail.com" class="h-8 w-8 hidden opacity-0 transition-all mr-0">
                    <Icon class="size-4 text-cinza-escuro m-auto" icon="akar-icons:envelope" />
                </a>
                <a href="https://www.linkedin.com/in/douglas-m-462ba6a4/" target="_blank" class="h-8 w-8 hidden opacity-0 transition-all mr-0">
                    <Icon class="size-4 text-cinza-escuro m-auto" icon="akar-icons:linkedin-fill" />
                </a>
                <a href="https://github.com/douglas-moura" target="_blank" class="h-8 w-8 hidden opacity-0 transition-all mr-0">
                    <Icon class="size-4 text-cinza-escuro m-auto" icon="akar-icons:github-fill" />
                </a>
            </span>
        </section>
    </aside>
</template>

<script setup>
    import { RouterLink } from 'vue-router'
    import { Icon } from '@iconify/vue'
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
                menuAberto.value.menu = false
                setTimeout(() => {
                    menuAberto.value.link = false
                    menuAberto.value.icone = false
                    menu.style.minWidth = '2%'
                }, 100)
            }, 350)
        } else {
            setTimeout(() => {
                menu.style.minWidth = '15%'
                setTimeout(() => {
                    menuAberto.value.menu = true
                }, 300)
                setTimeout(() => {
                    menuAberto.value.icone = true
                    menuAberto.value.link = true
                }, 350)
            }, 400)
        }
    }
</script>

<style scoped lang="scss">
    #menu {
        box-shadow: .5rem 0 5rem rgba(#000, .2);
    }

    .menu-aberto {
        p {
            display: block !important;
        }

        #links-social {
            #more {
                display: none !important;
            }
            
            a {
                display: inline-flex !important;
            }
        }
    }

    .menu-aberto-link {
        opacity: 1 !important;
        margin-left: 1rem !important;
    }

    .menu-aberto-social {
        a {
            opacity: 1 !important;
            
        }

        a:not(:last-of-type) {
            margin-right: 1rem;
        }
    }
</style>