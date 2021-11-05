module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Oswald']
            },
            colors:{
                "erie-black":"#222222",
                "dark-purple":"#291528",
                "black-olive":"#3A3E3B",
                "ghost-white":"#F0EFF4",
                "mount-pink":"#9E829C"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
