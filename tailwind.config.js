// tailwind.config.js
module.exports = {
  content: [
    "./*.{html,js}", // This covers files directly at the root
    "./**/*.{html,js}", // This covers files in any directories at the root
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
