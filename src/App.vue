<script setup lang="ts"></script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-800">
    <header class="bg-white shadow-sm">
      <nav class="max-w-5xl mx-auto px-4 py-4 flex items-center gap-4">
        <h1 class="text-xl font-bold">📚 Dashboard Biblioteca</h1>
        <div class="ml-auto flex gap-3">
          <RouterLink class="px-3 py-2 rounded-lg hover:bg-slate-100" to="/">Inicio</RouterLink>
          <RouterLink class="px-3 py-2 rounded-lg hover:bg-slate-100" to="/libros"
            >Libros</RouterLink
          >
          <RouterLink class="px-3 py-2 rounded-lg hover:bg-slate-100" to="/libros/nuevo"
            >Agregar</RouterLink
          >
        </div>
      </nav>
    </header>

    <main class="max-w-5xl mx-auto px-4 py-8">
      <RouterView />
    </main>
  </div>
</template>
