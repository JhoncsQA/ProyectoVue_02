<template>

    <h1>Hola Mundo</h1>
    <h3>Contador: {{ contador }}</h3>
    <h3>Cuadrado: {{ contador*contador }}</h3>

    <div>
        <button v-on:click="ChangeSumar">+1</button>
        <button v-on:click="ChangeRestar">-1</button>
    </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue';
const contador=ref(100);

const ChangeSumar=()=>{
    contador.value=contador.value+1;
}
const ChangeRestar=()=>{
    contador.value=contador.value-1;

}

console.log("Hola Mundo");

</script>

<style>
    h1{
        color: brown;
    }

</style>
