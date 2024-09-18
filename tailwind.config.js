/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}'
    ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            spacing: {
                '95dvh': '95dvh',
                '5dvh': '5dvh',
                '35rem': '35rem'
            },
            animation: {
                'fade-left': 'fadeLeft 2s ease-in-out',
                'fade-in': 'fadeIn 2s ease-out',
                'slide-left': 'slideLeft 2s ease-in-out',
                'slide-right': 'slideRight 2s ease-out',
                'slide-top': 'slideTop 2s ease-out',
            },
            colors: {
                branco: '#ffffff',
                laranja: '#dc5f00',
                preto: '#252525',
                sombra: 'rgba(104, 109, 118, .5)',
                "cinza-claro": '#eeeeee',
                "cinza-medio": '#686d76',
                "cinza-escuro": '#373a40',
                "laranja-claro": '#ffdec4'
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
                fadeIn: {
                    '0%' : { opacity: 0 },
                    '100%' : { opacity: 1 }
                },
                slideLeft: {
                    '0%' : { transform: 'translateX(-300%)' },
                    '100%' : { transform: 'translateX(0%)' }
                },
                slideRight: {
                    '0%' : { left: '150%' },
                    '100%' : { left: '-1.5rem' }
                },
                slideTop: {
                    '0%' : { transform: 'translateY(-100%)' },
                    '100%' : { transform: 'translateY(0)' }
                }
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

