<template>

    <h1>Hola Mundo Counter 03
        
    </h1>
    <h3>Contador: {{ contador }}</h3>
    <h3>Cuadrado: {{ contador*contador }}</h3>

    <div>
        <button @click="contador++">+1</button>
        <button @click="contador--">-1</button>
    </div>

</template>

<script lang="ts" src="./Mycounter03">


</script>

