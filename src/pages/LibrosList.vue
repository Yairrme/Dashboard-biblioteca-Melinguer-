<script setup lang="ts">
import { useBibliotecaStore } from '../stores/biblioteca'
import LibroCard from '../components/LibroCard.vue'

// ✅ Instanciamos el store una sola vez (no duplicar <script setup>)
const store = useBibliotecaStore()
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-[240px,1fr] min-h-screen bg-slate-50">
    <!-- 🔹 Sidebar lateral -->
    <aside class="bg-white p-5 border-r">
      <h1 class="text-xl font-bold text-slate-800">📚 Biblioteca</h1>
      <p class="text-sm text-slate-500 mb-6">Gestión de libros</p>

      <nav class="flex flex-col gap-2">
        <!-- Enlace a la lista -->
        <RouterLink
          to="/libros"
          class="text-left px-4 py-2 rounded border transition"
          active-class="bg-blue-600 text-white border-blue-600"
        >
          📖 Ver lista
        </RouterLink>

        <!-- Enlace al formulario -->
        <RouterLink
          to="/libros/nuevo"
          class="text-left px-4 py-2 rounded border transition"
          active-class="bg-emerald-600 text-white border-emerald-600"
        >
          ➕ Agregar libro
        </RouterLink>

        <!-- Enlace al inicio -->
        <RouterLink to="/" class="text-left px-4 py-2 rounded border transition hover:bg-slate-100">
          🏠 Inicio
        </RouterLink>
      </nav>
    </aside>

    <!-- 🔹 Contenido principal -->
    <section class="p-6">
      <!-- 📋 Lista de libros -->
      <div v-if="$route.path === '/libros'">
        <h2 class="text-2xl font-bold text-blue-700 mb-4">Lista de Libros</h2>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <LibroCard
            v-for="libro in store.ordenPorTitulo"
            :key="libro.id"
            :libro="libro"
            @toggle="store.cambiarDisponibilidad(libro.id)"
          />
        </div>
      </div>

      <!-- 🧩 Formulario renderizado dentro de la misma vista -->
      <RouterView />
    </section>
  </div>
</template>
