import { Restaurant } from '../../src/entities/restaurant';

describe('Restaurant', () => {
    it('Should exist', () => {
       const restaurant = new Restaurant();
         expect(restaurant).toBeTruthy();
    });
});