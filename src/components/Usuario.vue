<script setup>
    import Aviso from './aviso.vue';
    defineProps({
        pessoa: {

        },
        selecao: Boolean,
        
    });
    
    const emit = defineEmits(["selecao"]);

    const enviarEmite = (id) => {
        emit('selecao', id);
    };


</script>

<template>
    <!-- <form class="formulario" @submit.prevent="chamaAlerta">
        <label for="codigoUsuario">Codigo Usuario:</label>
        <input type="text" id="codigoUsuario" name="codigoUsuario" v-model="codigoUsuario" @input="imprimi"/>
    </form>
    <button v-bind:disabled="!habilitarBotao" v-on:click="chamaAlerta" class="botao">Buscar</button> -->

    <div class="perfil">
        <img v-bind:src="pessoa.avatar" alt="perfil">
        <strong>{{ pessoa.first_name }} </strong>
        <span v-email="pessoa.email">{{ pessoa.email }}</span> 
        <button class="botao" @click="$event => enviarEmite(pessoa.id)">{{!selecao ? 'Selecionar' : 'Desmarcar'}}</button>
        <Aviso></Aviso>
    </div>
</template>

<style scoped>

    .perfil {
        margin: 0 auto;
        padding: 5px;
        width: 200px;
        border-radius: 10px;
    }
    
    img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50%;
    }
      

    strong{
        display: block;
    }
    .formulario {
        margin: 0 auto;
        padding: 5px;
        width: 200px;
        background-color: darkcyan;

    }
    label{
        margin-top: 3px;
        background-color: darkcyan;
    }

    input{
        outline: none;
    }

    p {
        text-align: center;
    }

</style>