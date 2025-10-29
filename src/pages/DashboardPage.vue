<template>
  <main
    class="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 to-blue-50 p-4"
  >
    <section
      class="w-full max-w-lg rounded-xl bg-white p-10 text-center shadow-xl border border-slate-200"
    >
      <h1 class="mb-2 text-4xl font-bold text-slate-800">Bienvenido</h1>

      <p class="mb-8 text-lg text-slate-600">Dashboard de la Biblioteca</p>

      <router-link
        to="/libros"
        class="inline-block transform rounded-lg bg-blue-600 px-8 py-3 font-medium text-white shadow-md transition duration-200 ease-in-out hover:scale-105 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        📚 Gestionar Libros
      </router-link>
    </section>
  </main>
</template>
