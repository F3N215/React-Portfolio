/** @type {import('tailwindcss').Config} */ // Specify the type of Tailwind CSS configuration

// Tailwind CSS configuration object
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Specify the files where Tailwind should look for classes
  theme: {
    extend: {
      fontFamily: {
        sans: ["Oswald", "sans-serif"], // Extend the default font family to include 'Poppins'
      },
      colors: {
        airforceblue: "#598392", // custom colour 'airforce blue' by hex value
        accent: "#01161e", // custom accent color 'rich black' by hex value
      },
    },
  },
  plugins: [], // Optionally specify Tailwind plugins to include
};
