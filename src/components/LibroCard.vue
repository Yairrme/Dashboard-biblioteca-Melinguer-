<script setup lang="ts">
defineProps<{
  libro: {
    id: number
    titulo: string
    autor: string
    paginas: number
    disponible: boolean
  }
}>()

defineEmits(['toggle']) // Evento para cambiar disponibilidad
</script>

<template>
  <div
    class="p-4 rounded-lg border shadow transition"
    :class="
      libro.disponible ? 'bg-green-100 border-green-400' : 'bg-red-100 border-red-400 opacity-70'
    "
  >
    <h3 class="font-bold text-lg">{{ libro.titulo }}</h3>
    <p class="text-gray-700 text-sm">Autor: {{ libro.autor }}</p>
    <p class="text-gray-700 text-sm">Páginas: {{ libro.paginas }}</p>

    <button
      @click="$emit('toggle')"
      class="mt-3 px-3 py-1 text-white rounded"
      :class="libro.disponible ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'"
    >
      {{ libro.disponible ? 'Pedir' : 'Devolver' }}
    </button>
  </div>
</template>
