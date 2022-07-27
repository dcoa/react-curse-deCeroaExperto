import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import { getHeroById } from "../../helpers/getHeroById";

export const HeroScreen = () => {

  const { id } = useParams();

  const hero = useMemo(() => getHeroById(id), [id]);

  if (!hero) {
    //Redirect when a path (hero) not exist
    return <Navigate to="/" />
  }

  return (
    <div className="mx-9">
      <div className="w-full border-b border-gray-300 mb-5 pb-5">
        <h1 className="text-2xl	text-slate-600">{hero.superhero}</h1>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex-none mb-5 md:w-56 md:mb-0 relative">
          <img
            src={`/assets/heroes/${id}.jpg`} alt={hero.superhero}
            className="w-full h-full object-center object-fill lg:w-full lg:h-full"
          />
        </div>
        <div className="md:w-1/2 flex flex-col md:mx-5 justify-center ">
          <div className="w-full border-b border-gray-300 mb-5 pb-5">
            <h2 className="text-xl	text-slate-700">Alter Ego</h2>
            <p className="text-s	text-slate-600"> {hero.alter_ego}</p>
          </div>
          <div className="w-full border-b border-gray-300 mb-5 pb-5">
            <h2 className="text-xl	text-slate-700">Characters</h2>
            <p className="text-s	text-slate-600"> {hero.characters}</p>
          </div>
          <h2 className="text-xl	text-slate-700">First Apparience</h2>
          <p className="text-s	text-slate-600"> {hero.first_appearance}</p>
          <p className="text-s	text-slate-600"> {hero.publisher}</p>
        </div>
      </div>
    </div>
  )
};
