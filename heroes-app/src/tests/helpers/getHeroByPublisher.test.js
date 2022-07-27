import { getHeroByPublisher} from "../../helpers/getHeroByPublisher"

describe('getHeroesByTerm', () => { 
    test('should thow error', () => { 
        expect(()=>getHeroByPublisher()).toThrowError("undefined isn't a valid publisher");
        expect(()=>getHeroByPublisher('')).toThrowError(" isn't a valid publisher");
        expect(()=>getHeroByPublisher('Jump')).toThrowError("Jump isn't a valid publisher");

     });

     test('should return array with all Scott heroes', () => { 
        const dc = getHeroByPublisher('DC Comics');
        const dcHero =  {
            'id': 'dc-green',
            'superhero':'Green Lantern', 
            'publisher':'DC Comics', 
            'alter_ego':'Alan Scott',
            'first_appearance':'All-American Comics #16',
            'characters':'Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz'
        };
        expect(dc.length).toBe(10);
        expect(dc.some( hero => hero.alter_ego = dcHero.alter_ego)).toBeTruthy();
     });
 })