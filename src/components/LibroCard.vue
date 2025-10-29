<script setup lang="ts">
import type { Libro } from '../models/libro'

// ✅ Props con tipado desde el modelo
const props = defineProps<{
  libro: Libro
}>()

// ✅ Evento que emite al padre cuando se hace clic en "Pedir/Devolver"
const emit = defineEmits<{
  (e: 'toggle'): void
}>()
</script>

<template>
  <div
    class="p-4 rounded-lg border shadow transition duration-300 hover:scale-[1.02]"
    :class="
      libro.disponible ? 'bg-green-100 border-green-400' : 'bg-red-100 border-red-400 opacity-70'
    "
  >
    <h3 class="font-bold text-lg text-slate-800">{{ libro.titulo }}</h3>
    <p class="text-gray-700 text-sm">Autor: {{ libro.autor }}</p>
    <p class="text-gray-700 text-sm">Páginas: {{ libro.paginas }}</p>

    <button
      @click="emit('toggle')"
      class="mt-3 px-3 py-1 text-white rounded transition"
      :class="libro.disponible ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'"
    >
      {{ libro.disponible ? 'Pedir' : 'Devolver' }}
    </button>
  </div>
</template>
