<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useBibliotecaStore } from '../stores/biblioteca' // 🔹 Store global de Pinia
import LibroCard from '../components/LibroCard.vue' // 🔹 Componente de tarjeta individual

// Instancias del store y router
const store = useBibliotecaStore()
const router = useRouter()
</script>

<template>
  <div class="p-6">
    <div class="flex items-center justify-between mb-4">
      <!-- 🔹 Título principal -->
      <h2 class="text-2xl font-bold text-blue-700">Lista de Libros</h2>

      <!-- 🔹 Botón para volver al dashboard -->
      <button
        @click="router.back()"
        class="px-3 py-1 text-sm bg-gray-300 rounded hover:bg-gray-400 transition"
      >
        Inicio
      </button>
    </div>

    <!-- 🔹 Enlace a la vista para agregar un libro nuevo -->
    <router-link
      to="/libros/nuevo"
      class="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
    >
      ➕ Agregar Libro
    </router-link>

    <!-- 🔹 Grid que muestra los libros usando el componente LibroCard -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <!-- Evento de prestar/devolver -->
      <LibroCard
        v-for="libro in store.ordenPorTitulo"
        :key="libro.id"
        :libro="libro"
        @toggle="store.cambiarDisponibilidad(libro.id)"
      />
    </div>
  </div>
</template>
