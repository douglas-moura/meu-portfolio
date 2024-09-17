<template>
    <div class="bg-branco backdrop-blur-md bg-opacity-70 z-50 w-full h-full top-0 left-0 fixed flex justify-center items-center transition-all animate-fade-in">
        <section id="projeto-aberto" :class="['sessao-default cursor-auto h-4/5 2xl:w-3/5 m-auto fixed rounded-2xl overflow-hidden bg-cinza-escuro bg-opacity-90 border-2 border-branco animate-slide-top', {'ocultar': oculto}]">
            <span class="h-12 bg-preto flex flex-row justify-end">
                <Icon class="text-laranja h-8 w-8 m-2" icon="akar-icons:circle-x" @click="fecharProjeto()" />
            </span>
            <div id="conteudo-projeto" class="grid grid-cols-3 m-4">
                <div class="h-full p-8 text-cinza-claro">
                    <h2>{{ infoProjeto.titulo }}</h2>
                    <br>
                    <p>{{ infoProjeto.tipo }}</p>
                    <hr class="my-4 mx-0 border-2 border-cinza-claro opacity-50">
                    <ul class="mb-4">
                        <li>{{ infoProjeto.descr }}</li>
                    </ul>
                    <hr class="my-4 mx-0 border-2 border-cinza-claro opacity-50">
                    <p class="flex items-center">
                        <Icon class="my-0 mx-2 h-6 w-6" icon="akar-icons:arrow-right" />
                        <a class="text-branco text-base" :href="infoProjeto.link" target="_blank">Acesse</a>
                    </p>
                    <hr class="my-4 mx-0 border-2 border-cinza-claro opacity-50">
                    <h4>Tecnologias Usadas:</h4>
                    <ul>
                        <li class="mt-2 flex items-center leading-8" v-for="tec in tecsProjeto" :key="tec.id">
                            <Icon class="mr-2 w-6 h-6" :icon="tec.icone" /> {{ tec.nome }}
                        </li>
                    </ul>
                </div>
                <section class="h-full overflow-hidden col-span-2 grid grid-cols-10 gap-2">
                    <div id="galeria-principal" class="col-span-9 rounded-lg border-2 border-cinza-medio cursor-pointer overflow-y-scroll overflow-x-hidden">
                        <picture v-if="infoProjeto && infoProjeto.imgs && infoProjeto.imgs.length > 0 && infoProjeto.imgs[0].arquivos && infoProjeto.imgs[0].arquivos.length > 0">
                            <ImagemCmp
                                :src="getImagePath(infoProjeto.imgs[0].pasta, imgAberta)"
                            />
                        </picture>
                    </div>
                    <div id="galeria-minis" class="pr-1 col-span-1 overflow-y-scroll" v-if="infoProjeto.imgs && infoProjeto.imgs.length && infoProjeto.imgs[0].arquivos.length">
                        <picture class="hover:opacity-100 last:mb-0 opacity-50 cursor-pointer border-2 border-cinza-claro mb-3 rounded-sm aspect-square overflow-hidden" v-for="(arquivo, index) in infoProjeto.imgs[0].arquivos" :key="index" >
                            <ImagemCmp
                                :src="getImagePath(infoProjeto.imgs[0].pasta, arquivo)" :alt="'Imagem ' + index"
                                @click="abrirImagem(arquivo)"                             
                            />
                        </picture>
                    </div>
                </section>
            </div>
        </section>
    </div>
</template>

<script setup>
    import ImagemCmp from '@/components/partials/ImagemCmp.vue'
    import { Icon } from '@iconify/vue'
    import { ref } from 'vue'
    
    //dados
    const oculto = ref(false)
    const imgAberta = ref(1)

    //props
    defineProps({
        infoProjeto: Object,
        tecsProjeto: Object
    })

    //emitt
    const emit = defineEmits(['ocultarProjeto'])

    //métodos
    function fecharProjeto() {
        oculto.value = true
        setTimeout(() => {
            oculto.value = false
            imgAberta.value = 1
            emit('ocultarProjeto')
        }, 1200)
    }
    function getImagePath(pasta, arquivo) {
        return `projetos/${pasta}/${arquivo}`
    }
    function abrirImagem(img) {
        imgAberta.value = img
    }
</script>

<style lang="scss" scoped>
    #projeto-aberto {
        transition: 1s !important;

        #conteudo-projeto {
            height: calc(100% - 5rem);
    
            #galeria-minis {
                &::-webkit-scrollbar-thumb {
                    @apply bg-laranja;
                }
            }
    
            #galeria-principal {
                &::-webkit-scrollbar {
                    width: 0 !important;
                }
            }
        }
    }

    .ocultar {
        transform: translateY(-300%);
    }
</style>