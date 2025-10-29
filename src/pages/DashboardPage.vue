<template>
  <div class="p-8 text-center">
    <!-- 🔹 Título principal del Dashboard -->
    <h1 class="text-4xl font-bold text-gray-700 mb-4">Dashboard de Biblioteca</h1>

    <!-- 🔹 Botón principal para navegar al listado de libros -->
    <!-- router-link se usa en Vue Router para cambiar de página sin recargar el sitio -->
    <router-link
      to="/libros"
      class="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
    >
      📚 Libros Disponibles
    </router-link>
  </div>
</template>
