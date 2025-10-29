import { defineStore } from 'pinia'
import type { Libro } from '../models/libro' // ✅ Importá la interfaz desde /models/libro.ts

export const useBibliotecaStore = defineStore('biblioteca', {
  state: () => ({
    libros: [
      {
        id: 1,
        titulo: 'El Principito',
        autor: 'Antoine de Saint-Exupéry',
        paginas: 96,
        disponible: true,
      },
      {
        id: 2,
        titulo: 'Cien años de soledad',
        autor: 'Gabriel García Márquez',
        paginas: 471,
        disponible: false,
      },
    ] as Libro[],
  }),

  getters: {
    ordenPorTitulo: (state) => [...state.libros].sort((a, b) => a.titulo.localeCompare(b.titulo)),

    ordenPorAutor: (state) => [...state.libros].sort((a, b) => a.autor.localeCompare(b.autor)),

    ordenPorPaginas: (state) => [...state.libros].sort((a, b) => a.paginas - b.paginas),
  },

  actions: {
    // ✅ mejora en la generación de ID (evita duplicados si se eliminan libros)
    agregarLibro(libro: Omit<Libro, 'id'>) {
      const maxId = this.libros.reduce((max, l) => (l.id > max ? l.id : max), 0)
      const nuevo = { ...libro, id: maxId + 1 }
      this.libros.push(nuevo)
    },

    cambiarDisponibilidad(id: number) {
      const libro = this.libros.find((l) => l.id === id)
      if (libro) libro.disponible = !libro.disponible
    },
  },
})
