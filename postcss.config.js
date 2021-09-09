module.exports = {
    syntax: 'postcss-scss',
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
        ...(process.env.JEKYLL_ENV == "production"
            ? [require('cssnano')({ preset: 'default' })]
            : [])
    ]
};