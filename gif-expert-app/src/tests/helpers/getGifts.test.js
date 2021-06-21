import { getGifs } from '../../helpers/getGifts';
describe('getGifs call', () => {
    test('should get 9 elements', async() => {
        const gifs = await getGifs('hisoka');
        expect(gifs.length).toBe(9);
    })

    test('should get 0 elements', async() => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    }) 
})
