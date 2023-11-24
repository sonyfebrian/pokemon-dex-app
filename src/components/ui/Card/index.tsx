import { PokemonType } from "../FilterType";
import { Pokemon } from "src/services/utils/types/Pokemon";
import { getPokemon } from "src/services/utils/api/getPokemon";
import { pokemonTypes } from "src/services/utils/PokemonType";


type PokemonCardProps = {
    pokemon: Pokemon;
    setModal: (value: boolean) => void;
    setPokemonData: (data: Pokemon) => void;
};

export const PokemonCard = (props: PokemonCardProps) => {
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${props.pokemon.id}.png`;

    const [{ color }] = pokemonTypes.filter(
        (type) => props.pokemon.types[0].type.name.indexOf(type.name) !== -1
    );

    const handleClick = async () => {
        const requestPokemon = await getPokemon(props.pokemon.name);
        if (requestPokemon.data) {
            props.setPokemonData(requestPokemon.data);
            props.setModal(true);
        } else {
            // handle error case
            console.log("Error: Unable to fetch data for the selected Pokemon");
        }
    };


    const formatPokemonId = (id: number) => {
        if (id < 10) return `#00${id}`;
        else if (id >= 10 && id < 99) return `#0${id}`;
        else return `#${id}`;
    };

    return (

        <>


            <div className="relative w-full mb-32 mt-5 group max-w-md min-w-0 mx-auto break-words border md:max-w-sm rounded-3xl bg-gray-800">

                <div className="flex justify-center w-full">
                    <img
                        src={imgUrl}
                        alt=""
                        className="align-middle absolute hidden sm:block max-w-full sm:-m-10 md:max-w-[200px] md:-ml-20 lg:-m-36"
                    />
                </div>


                <div className="mt-20 text-center">
                    <div className="text-center">
                        <h3 className="mb-1 text-2xl font-bold leading-normal text-white dark:text-gray-300">
                            {formatPokemonId(props.pokemon.id)}
                        </h3>
                        <div className="flex justify-center">
                            <div className="font-bold text-white dark:text-gray-300 text-xl">
                                {props.pokemon.name}
                            </div>
                        </div>
                    </div>
                    <div className="w-full text-center">
                        <div className="flex justify-center pt-8 pb-0 lg:pt-4">
                            <div className="flex space-x-2">
                                {props.pokemon.types.map(({ type }) => (
                                    <PokemonType key={type.name} type={type.name} tabIndex={false} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-6 mt-6">
                    <button
                        style={{ backgroundColor: color }}
                        className={`w-full h-12 bg-${color} rounded-b-[1.5rem] flex justify-center items-center gap-2 text-white text-base font-semibold`}
                        onClick={handleClick}
                    >
                        More Details
                    </button>
                </div>

            </div>



        </>

    );
};