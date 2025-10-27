<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useBibliotecaStore } from '../stores/biblioteca'

const titulo = ref('')
const autor = ref('')
const paginas = ref('')
const store = useBibliotecaStore()
const router = useRouter()

const agregarLibro = () => {
  if (!titulo.value || !autor.value || !paginas.value) return
  store.agregarLibro({
    titulo: titulo.value,
    autor: autor.value,
    paginas: Number(paginas.value),
    disponible: true,
  })
  router.push('/libros')
}
</script>

<template>
  <div class="p-6 max-w-md mx-auto">
    <h2 class="text-2xl font-bold text-emerald-700 mb-4">Agregar Libro</h2>

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

      <button
        type="submit"
        class="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700"
      >
        Guardar
      </button>
    </form>
  </div>
</template>
