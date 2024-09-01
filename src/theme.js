import { Noto_Sans_JP } from '@next/font/google';

const noto_sans_jp= Noto_Sans_JP({
    weights: [ 300, 400, 500, 700],
    subsets: ['latin', 'japanese'],
    display: 'swap',
});
const theme = {
    typegraphy: {
        fontFamily: 'Noto Sans JP, sans-serif',
    }
}
export default theme;