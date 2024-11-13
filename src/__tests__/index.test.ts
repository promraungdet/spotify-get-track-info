import { getTrackInfo } from '../index'

describe('getTrackInfo', () => {
    test('message', async () => {
        const trackInfo = await getTrackInfo("1WJ5tWjTdfywqMANcu7jXi");
        console.log(JSON.stringify(trackInfo))
    });
});