/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html'],
    theme: {
        fontFamily: {
            roboto: ['Roboto', 'sans-serif'],
        },
        colors: {
            black: 'hsl(0, 0%, 0%)',
            white: 'hsl(0, 0%, 100%)',
            trasparent: 'transparent',
            tomato: 'hsl(4, 100%, 67%)',
            pink: 'hsl(349, 100%, 66%)',
            gray: {
                1: 'hsl(231, 7%, 60%)',
                2: 'hsl(235, 18%, 26%)',
                3: 'hsl(234, 29%, 20%)',
            },
        },
        extend: {},
    },
    plugins: [],
}
