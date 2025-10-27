import { defineStore } from 'pinia'

export interface Libro {
  id: number
  titulo: string
  autor: string
  paginas: number
  disponible: boolean
}

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
    agregarLibro(libro: Omit<Libro, 'id'>) {
      const nuevo = { ...libro, id: this.libros.length + 1 }
      this.libros.push(nuevo)
    },
    cambiarDisponibilidad(id: number) {
      const libro = this.libros.find((l) => l.id === id)
      if (libro) libro.disponible = !libro.disponible
    },
  },
})
