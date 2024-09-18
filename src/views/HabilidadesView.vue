<template>
    <main>
        <section class="sessao-default">
            <h1>Habilidades</h1>
            <h2 class="text-laranja pb-2 mb-8 border-b-2 border-laranja xl:w-4/5 2xl:w-full">Front-End</h2>
            <div class="xl:w-10/12 2xl:w-3/4 linha-sessao grid-cols-5 mb-20">
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
                    <p class="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet</p>
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
            <h2 class="text-laranja pb-2 mb-8 border-b-2 border-laranja xl:w-4/5 2xl:w-full">Back-End</h2>
            <div class="xl:w-10/12 2xl:w-3/4 linha-sessao grid-cols-5 mb-20">
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
            <h2 class="text-laranja pb-2 mb-8 border-b-2 border-laranja xl:w-4/5 2xl:w-full">Softwares</h2>
            <div class="xl:w-10/12 2xl:w-3/4 linha-sessao grid-cols-5 mb-20">
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
            <h2 class="text-laranja pb-2 mb-8 border-b-2 border-laranja xl:w-4/5 2xl:w-full">Outros Conhecimentos</h2>
            <div class="xl:w-10/12 2xl:w-3/4 linha-sessao grid-cols-5 mb-20">
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
        
    }
</style>