<template>
    <div class="container">
        <h1 class="title">Container 02</h1>
        <h3 class="counter">Contador: {{ contador }}</h3>
        <h3 class="square">Cuadrado: {{ contador * contador }}</h3>

        <div class="button-group">
            <button @click="suma" class="button increment">+1</button>
            <button @click="resta" class="button decrement">-1</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { useSumar } from './sumarBoton.js';

const props = defineProps<{
    value: number;
}>();

const { contador, suma, resta } = useSumar(props.value);
</script>

<style scoped>
.container {
    text-align: center;
    margin: 20px;
    font-family: 'Arial', sans-serif;
    background-color: #1a1a1a;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    border: 2px solid #00ffcc; /* Borde brillante */
}

.title {
    font-size: 2.5rem;
    color: #00ffcc; /* Color neón */
    margin-bottom: 20px;
    text-shadow: 0 0 10px rgba(0, 255, 204, 0.8);
}

.counter,
.square {
    font-size: 1.5rem;
    margin: 10px 0;
    color: #fff;
}

.button-group {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.button {
    padding: 15px 25px;
    font-size: 18px;
    cursor: pointer;
    margin: 0 10px;
    border: none;
    border-radius: 8px;
    transition: transform 0.2s, background-color 0.3s ease;
    color: white;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.7);
    background: linear-gradient(90deg, #00ffcc, #00ccff); /* Fondo degradado */
}

.increment {
    background-color: transparent; /* Fondo transparente para el degradado */
}

.increment:hover {
    background-color: #00cc99; /* Verde más oscuro al pasar el mouse */
    transform: scale(1.05);
}

.decrement {
    background-color: transparent; /* Fondo transparente para el degradado */
}

.decrement:hover {
    background-color: #cc0000; /* Rojo más oscuro al pasar el mouse */
    transform: scale(1.05);
}
</style>
