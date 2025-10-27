import { defineStore } from 'pinia'
import type { Libro } from '@/models/libro'

export const useBibliotecaStore = defineStore('biblioteca', {
  state: () => ({
    isLoading: false as boolean,
    data: [
      { id: 1, titulo: 'Clean Code', autor: 'Robert C. Martin', paginas: 464, disponible: true },
      {
        id: 2,
        titulo: 'El Principito',
        autor: 'Antoine de Saint-Exupéry',
        paginas: 96,
        disponible: false,
      },
      { id: 3, titulo: 'You Don’t Know JS', autor: 'Kyle Simpson', paginas: 278, disponible: true },
    ] as Libro[],
    error: '' as string,
  }),
  getters: {
    // Orden alfabético por título
    byTitulo: (state) => [...state.data].sort((a, b) => a.titulo.localeCompare(b.titulo)),

    // Orden alfabético por autor
    byAutor: (state) => [...state.data].sort((a, b) => a.autor.localeCompare(b.autor)),

    // Orden por cantidad de páginas (menor a mayor)
    byPaginas: (state) => [...state.data].sort((a, b) => a.paginas - b.paginas),

    // Derivadas útiles
    total: (state) => state.data.length,
    disponibles: (state) => state.data.filter((l) => l.disponible).length,
    prestados: (state) => state.data.filter((l) => !l.disponible).length,
  },
  actions: {
    agregarLibro(nuevo: Omit<Libro, 'id'>) {
      const id = this.data.length ? Math.max(...this.data.map((l) => l.id)) + 1 : 1
      this.data.push({ id, ...nuevo })
    },
    toggleDisponibilidad(id: number) {
      const libro = this.data.find((l) => l.id === id)
      if (libro) libro.disponible = !libro.disponible
    },
  },
})
