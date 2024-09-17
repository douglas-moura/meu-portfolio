<template>
    <main>
        <section class="sessao-default">
            <h1>Habilidades</h1>
            <h2 class="text-laranja pb-2 mb-8 border-b-2 border-laranja">Front-End</h2>
            <div id="linha-habil" class="linha-sessao grid-cols-5 mb-20">
                <span class="box-habilidade group">
                    <Icon class="h-12 w-12 mb-4 group-hover:text-laranja" icon="akar-icons:html-fill" />
                    <p class="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet</p>
                </span>
                <span class="box-habilidade group">
                    <Icon class="h-12 w-12 mb-4 group-hover:text-laranja" icon="akar-icons:css-fill" />
                    <p class="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet</p>
                </span>
                <span class="box-habilidade group">
                    <Icon class="h-12 w-12 mb-4 group-hover:text-laranja" icon="akar-icons:javascript-fill" />
                    <p class="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet</p>
                </span>
                <span class="box-habilidade group">
                    <Icon class="h-12 w-12 mb-4 group-hover:text-laranja" icon="akar-icons:sass-fill" />
                    <Icon class="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet</Icon>
                </span>
                <span class="box-habilidade group">
                    <Icon class="h-12 w-12 mb-4 group-hover:text-laranja" icon="akar-icons:vue-fill" />
                    <p class="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet</p>
                </span>
                <span class="box-habilidade group">
                    <Icon class="h-12 w-12 mb-4 group-hover:text-laranja" icon="flowbite:tailwind-solid" />
                    <p class="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet</p>
                </span>
                <span class="box-habilidade group">
                    <Icon class="h-12 w-12 mb-4 group-hover:text-laranja" icon="teenyicons:npm-solid" />
                    <p class="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet</p>
                </span>
            </div>
            <h2 class="text-laranja pb-2 mb-8 border-b-2 border-laranja">Back-End</h2>
            <div id="linha-habil" class="linha-sessao grid-cols-5 mb-20">
                <span class="box-habilidade group">
                    <Icon class="h-12 w-12 mb-4 group-hover:text-laranja" icon="akar-icons:php-fill" />
                    <p class="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet</p>
                </span>
                <span class="box-habilidade group">
                    <Icon class="h-12 w-12 mb-4 group-hover:text-laranja" icon="bi:filetype-sql" />
                    <p class="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet</p>
                </span>
                <span class="box-habilidade group">
                    <Icon class="h-12 w-12 mb-4 group-hover:text-laranja" icon="simple-icons:phpmyadmin" />
                    <p class="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet</p>
                </span>
            </div>
            <h2 class="text-laranja pb-2 mb-8 border-b-2 border-laranja">Softwares</h2>
            <div id="linha-habil" class="linha-sessao grid-cols-5 mb-20">
                <span class="box-habilidade group">
                    <Icon class="h-12 w-12 mb-4 group-hover:text-laranja" icon="akar-icons:vscode-fill" />
                    <p class="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet</p>
                </span>
                <span class="box-habilidade group">
                    <Icon class="h-12 w-12 mb-4 group-hover:text-laranja" icon="akar-icons:github-fill" />
                    <p class="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet</p>
                </span>
                <span class="box-habilidade group">
                    <Icon class="h-12 w-12 mb-4 group-hover:text-laranja" icon="bi:git" />
                    <p class="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet</p>
                </span>
                <span class="box-habilidade group">
                    <Icon class="h-12 w-12 mb-4 group-hover:text-laranja" icon="devicon-plain:photoshop" />
                    <p class="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet</p>
                </span>
                <span class="box-habilidade group">
                    <Icon class="h-12 w-12 mb-4 group-hover:text-laranja" icon="simple-icons:adobeillustrator" />
                    <p class="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet</p>
                </span>
            </div>
            <h2 class="text-laranja pb-2 mb-8 border-b-2 border-laranja">Outros Conhecimentos</h2>
            <div id="linha-habil" class="linha-sessao grid-cols-5 mb-20">
                <span class="box-habilidade group">
                    <Icon class="h-12 w-12 mb-4 group-hover:text-laranja" icon="devicon-plain:wordpress-wordmark" />
                    <p class="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet</p>
                </span>
            </div>
        </section>
    </main>
</template>

<script setup>
    import { Icon } from '@iconify/vue'
</script>

<style scoped lang="scss">
    #linha-habil {
        width: 70% !important;
    }
</style>