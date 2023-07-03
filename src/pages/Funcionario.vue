<template>
    <div>
        <h1>Funcionarios</h1>
        <div v-if="carregando">Carregando...</div>
        <div class="container" v-else>
            <Usuario :pessoa="pessoa"></Usuario>
            <select v-model="cargoSelecionado">
                <option disabled value="">Selecionar o Cargo</option>
                <option v-for="c in cargos" :value="c" :key="c">{{ c }}</option>
            </select>
            <div>
                <button :class="$style.botaoLogin" @click="storeLogin.logarUsuario(pessoa.first_name)">Logar</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import Usuario from "../components/Usuario.vue";
    import { useFetch } from "../composables/fetch";
    import { useRoute } from 'vue-router';
    import { ref, watch } from "vue";
    import { userCargos } from "../store/cargos";
    import { useLogin } from "../store/login";


    const sotre = userCargos();
    const storeLogin = useLogin();
    
    const router = useRoute();
    const id = router.params.id;

    const store = userCargos();

    const { adicionarCargo } = store;
    
    const cargoSelecionado = ref('');
    const cargos = ['Gerência', 'Supervisão', 'Operacional'];
    

    const { data:pessoa, carregando } = useFetch(`https://reqres.in/api/users/${id}`);

    watch(cargoSelecionado, (novoCargo) => {
        const {id, first_name: nome } = pessoa.value;
        const funcionario = { id, nome, cargo: novoCargo };
        adicionarCargo(funcionario);
    });

    const botaoLogin = ref("botao-login");
    const botao = ref("botao");

</script>

<style module>

    .botaoLogin {
        background: #57bf3e;
        border-radius: 10px;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    select {
        border-radius: 10px;
        
    }
   
</style>