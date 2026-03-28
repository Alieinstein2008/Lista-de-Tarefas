import { Poppins, Roboto_Condensed } from 'next/font/google';

export const roboto_condensed = Roboto_Condensed({
    subsets: ['latin'],
    weight: ['400']
});

export const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});