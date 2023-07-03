<template>
    <div>
        <h1 ref="titulo">Pagina Não Encontrada.</h1>
        <Aviso ref="avisoRef"/>
        <button @click="mostrarMenssagem()">Chama alerta</button>
    </div>
</template>

<script setup>
    import { onMounted, provide, ref } from "vue";
    import Aviso from "../components/aviso.vue";

    const titulo = ref(null);
    const avisoRef = ref(null);

    onMounted(() => {
        console.log(titulo.value);
        titulo.value.style.color = 'blue';
        titulo.value.innerText = 'Alterado';
        console.log(avisoRef.value);
    });

    const mostrarMenssagem = () => {
        avisoRef.value.chamaAlerta();
    };

    provide('aviso', 'Pagina Invalida');
</script>

<style scoped>
    
</style>