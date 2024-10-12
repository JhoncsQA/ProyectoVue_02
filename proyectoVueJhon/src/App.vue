<template>
  <div class="container">
    <h1 class="title">Hello World!</h1>
    <div class="counter-group">
      <Mycounter :value="25" />
      <Mycounter02 :value="4" />
      <Mycounter03 :value="8" />
    </div>
    <div class="mouse-position">
      La Posición del Mouse es: <span>{{ x }}</span>, <span>{{ y }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Mycounter from './Components/MiCounter.vue';
import Mycounter02 from './Components/MiCounter02.vue';
import Mycounter03 from './Components/MiCounter03.vue';
import { useMouse } from './ComposableUno.js';

const { x, y } = useMouse();
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1e1e2f; /* Fondo oscuro */
  color: #00ffcc; /* Color neón */
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  border: 2px solid #00ffcc; /* Borde neón */
}

.title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-shadow: 0 0 10px rgba(0, 255, 204, 0.8);
}

.counter-group {
  display: flex;
  gap: 20px; /* Espaciado entre contadores */
  margin-bottom: 20px;
}

.mouse-position {
  font-size: 1.25rem;
  margin-top: 10px;
  background-color: #333; /* Fondo para la posición del mouse */
  color: #fff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}
</style>
