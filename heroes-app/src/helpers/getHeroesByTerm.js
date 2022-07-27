import { heroes } from "../data/heroes";

export const getHeroesByTerm = (term = '') => {

    if(term === '') return [];
    term = term.toLocaleLowerCase();
    return heroes.filter(({ superhero, publisher, alter_ego, first_appearance, characters }) => (
        superhero.toLowerCase().includes(term) || publisher.toLowerCase().includes(term) || 
        alter_ego.toLowerCase().includes(term) || characters.toLowerCase().includes(term)
    ))
}
