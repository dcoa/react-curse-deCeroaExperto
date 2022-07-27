import { useNavigate, useLocation } from "react-router-dom";
import { getHeroesByTerm } from "../../helpers/getHeroesByTerm";
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../hero/HeroCard";
import queryString from 'query-string'
import { useMemo } from "react";


export const SearchScreen = () => {
    
    const navigate = useNavigate();
    const location = useLocation();
    // si no existe q es un string vacio por defecto
    const {q = ''} = queryString.parse(location.search);
    const { formValues, handleInputChange } = useForm({
        heroText: q
    });
    const { heroText } = formValues;
    const searchedHeroes = useMemo(() => getHeroesByTerm(q), [q]);
    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${heroText}`)
    }
    return (
        <div>
            <div className="w-full border-b border-gray-300 mb-5 pb-5">
                <h1 className="text-2xl	text-slate-600">Search</h1>
            </div>
            <div>
                <h2 className="text-l text-slate-600 mb-3">Search a hero</h2>
                <form onSubmit={handleSearch} aria-label="search-form"
                className="flex flex-col md:flex-row"
                >
                    <input
                        type="text"
                        placeholder="Search...."
                        className=" h-10 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm md:w-1/3 md:my-5"
                        name="heroText"
                        value={heroText}
                        autoComplete="off"
                        onChange={handleInputChange}
                    />
                    <button
                        type="submit"
                        className="h-10 px-6 w-full font-semibold rounded-md bg-black my-5 text-white md:w-1/3 md:ml-5"
                    >Submit</button>
                </form>
            </div>
            <div className="mt-5">
            <div className="w-full border-b border-gray-300 mb-5 pb-5">
            <h2 className="text-l	text-slate-600">Results</h2>
            </div>
            <ul className="mt-6 flex flex-wrap justify-around">

            { 
                (q === '') ? 
                <div>Start a new search</div>
                :
                (searchedHeroes.length === 0)
                ?
                <div> Not found a hero </div>

                :
                searchedHeroes.map( hero => (<HeroCard
                    key={hero.id}
                    {...hero} />))
            }
                        </ul>
            </div>
        </div>
    )
}