<template>
    <main>
        <section id="sobre-mim" class="sessao-default">
            <div class="linha-sessao grid-cols-3 gap-8">
                <div class="col-conteudo col-span-2 justify-center minhas-infos-">
                    <h1>Douglas Moura</h1>
                    <h5 class="mb-4 text-orange-500 font-extrabold">_Desenvolvedor Web Front-End - São Paulo | SP</h5>
                    <p class="xl:w-11/12 2xl:w-4/5 mb-8">Sou um desenvolvedor frontend apaixonado por criar interfaces digitais intuitivas e eficientes. Atualmente, foco meus conhecimentos no JavaScript e seu framework Vue Js 3. Sempre em busca de novos aprendizados, meu objetivo é aprimorar continuamente minhas habilidades e trazer experiências únicas para a web.</p>
                    <span class="flex gap-2">
                        <p class="mr-4 p-4 border-cinza-escuro border-4 rounded-full flex">
                            <Icon class="mr-4" icon="akar-icons:envelope" height="1.2rem" />
                            douglas12345.dsm@gmail.com
                        </p>
                        <p class="mr-4 p-4 border-cinza-escuro border-4 rounded-full flex">
                            <Icon class="mr-4" icon="akar-icons:whatsapp-fill" height="1rem" />
                            +55 11 95305-5285
                        </p>
                    </span>
                    <div class="linha-sessao grid-cols-10 mt-20">
                        <Icon class="xl:size-8 2xl:size-10" icon="akar-icons:html-fill" />
                        <Icon class="xl:size-8 2xl:size-10" icon="akar-icons:css-fill" />
                        <Icon class="xl:size-8 2xl:size-10" icon="akar-icons:javascript-fill" />
                        <Icon class="xl:size-8 2xl:size-10" icon="akar-icons:sass-fill" />
                        <Icon class="xl:size-8 2xl:size-10" icon="akar-icons:vue-fill" />
                        <!--
                        <span><Icon icon="akar-icons:php-fill" /></span>
                        <span><Icon icon="bi:filetype-sql" /></span>
                        <span><Icon icon="akar-icons:vscode-fill" /></span>
                        <span><Icon icon="akar-icons:github-fill" /></span>
                        -->
                    </div>
                </div>
                <div class="relative">
                    <div class="w-full absolute rounded-full border-4 border-laranja aspect-square -top-6 -left-4 animate-slide-right"></div>
                    <ImagemCmp
                        src="foto-perfil-2"
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