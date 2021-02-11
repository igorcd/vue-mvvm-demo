module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Ubuntu']
        },
        extend: {
            width: {
                '100': '25rem'
            }
        },
    },
    variants: {
        extend: {
            scale: ['active', 'group-hover'],
            backgroundOpacity: ['active'],
            borderWidth: ['last']
        },
    },
    plugins: [],
};
