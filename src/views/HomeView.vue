<template>
    <main id="pag-home-">
        <section class="sessao-default">
            <div class="linha-sessao grid-cols-3 gap-8">
                <div class="col-conteudo col-span-2 justify-center minhas-infos-">
                    <h1>Douglas Moura</h1>
                    <h5 class="mb-4 text-orange-500">_Desenvolvedor Web Front-End - São Paulo | SP</h5>
                    <p class="w-4/5 mb-4">Lorem ipsum dolor sit amet, consecbtetur adipisicing elit. Debitis, quia nesciunt vel similique atque, sunt unde delectus distinctio error dignissimos dolore? Repellat, voluptatem modi expedita pariatur itaque quod alias. Blanditiis.</p>
                    <span class="flex gap-2" id="contatos-">
                        <Icon icon="akar-icons:envelope" height="1.2rem" />
                        <p class="mr-6">douglas12345.dsm@gmail.com</p>
                        <Icon icon="akar-icons:whatsapp-fill" height="1rem" />
                        <p class="mr-6">+55 11 95305-5285</p>
                    </span>
                </div>
                <div class="relative">
                    <div class="circulo"></div>
                    <ImagemCmp
                        src="foto-perfil-2"
                        formato="redondo"
                        textoAlt="Minha Foto"
                    />
                </div>
            </div>
            <div class="linha-sessao grid-cols-10" id="tecnologias-">
                <span><Icon class="size-10" icon="akar-icons:html-fill" /></span>
                <span><Icon class="size-10" icon="akar-icons:css-fill" /></span>
                <span><Icon class="size-10" icon="akar-icons:javascript-fill" /></span>
                <span><Icon class="size-10" icon="akar-icons:sass-fill" /></span>
                <span><Icon class="size-10" icon="akar-icons:vue-fill" /></span>
                <!--
                <span><Icon icon="akar-icons:php-fill" /></span>
                <span><Icon icon="bi:filetype-sql" /></span>
                <span><Icon icon="akar-icons:vscode-fill" /></span>
                <span><Icon icon="akar-icons:github-fill" /></span>
                -->
            </div>
        </section>
    </main>
</template>

<script setup>
    import ImagemCmp from '@/components/partials/ImagemCmp.vue'
    import { Icon } from '@iconify/vue'
</script>

<style scoped lang="scss">
</style>