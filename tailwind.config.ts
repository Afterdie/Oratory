import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#dc4a2d',
                accent: '#E7E7E7',
                //add one for text here too
            },
            fontFamily: {
                sans: ['var(--font-gensan)'],
            },
        },
    },
    plugins: [],
}
export default config
