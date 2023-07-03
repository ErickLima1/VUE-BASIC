import { onBeforeMount, ref } from "vue";

export function useFetch(url) {
    const data = ref(null);
    const error = ref(null);
    const carregando = ref(true);

    const buscarInformacao = async () => {
        try{
            const req = await fetch(url);
            const json = await req.json();
            data.value = json.data;

        }catch(error) {
            carregando.value = "Erro no Servidor";
        } finally {
            carregando.value = false;
        }
    };

    onBeforeMount(async() => {
        await buscarInformacao();
    })

    return {
        data, 
        error,
        carregando,
    };
}