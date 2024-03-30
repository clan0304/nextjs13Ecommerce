import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      benne: ['var(--font-benne)'],
      rubik: ['var(--font-rubik)'],
      robotoMono: ['var(--font-roboto)'],
      rakkas: ['var(--font-rakkas)'],
      dmSans: ['var(--font-dmsans)'],
      caveat: ['var(--font-caveat)'],
    },
    screens: {
      xs: '380px',
      sm: '624px',
      md: '800px',
      lg: '1024px',
      xl: '1400px',
    },
  },
  plugins: [],
};
export default config;
