<script setup lang="ts">
import { ref, computed } from 'vue'
import { useBibliotecaStore } from '@/stores/biblioteca'
import LibroCard from '@/components/LibroCard.vue'

const store = useBibliotecaStore()

const criterio = ref<'titulo' | 'autor' | 'paginas'>('titulo')

const librosOrdenados = computed(() => {
  if (criterio.value === 'autor') return store.byAutor
  if (criterio.value === 'paginas') return store.byPaginas
  return store.byTitulo
})
</script>

<template>
  <section>
    <header class="flex flex-wrap items-center gap-3 mb-4">
      <h2 class="text-2xl font-semibold mr-auto">Libros</h2>

      <label class="text-sm text-slate-600">Ordenar por:</label>
      <select v-model="criterio" class="px-3 py-2 border rounded-lg bg-white">
        <option value="titulo">Título</option>
        <option value="autor">Autor</option>
        <option value="paginas">Páginas</option>
      </select>

      <RouterLink
        to="/libros/nuevo"
        class="px-4 py-2 rounded-xl bg-slate-900 text-white hover:opacity-90"
      >
        + Agregar libro
      </RouterLink>
    </header>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <LibroCard
        v-for="l in librosOrdenados"
        :key="l.id"
        :libro="l"
        @toggle-disponibilidad="store.toggleDisponibilidad(l.id)"
      />
    </div>
  </section>
</template>
