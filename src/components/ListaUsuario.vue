<script setup>
    import { ref, computed, provide } from 'vue';
    import Usuario from './Usuario.vue';
    import {  useFetch  } from "../composables/fetch.js";
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const { data: pessoas, carregando, error } = useFetch(`https://reqres.in/api/users?page=2`);

    const idSelecao = ref([]);
    const aviso = "Em Caso de Duvidas, Contate o Suporte!";
 
    const adicionarSelecao = (evento) => {
        if(idSelecionado(evento)) {
            idSelecao.value = idSelecao.value.filter((x) => x !== evento);
            return;
        };

        idSelecao.value.push(evento);
    };

    const pessoasSelecionada = computed(() => {
        if(!pessoas.value) return [];

        return pessoas.value.filter((x) => idSelecao.value.includes(x.id));
    });

    const idSelecionado = (id) => {
        return idSelecao.value.includes(id);
    }

    const redirecionarFuncionario = (id) => {
        router.push(`/equipe/${id}`);
    };

    provide("aviso", aviso);
    

</script>

<template>
    <div class="selecionados">
        <span v-for="pm in pessoasSelecionada" :key="pm.id" class="card">
            {{ pm.first_name }}
        </span>
    </div>

    <div v-if="carregando">
        <h3>Carregando...</h3>
    </div>
<!-- eslint-disable vue/no-use-v-if-with-v-for -->
    <div class="pessoas" v-else>
        <div v-for="pessoa in pessoas" :key="pessoa.id " v-if="!error">
            <button class="botao" @click="redirecionarFuncionario(pessoa.id)">Ver Funcionarios</button>
            <Usuario :pessoa="pessoa" 
                :selecao="idSelecionado(pessoa.id)"
                @selecao="adicionarSelecao">
            
            </Usuario>
        </div>
        <div v-else>
            {{ error }}
        </div>
    </div>
</template>

<style scoped>
    :deep(.aviso) {
        color: red;
    }
    .selecionados {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
    }


    .selecionados > span {
        background: #6fd66f;
        padding: 5px;
        font-size: 0.785rem;
        border-radius: 5px;
        margin-bottom: 10px; /* Adicione uma margem inferior para espaçamento vertical */
    }

    .pessoas {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: 10px;
        justify-items: center;
    }
    
    .pessoa {
        background-color: lightgray;
        padding: 10px;
    }

    .formulario {
        margin: 0 auto;
        padding: 5px;
        width: 200px;
        background-color: darkcyan;
    }

    label {
        margin-top: 3px;
        background-color: darkcyan;
    }

    input {
        outline: none;
    }

    p {
        text-align: center;
    }


</style>