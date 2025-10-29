<script setup lang="ts">
import { useBibliotecaStore } from '../stores/biblioteca'
import LibroCard from '../components/LibroCard.vue'

// Instancia del store de Pinia para acceder a los datos de los libros
const store = useBibliotecaStore()
// No necesitamos useRouter aquí porque la navegación se maneja con <RouterLink>
</script>

<template>
  <div class="flex min-h-screen flex-col bg-gradient-to-br from-slate-50 to-gray-100">
    <header
      class="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-3 shadow-sm"
    >
      <h1 class="text-lg font-semibold text-slate-800">📚 Biblioteca</h1>

      <RouterLink
        to="/"
        class="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm text-slate-700 transition duration-150 ease-in-out hover:bg-slate-100 hover:text-slate-900"
      >
        <span>🏠</span>
        <span>Inicio</span>
      </RouterLink>
    </header>

    <div class="flex flex-1">
      <aside class="w-56 border-r border-slate-200 bg-white p-5 shadow-sm">
        <nav class="flex flex-col space-y-2">
          <RouterLink
            to="/libros"
            class="flex items-center gap-2 rounded-md px-3 py-2 text-slate-700 transition duration-150 ease-in-out hover:bg-blue-50 hover:text-blue-700"
            active-class="bg-blue-600 text-white hover:bg-blue-700 hover:text-white"
          >
            <span>📖</span>
            <span>Ver lista</span>
          </RouterLink>

          <RouterLink
            to="/libros/nuevo"
            class="flex items-center gap-2 rounded-md px-3 py-2 text-slate-700 transition duration-150 ease-in-out hover:bg-emerald-50 hover:text-emerald-700"
            active-class="bg-emerald-600 text-white hover:bg-emerald-700 hover:text-white"
          >
            <span>➕</span>
            <span>Agregar libro</span>
          </RouterLink>
        </nav>
      </aside>

      <main class="flex-1 overflow-y-auto p-6 md:p-8">
        <Transition name="slide-fade" mode="out-in">
          <div :key="$route.fullPath">
            <div v-if="$route.path === '/libros'">
              <h2 class="mb-6 text-center text-2xl font-bold text-slate-800 md:text-left">
                Lista de Libros
              </h2>

              <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <LibroCard
                  v-for="libro in store.ordenPorTitulo"
                  :key="libro.id"
                  :libro="libro"
                  @toggle="store.cambiarDisponibilidad(libro.id)"
                />
              </div>

              <p v-if="store.libros.length === 0" class="mt-8 text-center text-slate-500">
                No hay libros en la biblioteca todavía. ¡Agrega uno nuevo! 📚
              </p>
            </div>

            <RouterView v-else />
          </div>
        </Transition>
      </main>
    </div>
  </div>
</template>

<style scoped>
/* ✨ Animación de Transición entre Vistas (slide + fade) */
/* Clases para la entrada */
.slide-fade-enter-active {
  transition: all 0.3s ease-out; /* Duración y easing de entrada */
}
/* Clases para la salida */
.slide-fade-leave-active {
  transition: all 0.2s ease-in; /* Duración y easing de salida (puede ser más rápida) */
}

/* Estado inicial antes de entrar */
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(30px); /* Empieza desplazado a la derecha */
}

/* Estado final al salir */
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-30px); /* Se va desplazándose a la izquierda */
}
</style>
