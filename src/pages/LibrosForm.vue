<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useBibliotecaStore } from '@/stores/biblioteca'

const router = useRouter()
const store = useBibliotecaStore()

const form = reactive({
  titulo: '',
  autor: '',
  paginas: 0,
  disponible: true,
})

function onSubmit() {
  if (!form.titulo || !form.autor || !form.paginas) return
  store.agregarLibro({ ...form })
  router.push('/libros')
}
</script>

<template>
  <section class="max-w-xl">
    <h2 class="text-2xl font-semibold mb-4">Agregar libro</h2>
    <form @submit.prevent="onSubmit" class="space-y-4 bg-white p-6 rounded-2xl border shadow">
      <input
        v-model="form.titulo"
        placeholder="Título"
        class="w-full px-4 py-2 border rounded-lg"
      />
      <input v-model="form.autor" placeholder="Autor" class="w-full px-4 py-2 border rounded-lg" />
      <input
        v-model.number="form.paginas"
        type="number"
        min="1"
        placeholder="Páginas"
        class="w-full px-4 py-2 border rounded-lg"
      />
      <label class="flex items-center gap-2">
        <input type="checkbox" v-model="form.disponible" />
        <span>Disponible</span>
      </label>
      <div class="flex gap-3">
        <button class="px-4 py-2 rounded-xl bg-slate-900 text-white">Guardar</button>
        <RouterLink to="/libros" class="px-4 py-2 rounded-xl border">Cancelar</RouterLink>
      </div>
    </form>
  </section>
</template>
