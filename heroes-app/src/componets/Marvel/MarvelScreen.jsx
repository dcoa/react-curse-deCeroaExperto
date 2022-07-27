import { HeroList } from "../hero/HeroList"

export const MarvelScreen = () => {
    return (
        <div>
            <div className="w-full border-b border-gray-300 mb-5 pb-5">
                <h1 className="text-2xl	text-slate-600">Marvel Comics Heroes</h1>
            </div>

            <HeroList publisher={'Marvel Comics'} />
        </div>
    )
}