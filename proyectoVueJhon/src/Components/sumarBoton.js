// useCounter.ts
import { ref } from 'vue';

export function useSumar(initialValue) {
    const contador = ref(initialValue);

    const suma = () => {
        contador.value++;
    };

    const resta = () => {
        contador.value--;
    };

    return { contador, suma, resta };
}
