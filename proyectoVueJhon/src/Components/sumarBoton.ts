// useSumar.ts
import { ref } from 'vue';

export function useSumar(initialValue: number) {
    const contador = ref<number>(initialValue);

    const suma = (): void => {
        contador.value++;
    };

    const resta = (): void => {
        contador.value--;
    };

    return { contador, suma, resta };
}
