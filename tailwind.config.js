/** @type {import('tailwindcss').Config} */
export default {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            animation: {
                'fade-left': 'fadeLeft 2s ease-in-out',
                'slide-left': 'slideLeft 2s ease-in-out',
                'slide-right': 'slideRight 2s ease-out',
            },
            keyframes: {
                fadeLeft: {
                    '0%' : {
                        opacity: 0,
                        transform: 'translateX(-300%)'
                    },
                    '100%' : {
                        opacity: 1,
                        transform: 'translateX(0%)'
                    }
                },
                slideLeft: {
                    '0%' : { transform: 'translateX(-300%)' },
                    '100%' : { transform: 'translateX(0%)' }
                },
                slideRight: {
                    '0%' : { left: '150%' },
                    '100%' : { left: '-1.5rem' }
                }
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

