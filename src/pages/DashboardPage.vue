<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useBibliotecaStore } from '@/stores/biblioteca'

const store = useBibliotecaStore()
const { total, disponibles, prestados } = storeToRefs(store)
</script>

<template>
  <section>
    <h2 class="text-2xl font-semibold mb-6">Resumen</h2>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <article class="p-5 rounded-2xl bg-white shadow border">
        <p class="text-sm text-slate-500">Total de libros</p>
        <p class="text-3xl font-bold">{{ total }}</p>
      </article>

      <article class="p-5 rounded-2xl bg-white shadow border">
        <p class="text-sm text-slate-500">Disponibles</p>
        <p class="text-3xl font-bold text-green-600">{{ disponibles }}</p>
      </article>

      <article class="p-5 rounded-2xl bg-white shadow border">
        <p class="text-sm text-slate-500">Prestados</p>
        <p class="text-3xl font-bold text-rose-600">{{ prestados }}</p>
      </article>
    </div>
  </section>
</template>
