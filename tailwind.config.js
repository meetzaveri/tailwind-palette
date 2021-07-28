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
                light: {
                    0: '#FFFFFF',
                    100: '#FFE6EE',
                    200: '#FFCCDE',
                    300: '#FFB3CD',
                    400: '#FF99BD',
                    500: '#FF80AC',
                    600: '#FF669B',
                    700: '#FF4D8B',
                    800: '#FF337A',
                    900: '#FF1A6A',
                    1000: '#FF0059',
                },
                dark: {
                    0: '#FF0059',
                    100: '#E60050',
                    200: '#CC0047',
                    300: '#B3003E',
                    400: '#990035',
                    500: '#80002D',
                    600: '#660024',
                    700: '#4C001B',
                    800: '#330012',
                    900: '#190009',
                    1000: '#000000',
                },
                mix: {
                    0: '#FFCCDE',
                    100: '#FF99BD',
                    200: '#FF669B',
                    300: '#FF337A',
                    400: '#FF0059',
                    500: '#CC0047',
                    600: '#990035',
                    700: '#660024',
                    800: '#330012',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
