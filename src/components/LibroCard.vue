<script setup lang="ts">
import type { Libro } from '@/models/libro'

const props = defineProps<{ libro: Libro }>()
const emit = defineEmits<{ (e: 'toggle-disponibilidad'): void }>()
</script>

<template>
  <article
    class="p-5 rounded-2xl border shadow bg-white transition"
    :class="{
      'opacity-60 border-rose-300': !libro.disponible,
      'border-emerald-300': libro.disponible,
    }"
  >
    <header class="mb-2">
      <h3 class="text-lg font-semibold">{{ libro.titulo }}</h3>
      <p class="text-sm text-slate-500">de {{ libro.autor }}</p>
    </header>

    <p class="text-sm">
      Páginas: <span class="font-medium">{{ libro.paginas }}</span>
    </p>

    <p class="mt-2 text-sm">
      Estado:
      <span
        class="px-2 py-0.5 rounded-full text-xs"
        :class="libro.disponible ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'"
      >
        {{ libro.disponible ? 'Disponible' : 'Prestado' }}
      </span>
    </p>

    <button
      class="mt-4 w-full px-3 py-2 rounded-xl text-white"
      :class="
        libro.disponible ? 'bg-rose-600 hover:bg-rose-700' : 'bg-emerald-600 hover:bg-emerald-700'
      "
      @click="emit('toggle-disponibilidad')"
    >
      {{ libro.disponible ? 'Prestar' : 'Devolver' }}
    </button>
  </article>
</template>
