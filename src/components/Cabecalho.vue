<script setup>
    import { storeToRefs } from 'pinia';
    import { useLogin } from '../store/login';

    const store = useLogin();
    const { usuarioLogado, logado } = storeToRefs(store);

    const subTitulo = '<p style="color:silver">Tutorias Vue, .Net</p>';

    const mensagem = "Apredendo Slot";
    const mostrarNome = () => {
        alert('Apredendo Slot');
    };

</script>

<template>
    <div>
        <h1 class="titulo" v-if="logado">Bem Vindo(a) {{ usuarioLogado }}</h1>
        <span v-html="subTitulo"></span>
        <slot :mensagem="mensagem" :funcao="mostrarNome"></slot>
        <!-- <span v-text="subTitulo"></span>
        <span>{{ subTitulo }}</span> -->
    </div>
</template>
  
<style scoped>
.titulo {
    margin: 0 auto;
    text-align:  center;
    color: red;

}
</style>