import { StormGlass } from '@src/clients/stormGlass';

describe('Stormglass client', () => {
    it('should return the normalized forecast from the StormGlass service', async () => {
        const lat = 15.33233;
        const lng = 131.5551255;

        const stormGlass = new StormGlass();
        const response = await stormGlass.fetchPoints(lat, lng);
        expect(response).toEqual({});
    })
})