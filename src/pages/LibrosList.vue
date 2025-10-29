<script setup lang="ts">
import { useBibliotecaStore } from '../stores/biblioteca'
import LibroCard from '../components/LibroCard.vue'

const store = useBibliotecaStore()
</script>

<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold text-blue-700 mb-4">Lista de Libros</h2>

    <router-link
      to="/libros/nuevo"
      class="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
    >
      Agregar Libro
    </router-link>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <LibroCard
        v-for="libro in store.ordenPorTitulo"
        :key="libro.id"
        :libro="libro"
        @toggle="store.cambiarDisponibilidad(libro.id)"
      />
    </div>
  </div>
</template>
