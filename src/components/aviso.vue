<script setup>
    import { inject } from 'vue';

    const aviso = inject("aviso");

    const chamaAlerta = () => {
        alert('clicou');
    };

    defineExpose( { aviso, chamaAlerta} );

</script>

<template>
    <div class="aviso">
        {{ aviso }}
    </div>
</template>


<style scoped>
    .aviso {
        font-size: .900rem;
        text-align: center;
    }
</style>