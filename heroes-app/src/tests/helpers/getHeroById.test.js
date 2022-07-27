import { getHeroById } from "../../helpers/getHeroById";

describe('getHeroesByTerm', () => { 
    test('should return undefinded if not found id', () => { 
        expect(getHeroById()).toBe(undefined);
        expect(getHeroById('')).toBe(undefined);
        expect(getHeroById('123')).toBe(undefined);
     });

     test('should return the hero dc-green', () => { 
        const hero = getHeroById('dc-green');
        const dcHero =  {
            'id': 'dc-green',
            'superhero':'Green Lantern', 
            'publisher':'DC Comics', 
            'alter_ego':'Alan Scott',
            'first_appearance':'All-American Comics #16',
            'characters':'Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz'
        };
        expect(hero).toEqual(dcHero);
     });
 })