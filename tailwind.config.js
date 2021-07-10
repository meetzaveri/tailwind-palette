module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    light: {
                        100: '#8993A4',
                        200: '#97A0AF',
                    },
                    dark: {
                        100: '#172B4D',
                        200: '#253858',
                    },
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
