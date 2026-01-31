/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./lib/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    green: '#0c774e',
                    light: '#45f2a1',
                    black: '#050505',
                    gray: '#f4f4f5'
                }
            },
            fontFamily: {
                sans: ['"Instrument Sans"', 'sans-serif'],
                serif: ['"Instrument Serif"', 'serif'],
            },
            letterSpacing: {
                tighter: '-0.04em',
                tight: '-0.02em',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'reveal': 'reveal 1s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    opacity: '0'
                },
                '100%': { opacity: '1' },
            },
            reveal: {
                'from': { opacity: '0', transform: 'translateY(10px)' },
                'to': { opacity: '1', transform: 'translateY(0)' },
            }
        },
    },
    plugins: [],
}
