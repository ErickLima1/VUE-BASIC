<script setup>
    import { userCargos } from "../store/cargos";
    import { storeToRefs } from 'pinia';
    const store = userCargos();

    const { cargos } = storeToRefs(store);

</script>

<template>
    <div>
        <h1>Equipe do Projeto...</h1>
        <div v-for="c in cargos" :key="c.id">
            {{ c.cargo }} {{ c.nome }}
            <button @click="store.removerCargo(c.id)">Remover</button>
        </div>
    </div>
</template>
    

<style scoped>

</style>