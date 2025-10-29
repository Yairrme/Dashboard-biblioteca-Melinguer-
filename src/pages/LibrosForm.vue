<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useBibliotecaStore } from '../stores/biblioteca'

// 🔹 Referencias reactivas para los campos del formulario
const titulo = ref('')
const autor = ref('')
const paginas = ref('')

// 🔹 Acceso al store global de Pinia
const store = useBibliotecaStore()

// 🔹 Instancia del router para redirigir o volver atrás
const router = useRouter()

// 🔹 Función para agregar un nuevo libro al store
const agregarLibro = () => {
  // Validación: no continuar si falta algún campo
  if (!titulo.value || !autor.value || !paginas.value) return

  // Llamamos a la acción del store con los datos del formulario
  store.agregarLibro({
    titulo: titulo.value,
    autor: autor.value,
    paginas: Number(paginas.value),
    disponible: true,
  })

  // Redirigir a la lista de libros después de guardar
  router.push('/libros')
}
</script>

<template>
  <div class="p-6 max-w-md mx-auto">
    <div class="flex items-center justify-between mb-4">
      <!-- 🔹 Título de la vista -->
      <h2 class="text-2xl font-bold text-gray-700">Agregar Libro</h2>

      <!-- 🔹 Botón para volver atrás -->
      <button
        @click="router.back()"
        class="px-3 py-1 text-sm bg-gray-300 rounded hover:bg-emerald-600 transition"
      >
        Atras
      </button>
    </div>

    <!-- 🔹 Formulario de carga de libros -->
    <form @submit.prevent="agregarLibro" class="space-y-4">
      <input
        v-model="titulo"
        type="text"
        placeholder="Título"
        class="w-full border rounded px-3 py-2"
      />

      <input
        v-model="autor"
        type="text"
        placeholder="Autor"
        class="w-full border rounded px-3 py-2"
      />

      <input
        v-model="paginas"
        type="number"
        placeholder="Páginas"
        class="w-full border rounded px-3 py-2"
      />

      <button type="submit" class="w-full bg-gray-600 text-white py-2 rounded hover:bg-emerald-700">
        Guardar
      </button>
    </form>
  </div>
</template>
