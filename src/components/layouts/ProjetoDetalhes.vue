<template>
    <div class="bg-branco backdrop-blur-2xl bg-opacity-80 z-50 w-full h-full top-0 left-0 fixed flex justify-center items-center transition-all animate-fade-in duration-100">
        <section id="projeto-aberto" :class="['grid grid-rows-12 cursor-auto h-4/5 m-auto fixed rounded-2xl overflow-hidden bg-cinza-escuro bg-opacity-90 border-2 border-branco animate-slide-top md:w-4/5 2xl:w-3/5', {'ocultar': oculto}]">
            <div class="row-span-1 bg-preto flex justify-end w-full">
                <span class="text-right h-full aspect-square flex">
                    <Icon class="text-laranja size-4/6 m-auto 2xl:size-3/6" icon="akar-icons:circle-x" @click="fecharProjeto()" />
                </span>
            </div>
            <div id="conteudo-projeto" class="grid row-span-11 m-4 overflow-hidden grid-cols-1 lg:grid-cols-3">
                <div class="overflow-y-scroll p-8 text-cinza-claro mb-8 lg:mb-0">
                    <h2>{{ infoProjeto.titulo }}</h2>
                    <br>
                    <p>{{ infoProjeto.tipo }}</p>
                    <hr class="my-4 mx-0 border-fina border-cinza-claro opacity-50">
                    <ul class="mb-4">
                        <li class="text-sm 2xl:text-base">{{ infoProjeto.descr }}</li>
                    </ul>
                    <hr class="my-4 mx-0 border-fina border-cinza-claro opacity-50">
                    <p class="flex items-center">
                        <Icon class="my-0 mx-2 h-6 w-6" icon="akar-icons:arrow-right" />
                        <a class="text-branco text-base 2xl:text-xl" :href="infoProjeto.link" target="_blank">Acesse</a>
                    </p>
                    <hr class="my-4 mx-0 border-fina border-cinza-claro opacity-50">
                    <h4>Tecnologias Usadas:</h4>
                    <ul>
                        <li class="mt-2 flex items-center leading-8 2xl:text-base 2xl:leading-10" v-for="tec in tecsProjeto" :key="tec.id">
                            <Icon class="mr-2 size-6 2xl:size-8" :icon="tec.icone" /> {{ tec.nome }}
                        </li>
                    </ul>
                </div>
                <section class="h-full overflow-hidden col-span-2 grid grid-cols-10 gap-2 px-8 lg:px-0">
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
        transition: .5s !important;

        #conteudo-projeto {    
            #galeria-minis {
                &::-webkit-scrollbar-thumb {
                    background-color: #dc5f00;
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