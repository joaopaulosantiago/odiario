tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                serif: ['Georgia', 'serif'],
            },
            colors: {
                scripture: {
                    light: '#FFD700',
                    dark: '#B8860B',
                    read: '#AD8B00'   // Dourado para posts lidos (ex: um pouco mais escuro/desaturado)
                }
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in',
                'slide-down': 'slideDown 0.5s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                }
            }
        }
    }
}