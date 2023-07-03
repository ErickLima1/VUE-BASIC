<script setup>
import Cabecalho from './components/Cabecalho.vue';
import Visualizacao from './components/Visualizacao.vue';

</script>

<template>
  <visualizacao>
    <!-- <template v-slot:="cabecalho">
      <cabecalho>
        <template v-slot="{ mensagem, funcao }">
          <p class="titulo">{{mensagem}}</p>
          <button @click="funcao">Clique Aqui</button>
        </template>

      </cabecalho>
    </template> -->
    <router-view></router-view>
    <template #footer>Rodapé Página</template>
  </visualizacao>

</template>

<style>

</style>
