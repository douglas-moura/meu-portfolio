<template>
    <aside class="h-vh bg-emerald-400 justify-end md:justify-center md:h-dvh w-1/12 fixed">
        <section class="sessao-default bg-branco fixed z-40 w-screen h-fit bottom-0 md:hidden">
            <div class="linha-sessao grid-cols-4 m-0 p-0">
                <RouterLink class="justify-center items-center p-2" to="/">
                    <vue-feather class="text-orange-600 size-4 my-1" type="user"></vue-feather>
                </RouterLink>
                <RouterLink class="justify-center items-center p-2" to="/projetos">
                    <vue-feather class="text-orange-600 size-4 my-1" type="folder"></vue-feather>
                </RouterLink>
                <RouterLink class="justify-center items-center p-2" to="/habilidades">
                    <vue-feather class="text-orange-600 size-4 my-1" type="code"></vue-feather>
                </RouterLink>
                <span class="justify-center items-center p-2 relative flex group" id="links-social-mobile">
                    <Icon class="size-5 text-zinc-500" icon="akar-icons:more-horizontal" @click="abrirMenu('mobile')" />
                    <a :class="['flex bottom-0 absolute p-2 rounded-full m-auto bg-branco transition-all opacity-0', {'hidden': !menuAberto.menu}, {'bottom-12 opacity-100': menuAberto.icone}]" href="mailto:douglas12345.dsm@gmail.com" target="_blank"  id="social-mobile-icone">
                        <Icon class="size-5 text-cinza-escuro m-auto" icon="akar-icons:envelope" />
                    </a>
                    <a :class="['flex bottom-0 absolute p-2 rounded-full m-auto bg-branco transition-all opacity-0', {'hidden': !menuAberto.menu}, {'bottom-24 opacity-100': menuAberto.icone}]" href="https://www.linkedin.com/in/douglas-m-462ba6a4/" target="_blank">
                        <Icon class="size-5 text-cinza-escuro m-auto" icon="akar-icons:linkedin-fill" />
                    </a>
                    <a :class="['flex bottom-0 absolute p-2 rounded-full m-auto bg-branco transition-all opacity-0', {'hidden': !menuAberto.menu}, {'bottom-36 opacity-100': menuAberto.icone}]" href="https://github.com/douglas-moura" target="_blank">
                        <Icon class="size-5 text-cinza-escuro m-auto" icon="akar-icons:github-fill" />
                    </a>
                </span>
            </div>
        </section>
        <section
            id="menu"
            :class="['hidden md:flex animate-fade-left fixed min-w-3.5 min-h-96 max-h-96 my-auto mx-4 p-2 flex-col justify-between rounded-lg bg-white transition-all duration-300 ease-out', {'menu-aberto': menuAberto.menu}]"
            @mouseenter="abrirMenu('desk')"
            @mouseleave="abrirMenu('desk')"
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
    function abrirMenu(tipo) {
        if(tipo == 'mobile') {
            let iconeSocial = document.querySelector('a#social-mobile-icone')
            if(iconeSocial.classList.contains('hidden')) {
                setTimeout(() => { menuAberto.value.menu = !menuAberto.value.menu }, 300)
                setTimeout(() => { menuAberto.value.icone = !menuAberto.value.icone }, 350)
                console.log('cheguei')
            } else {
                setTimeout(() => { menuAberto.value.menu = !menuAberto.value.menu }, 400)
                setTimeout(() => { menuAberto.value.icone = !menuAberto.value.icone }, 300)
            }
        } else {
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
                    menu.style.minWidth = '20%'
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
    }
</script>

<style scoped lang="scss">
    #menu { box-shadow: .5rem 0 5rem rgba(#000, .2); }
    .menu-aberto {
        p { display: block !important; }
        #links-social {
            #more { display: none !important; }
            a { display: inline-flex !important; }
        }
    }
    .menu-aberto-link {
        opacity: 1 !important;
        margin-left: 1rem !important;
    }
    .menu-aberto-social {
        a { opacity: 1 !important; }
        a:not(:last-of-type) { margin-right: 1rem; }
    }
</style>