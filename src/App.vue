<template>
  <!-- Contenedor principal de toda la aplicación -->
  <div class="min-h-screen bg-gray-100">
    <!-- router-view muestra dinámicamente la vista según la ruta actual -->
    <!-- Ejemplo:
         /               → DashboardPage.vue
         /libros         → LibrosList.vue
         /libros/nuevo   → LibrosForm.vue -->
    <router-view />
  </div>
</template>
