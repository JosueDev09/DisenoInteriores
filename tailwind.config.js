/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,ts}', // Agrega todas las extensiones y directorios relevantes
  ],
  theme: {
    extend: {
      colors: {
        'gradient-start': '#01EB6A',
        'gradient-end': '#0085EC',
        'body': ['"Open Sans"'],
      },
    },
  },
  plugins: [],
}

