/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['DMSans_400Regular'],
        'dm-sans-medium': ['DMSans_500Medium'],
        'dm-sans-semibold': ['DMSans_600SemiBold'],
        'dm-sans-bold': ['DMSans_700Bold'],
        'dm-sans-extrabold': ['DMSans_800ExtraBold'],
        'dm-sans-black': ['DMSans_900Black'],
      },
    },
  },
  plugins: [],
};
