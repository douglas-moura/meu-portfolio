<template>
    <section id="bloco-projeto" class="">
        <div>
            <div class="box-sup">
                <h3>Projeto</h3>
                <br>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere soluta eaque nam, illum ut ad aute.</p>
            </div>
            <picture></picture>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>
    #bloco-projeto {
        background-color: var(--branco);
        width: 100% !important;
        margin: 0 !important;
        margin-bottom: 2rem !important;

        div {
            picture {
                background-color: var(--cinza-escuro);
                width: 100%;
                aspect-ratio: 1 / .5;
                width: 50%;
            }

            >div {
                width: 50%;
            }
        }
    }
</style>