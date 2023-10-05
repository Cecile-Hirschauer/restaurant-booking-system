import { Restaurant } from '../../src/entities/restaurant';

describe('Restaurant', () => {
    it('Should exist and have a name', () => {
       const restaurant = new Restaurant('Sushi Place', 10);
         expect(restaurant).toBeTruthy();
         expect(restaurant.name).toEqual('Sushi Place');
    });
    it('Should not allow a negative capacity', () => {
        expect(() => {
            const restaurant = new Restaurant('Chez Pierre', -5);
        }).toThrowError('Capacity must be greater than 0');
    });

  });