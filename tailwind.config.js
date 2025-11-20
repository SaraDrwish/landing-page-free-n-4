// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // الألوان المخصصة (قيم افتراضية)
        'primary': '#0F62FE', // أزرق سماوي
        'secondary': '#00B894', // أخضر فاتح
        'background-light': '#F7FAFF', // خلفية مائلة للأزرق
        'text-base': '#0B1B2B', // رمادي داكن
      },
      fontFamily: {
        // الخطوط (يفترض استيرادها في main.css)
        heading: ['Poppins', 'Inter', 'sans-serif'],
        body: ['Roboto', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}