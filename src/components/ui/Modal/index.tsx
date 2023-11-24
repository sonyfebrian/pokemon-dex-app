import React from "react";
import { pokemonTypes } from "src/services/utils/PokemonType";
import { Pokemon } from "src/services/utils/types/Pokemon";
// import { PokemonType } from "../FilterType";
import { SkeletonLoading } from "src/services/helper/SkeletonLoading";

import DividerBallIcon from "src/assets/Images/divider-pokeball.svg"


type PokemonModalProps = {
    setModal: (value: boolean) => void;
    pokemonData: Pokemon;
};

export const PokemonModal = ({ setModal, pokemonData }: PokemonModalProps) => {


    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonData.id}.png`;

    const [{ color }] = pokemonTypes.filter(
        (type) => pokemonData.types[0].type.name.indexOf(type.name) !== -1
    );

    const formatStatName = (statName: string) => {
        switch (statName) {
            case "hp":
                return "HP";
            case "attack":
                return "Attack";
            case "defense":
                return "Defense";
            case "special-attack":
                return "Sp. Atk";
            case "special-defense":
                return "Sp. Def";
            case "speed":
                return "Speed";
        }
    };

    const formatPokemonId = (id: number) => {
        if (id < 10) return `#00${id}`;
        else if (id >= 10 && id < 99) return `#0${id}`;
        else return `#${id}`;
    };



    return (

        <><div
            className="justify-center text-white items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">


                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-800 bg-opacity-50 backdrop-blur-md outline-none focus:outline-none">


                    <div className="relative flex flex-row">

                        <div className="absolute -mt-32 right-1/2 -mr-10  md-transform-translate-x-[-50%]">
                            <SkeletonLoading src={imgUrl} alt={pokemonData.name} />
                        </div>


                        <span className="text-lg absolute mt-32 ml-20 text-center leading-[135%] font-semibold">{formatPokemonId(pokemonData.id)}</span>
                        <span className="text-2xl absolute mt-36 ml-10 leading-[135%] font-semibold capitalize text-center block my-1/4 mx-1/2">{pokemonData.name}</span>
                        <div className="flex flex-col items-center p-6 mt-40">
                            <span className="font-semibold">{`${pokemonData.height / 10}`} M</span>
                            <span className="font-normal text-sm">Height</span>

                        </div>

                        <div className="flex flex-col items-center p-6 mt-40">
                            <span className="font-semibold">{`${pokemonData.weight / 10}`} KG</span>

                            <span className="font-normal text-sm">Weight</span>
                        </div>

                        <div className="flex flex-col gap-6 ">
                            <hr className="w-px h-20 bg-opacity-25 bg-white mx-auto" />
                            <img src={DividerBallIcon} alt="ball-icon" className="w-14 h-14" />
                            <hr className="w-px h-20 bg-opacity-25 bg-white mx-auto" />

                        </div>

                        <div className="p-6 flex flex-col ">
                            <span className="font-bold text-lg mb-10">Stats</span>
                            {pokemonData.stats.map(({ stat, base_stat }) =>
                                React.Children.toArray(
                                    <li className="flex items-center">
                                        <span className="min-w-[4.38rem] text-base font-normal inline-block">{formatStatName(stat.name)}</span>
                                        <span className="min-w-[1.88rem] mx-5 font-semibold text-center">{base_stat}</span>

                                    </li>
                                )
                            )}

                        </div>

                    </div>

                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                            className="text-white  font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setModal(false)}
                            style={{ backgroundColor: color }}
                        >
                            Close
                        </button>

                    </div>
                </div>
            </div>
        </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div></>

    );
};