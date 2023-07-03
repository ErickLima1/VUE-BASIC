<script setup>
import Cabecalho from './Cabecalho.vue';

</script>

<template>
  <!-- eslint-disable vue/require-component-is -->
  <component is="NavBar" v-once/>
  
  <header>
    <slot name="cabecalho">

    </slot>    
  </header>

  <main>
    <!-- <Usuario/> -->
    <ListaUsuario/>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>

</template>

<style>

</style>
