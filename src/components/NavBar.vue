<script setup>
    import { userCargos } from "../store/cargos";
    import { storeToRefs } from 'pinia';

    const store = userCargos();
    const { totalCargos } = storeToRefs(store);

    const menus = [
        {id: 1, nome: "Home", path: '/'},
        {id: 2, nome: "Equipe", path: '/equipe'},

    ];
</script>

<template>
    <nav>
        <span>Estudando Vue</span>
        Total Cargo {{ totalCargos }}
        <ul>
            <li v-for="menu in menus" :key="menu.id">
                <router-link :to="menu.path">{{ menu.nome}}</router-link>
            </li>

        </ul>
    </nav>
</template>


<style scoped>
nav{
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #cae8e8;
}
ul {
    display: flex;
    list-style-type: none;
}

ul li {
    padding: 0 5px;
}

ul li a {
    text-decoration: none;
    color: #117177;
}

</style>