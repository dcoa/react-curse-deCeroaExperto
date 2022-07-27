import { useMemo } from "react";
import { getHeroByPublisher } from "../../helpers/getHeroByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

    return (
        <>
            <ul className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {
                    heroes.map((hero) => (
                        <HeroCard
                            key={hero.id}
                            {...hero}
                        />
                    ))
                }
            </ul>
        </>)
};
