import { getHeroesByTerm } from "../../helpers/getHeroesByTerm"

describe('getHeroesByTerm', () => { 
    test('should return emply array if not term', () => { 
        expect(getHeroesByTerm()).toEqual([]);
        expect(getHeroesByTerm('')).toEqual([]);
     });

     test('should return array with all Scott heroes', () => { 
        const dc = getHeroesByTerm('Scott');
        const dcHero =  {
            'id': 'dc-green',
            'superhero':'Green Lantern', 
            'publisher':'DC Comics', 
            'alter_ego':'Alan Scott',
            'first_appearance':'All-American Comics #16',
            'characters':'Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz'
        };
        expect(dc.length).toBe(2);
        expect(dc.some( hero => hero.alter_ego = dcHero.alter_ego)).toBeTruthy();
     });
 })