
import { SyntheticEvent } from "react"
import { pokemonTypes } from "src/services/utils/PokemonType"

type PokemonTypeProps = {
    type: string;
    tabIndex: boolean;
    handleClick?: (e: SyntheticEvent) => void;
};

export const PokemonType = (props: PokemonTypeProps) => {
    const [{ name, color }] = pokemonTypes.filter(
        (item) => item.name === props.type
    );


    return name && color ? (


        <>
            <button
                style={{ backgroundColor: color }}
                value={name}
                onClick={props.handleClick}
                tabIndex={props.tabIndex ? 0 : -1} className="bg-red-500 flex items-center gap-2 px-2 py-1 rounded font-montserrat text-base font-normal capitalize text-white">
                {name}
            </button>
        </>

    ) : (
        <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
            <span className="font-medium">Oops,</span> could not find the type of this Pokemon
        </div>
    );
};