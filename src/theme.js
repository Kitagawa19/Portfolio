import { Noto_Sans_JP } from 'next/font/google';

const notosansjp= Noto_Sans_JP({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});
const theme = {
    typography: {
        fontFamily: notosansjp.style.fontFamily,
    }
}
export default theme;