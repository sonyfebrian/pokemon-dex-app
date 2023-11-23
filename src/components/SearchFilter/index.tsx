import { SyntheticEvent, useEffect, useState } from "react";
import { Slide } from "../ui/Slide";
import { PokemonType } from "../ui/FilterType";
import { getPokemonByType } from "src/services/utils/api/getPokemonByType";
import { pokemonTypes } from "src/services/utils/PokemonType";
import { Pokemon } from "src/services/utils/types/Pokemon";


type SearchFilterProps = {
    setPokemonList: (data: Pokemon[]) => void;
    pokemonAmount: number;
    setPokemonAmount: (value: number) => void;
    setLoading: (value: boolean) => void;
    setShowPagination: (value: boolean) => void;
    setDisabledButton: (value: boolean) => void;
};

export const SearchFilter = (props: SearchFilterProps) => {
    const [selectedType, setSelectedType] = useState("");

    const handleClick = async (e: SyntheticEvent) => {
        const typeName = (e.currentTarget as HTMLButtonElement).value;
        setSelectedType(typeName);
        props.setPokemonAmount(9);
        props.setLoading(true);
        props.setPokemonList(await getPokemonByType(typeName));
        props.setLoading(false);
        props.setShowPagination(false);
    };

    useEffect(() => {
        if (selectedType) {
            (async () => {
                props.setDisabledButton(true);
                props.setPokemonList(
                    await getPokemonByType(selectedType, props.pokemonAmount)
                );
                props.setDisabledButton(false);
            })();
        }
    }, [selectedType, props.pokemonAmount, props.setDisabledButton, props.setPokemonList, props]);


    return (

        <div className="w-6/12">

            <Slide>
                {pokemonTypes.map(({ name }) => (
                    <PokemonType
                        key={name}
                        type={name}
                        tabIndex={true}
                        handleClick={handleClick}
                    />
                ))}
            </Slide>
        </div>


    );
};