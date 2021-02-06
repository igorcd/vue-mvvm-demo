module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
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
