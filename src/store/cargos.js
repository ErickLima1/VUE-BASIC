import { defineStore } from "pinia";
import { ref, computed } from "vue";


export const userCargos = defineStore('Cargos', () => {
    //state
    const cargos = ref([]);
    
    //actions
    const adicionarCargo = (funcionario) => {
        cargos.value = cargos.value.filter((x) => x.id !== funcionario.id)
        cargos.value.push(funcionario)
    };

    const removerCargo = (id) => {
        cargos.value = cargos.value.filter((x) => x.id !== id);
    };
    //getters
    const totalCargos = computed(() => cargos.value.length);

    return {
        adicionarCargo,
        totalCargos,
        cargos,
        removerCargo,

    }
});