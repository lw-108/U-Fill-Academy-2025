module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-figtree)', 'sans-serif'],
                mono: ['var(--font-geist-mono)', 'monospace'],
                'instrument-serif': ['var(--font-instrument-serif)', 'serif'],
                'canterbury': ['var(--font-canterbury)', 'serif'],
                'climate-crisis': ['Climate Crisis Local', 'sans-serif'],
            },
        },
    },
}