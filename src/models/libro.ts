// 🔹 Definición de la interfaz Libro
// Esta interfaz se usa en todo el proyecto para tipar los datos de los libros

export interface Libro {
  id: number // Identificador único del libro
  titulo: string // Título del libro
  autor: string // Nombre del autor
  paginas: number // Cantidad de páginas
  disponible: boolean // Estado del libro: true = disponible, false = prestado
}
