<template>
    <main>
        <section id="sobre-mim" class="sessao-default">
            <div class="linha-sessao gap-8 grid-cols-1 md:grid-cols-3">
                <div class="col-conteudo justify-center md:col-span-2">
                    <h1>Douglas Moura</h1>
                    <h5 class="mb-4 text-orange-500 font-extrabold  lg:text-sm">_Desenvolvedor Web Full Stack - São Paulo | SP</h5>
                    <p class="text-xs mb-8 md:text-xl md:w-11/12 lg:text-xs lg:mb-4 2xl:w-4/5">Sou um desenvolvedor frontend apaixonado por criar interfaces digitais intuitivas e eficientes. Atualmente, foco meus conhecimentos no JavaScript e seu framework Vue Js 3. Sempre em busca de novos aprendizados, meu objetivo é aprimorar continuamente minhas habilidades e trazer experiências únicas para a web.</p>
                    <span class="flex flex-col gap-2 md:flex-row">
                        <p class="text-xs rounded-full flex items-center p-2 border-cinza-escuro border-2 md:text-base md:mr-4 md:p-4 lg:text-xs 2xl:border-4">
                            <Icon class="mr-4 size-4 md:size-6 lg:size-4" icon="akar-icons:envelope" />
                            douglas12345.dsm@gmail.com
                        </p>
                        <p class="text-xs rounded-full flex items-center p-2 border-cinza-escuro border-2 md:text-base md:mr-4 md:p-4 lg:text-xs 2xl:border-4">
                            <Icon class="mr-4 size-4 md:size-6 lg:size-4" icon="akar-icons:whatsapp-fill" />
                            +55 11 95305-5285
                        </p>
                    </span>
                    <div class="linha-sessao mt-10 grid-cols-5 md:mt-20 md:grid-cols-10">
                        <Icon class="size-8 md:size-10 lg:size-8 2xl:size-14" icon="akar-icons:html-fill" />
                        <Icon class="size-8 md:size-10 lg:size-8 2xl:size-14" icon="akar-icons:css-fill" />
                        <Icon class="size-8 md:size-10 lg:size-8 2xl:size-14" icon="akar-icons:javascript-fill" />
                        <Icon class="size-8 md:size-10 lg:size-8 2xl:size-14" icon="akar-icons:sass-fill" />
                        <Icon class="size-8 md:size-10 lg:size-8 2xl:size-14" icon="akar-icons:vue-fill" />
                        <!--
                        <span><Icon icon="akar-icons:php-fill" /></span>
                        <span><Icon icon="bi:filetype-sql" /></span>
                        <span><Icon icon="akar-icons:vscode-fill" /></span>
                        <span><Icon icon="akar-icons:github-fill" /></span>
                        -->
                    </div>
                </div>
                <div class="relative flex flex-col justify-center my-8 mx-auto w-10/12 md:my-0 md:mx-0 md:w-full">
                    <div class="w-full absolute rounded-full border-2 border-laranja aspect-square animate-slide-right -top-4 -left-3 md:border-4 md:-top-8 md:-left-6 lg:my-auto lg:border-2 lg:-top-2"
                    >
                    </div>
                    <ImagemCmp
                        src="foto-perfil"
                        formato="redondo"
                        textoAlt="Minha Foto"
                    />
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
    import ImagemCmp from '@/components/partials/ImagemCmp.vue'
    import { Icon } from '@iconify/vue'
</script>

<style scoped lang="scss">
    #sobre-mim {
        @apply xl:w-4/5 2xl:w-2/3
    }
</style>