<template>

    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Mycounter :value="25"/>
    <Mycounter02 :value="4"/>
    <Mycounter03 :value="8"/>

</template>

<script lang="ts" setup>
import Mycounter from './Components/MiCounter.vue'
import Mycounter02 from './Components/MiCounter02.vue';
import Mycounter03 from './Components/MiCounter03.vue';

</script>

