<template>
    <main>
        <section class="sessao-default">
            <h1>Habilidades</h1>
            <h2 class="text-sm text-laranja pb-2 mb-8 border-b-2 border-laranja w-full md:text-xl lg:w-3/5 xl:w-4/5 2xl:text-xl">Front-End</h2>
            <div class="linha-sessao grid-cols-1 mb-24 md:grid-cols-2 md:mb-20 lg:grid-cols-4 xl:w-10/12 2xl:grid-cols-5 2xl:w-3/4">
                <span class="box-habilidade group">
                    <Icon class="size-16 min-h-16 flex mb-4 group-hover:text-laranja md:size-12 lg:mb-2 lg:size-10" icon="akar-icons:html-fill" />
                    <p class="text-xs md:text-sm 2xl:text-base">HTML5 é a linguagem de marcação usada para estruturar e apresentar conteúdo na web.</p>
                </span>
                <span class="box-habilidade group">
                    <Icon class="size-16 min-h-16 flex mb-4 group-hover:text-laranja md:size-12 lg:mb-2 lg:size-10" icon="akar-icons:css-fill" />
                    <p class="text-xs md:text-sm 2xl:text-base">CSS3 é uma linguagem de estilo utilizada para definir a aparência e o layout de páginas web.</p>
                </span>
                <span class="box-habilidade group">
                    <Icon class="size-16 min-h-16 flex mb-4 group-hover:text-laranja md:size-12 lg:mb-2 lg:size-10" icon="akar-icons:javascript-fill" />
                    <p class="text-xs md:text-sm 2xl:text-base">JavaScript é uma linguagem de programação para adicionar interatividade e dinamismo.</p>
                </span>
                <span class="box-habilidade group">
                    <Icon class="size-16 min-h-16 flex mb-4 group-hover:text-laranja md:size-12 lg:mb-2 lg:size-10" icon="akar-icons:sass-fill" />
                    <p class="text-xs md:text-sm 2xl:text-base">Sass é uma linguagem de extensão do CSS que facilita a escrita de estilos mais organizados e reutilizáveis. </p>
                </span>
                <span class="box-habilidade group">
                    <Icon class="size-16 min-h-16 flex mb-4 group-hover:text-laranja md:size-12 lg:mb-2 lg:size-10" icon="akar-icons:vue-fill" />
                    <p class="text-xs md:text-sm 2xl:text-base">Vue.js é um framework para construção de interfaces e aplicações. Ele oferece uma abordagem reativa e baseada em componentes.</p>
                </span>
                <span class="box-habilidade group">
                    <Icon class="size-16 min-h-16 flex mb-4 group-hover:text-laranja md:size-12 lg:mb-2 lg:size-10" icon="flowbite:tailwind-solid" />
                    <p class="text-xs md:text-sm 2xl:text-base">O Tailwind é um framework para estilização de interfaces web.</p>
                </span>
                <span class="box-habilidade group">
                    <Icon class="size-16 min-h-16 flex mb-4 group-hover:text-laranja md:size-12 lg:mb-2 lg:size-10" icon="teenyicons:npm-solid" />
                    <p class="text-xs md:text-sm 2xl:text-base">NPM é o gerenciador de pacotes para o ambiente Node.js. Ele facilita a instalação, atualização e gerenciamento de bibliotecas JavaScript</p>
                </span>
            </div>
            <h2 class="text-sm text-laranja pb-2 mb-8 border-b-2 border-laranja w-full md:text-xl lg:w-3/5 xl:w-4/5 2xl:text-xl">Back-End</h2>
            <div class="linha-sessao grid-cols-1 mb-24 md:grid-cols-2 md:mb-20 lg:grid-cols-4 xl:w-10/12 2xl:grid-cols-5 2xl:w-3/4">
                <span class="box-habilidade group">
                    <Icon class="size-16 min-h-16 flex mb-4 group-hover:text-laranja md:size-12 lg:mb-2 lg:size-10" icon="akar-icons:php-fill" />
                    <p class="text-xs md:text-sm 2xl:text-base">PHP é uma linguagem de script de servidor amplamente utilizada para o desenvolvimento web.</p>
                </span>
                <span class="box-habilidade group">
                    <Icon class="size-16 min-h-16 flex mb-4 group-hover:text-laranja md:size-12 lg:mb-2 lg:size-10" icon="bi:filetype-sql" />
                    <p class="text-xs md:text-sm 2xl:text-base">SQL (Structured Query Language) é uma linguagem de programação utilizada para gerenciar e manipular bancos de dados relacionais.</p>
                </span>
                <span class="box-habilidade group">
                    <Icon class="size-16 min-h-16 flex mb-4 group-hover:text-laranja md:size-12 lg:mb-2 lg:size-10" icon="simple-icons:phpmyadmin" />
                    <p class="text- md:text-sm 2xl:text-base">O phpMyAdmin é uma ferramenta de administração de bancos de dados MySQL e MariaDB baseada em web.</p>
                </span>
            </div>
            <h2 class="text-sm text-laranja pb-2 mb-8 border-b-2 border-laranja w-full md:text-xl lg:w-3/5 xl:w-4/5 2xl:text-xl">Softwares</h2>
            <div class="linha-sessao grid-cols-1 mb-24 md:grid-cols-2 md:mb-20 lg:grid-cols-4 xl:w-10/12 2xl:grid-cols-5 2xl:w-3/4">
                <span class="box-habilidade group">
                    <Icon class="size-16 min-h-16 flex mb-4 group-hover:text-laranja md:size-12 lg:mb-2 lg:size-10" icon="akar-icons:vscode-fill" />
                    <p class="text-xs md:text-sm 2xl:text-base">Visual Studio Code é um editor de código-fonte leve e poderoso, desenvolvido pela Microsoft.</p>
                </span>
                <span class="box-habilidade group">
                    <Icon class="size-16 min-h-16 flex mb-4 group-hover:text-laranja md:size-12 lg:mb-2 lg:size-10" icon="akar-icons:github-fill" />
                    <p class="text-xs md:text-sm 2xl:text-base">GitHub Desktop é uma aplicação de interface gráfica que simplifica o uso do Git e GitHub para gerenciamento de código.</p>
                </span>
                <span class="box-habilidade group">
                    <Icon class="size-16 min-h-16 flex mb-4 group-hover:text-laranja md:size-12 lg:mb-2 lg:size-10" icon="bi:git" />
                    <p class="text-xs md:text-sm 2xl:text-base">Git é um sistema de controle de versão distribuído que permite rastrear mudanças no código-fonte.</p>
                </span>
                <span class="box-habilidade group">
                    <Icon class="size-16 min-h-16 flex mb-4 group-hover:text-laranja md:size-12 lg:mb-2 lg:size-10" icon="devicon-plain:photoshop" />
                    <p class="text-xs md:text-sm 2xl:text-base">Adobe Photoshop é um software de edição e manipulação de imagens.</p>
                </span>
                <span class="box-habilidade group">
                    <Icon class="size-16 min-h-16 flex mb-4 group-hover:text-laranja md:size-12 lg:mb-2 lg:size-10" icon="simple-icons:adobeillustrator" />
                    <p class="text-xs md:text-sm 2xl:text-base">Adobe Illustrator é um software de design gráfico vetorial que permite criar e editar ilustrações, logotipos e gráficos com precisão.</p>
                </span>
            </div>
            <h2 class="text-sm text-laranja pb-2 mb-8 border-b-2 border-laranja w-full md:text-xl lg:w-3/5 xl:w-4/5 2xl:text-base">Outros Conhecimentos</h2>
            <div class="linha-sessao grid-cols-1 mb-24 md:grid-cols-2 md:mb-20 lg:grid-cols-4 xl:w-10/12 2xl:grid-cols-5 2xl:w-3/4">
                <span class="box-habilidade group">
                    <Icon class="size-16 min-h-16 flex mb-4 group-hover:text-laranja md:size-12 lg:mb-2 lg:size-10" icon="devicon-plain:wordpress-wordmark" />
                    <p class="text-xs md:text-sm 2xl:text-base">WordPress é um sistema de gerenciamento de conteúdo que permite criar e gerenciar websites e blogs.</p>
                </span>
            </div>
        </section>
    </main>
</template>

<script setup>
    import { Icon } from '@iconify/vue'
</script>

<style scoped lang="scss"></style>