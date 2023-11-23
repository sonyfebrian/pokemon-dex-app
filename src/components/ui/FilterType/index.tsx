
import { SyntheticEvent } from "react"
import { pokemonTypes } from "src/services/utils/PokemonType"
// import BugPokemon from "src/assets/Images/pokemonTypes/bug.svg"
// import dark from "src/assets/Images/pokemonTypes/dark.svg"
// import dragon from "src/assets/Images/pokemonTypes/dragon.svg"
// import BugPokemon from "src/assets/Images/pokemonTypes/bug.svg"
// import BugPokemon from "src/assets/Images/pokemonTypes/bug.svg"
// import BugPokemon from "src/assets/Images/pokemonTypes/bug.svg"
// import BugPokemon from "src/assets/Images/pokemonTypes/bug.svg"
// import BugPokemon from "src/assets/Images/pokemonTypes/bug.svg"
// import BugPokemon from "src/assets/Images/pokemonTypes/bug.svg"
// import BugPokemon from "src/assets/Images/pokemonTypes/bug.svg"
// import BugPokemon from "src/assets/Images/pokemonTypes/bug.svg"

// const svgPaths: { [key: string]: string } = {
//     Bug: 'src/assets/Images/pokemonTypes/bug.svg',
//     Dark: 'src/assets/Images/pokemonTypes/dark.svg',
//     Dragon: 'src/assets/Images/pokemonTypes/dragon.svg',
//     // Add other key-value pairs...
// };
type PokemonTypeProps = {
    type: string;
    tabIndex: boolean;
    handleClick?: (e: SyntheticEvent) => void;
};

export const PokemonType = (props: PokemonTypeProps) => {
    const [{ name, color }] = pokemonTypes.filter(
        (item) => item.name === props.type
    );

    { console.log(color, "color") }
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