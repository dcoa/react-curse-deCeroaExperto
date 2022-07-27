import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    characters,
}) => {

    characters = characters.split(',').filter(name => name !== alter_ego).join()
    return (
        <div className="group relative">
            <div className="w-64  m-auto min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                    src={`/assets/heroes/${id}.jpg`} alt={superhero}
                    className="w-full h-full object-center object-fill"
                />
            </div>
            <div className="m-auto w-64 mt-4 flex-col">
                <div>
                    <h3 className="text-sm font-medium text-gray-900">
                        <Link to={`/hero/${id}`}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {superhero}
                        </Link>
                    </h3>
                    {(alter_ego !== characters) &&
                        <p className="text-sm text-gray-500">{alter_ego}</p>
                    }
                    <p className="mt-1 text-sm text-gray-500">{characters}</p>
                </div>
            </div>
        </div>
    )
};

HeroCard.propTypes = {
    id: PropTypes.string.isRequired,
    superhero: PropTypes.string.isRequired,
    alter_ego: PropTypes.string.isRequired,
    characters: PropTypes.string.isRequired
}