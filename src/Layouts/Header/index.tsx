import PokemonLogo from "src/assets/Images/logo-pokemon.svg"
import { Pokemon } from "src/services/utils/types/Pokemon"
import { SearchFilter } from "src/components/SearchFilter"
import { SocialMedia } from "src/components/ui/SosialMedia"


type SearchBarProps = {
    setPokemonList: (data: Pokemon[]) => void;
    pokemonAmount: number;
    setPokemonAmount: (value: number) => void;
    setError: (value: boolean) => void;
    setLoading: (value: boolean) => void;
    setPage: (value: number) => void;
    setShowPagination: (value: boolean) => void;
    disabledButton: boolean;
    setDisabledButton: (value: boolean) => void;
    searchBarRef: React.MutableRefObject<HTMLDivElement>;
};

export const Header = (props: SearchBarProps) => {

    return (
        <><header className="text-gray-600 body-font bg-indigo-950 sticky top-0 z-30">
            <div className="flex items-center justify-between mx-auto p-4 " > <img src={PokemonLogo} alt="logo-navbar" />  <SearchFilter
                setPokemonList={props.setPokemonList}
                pokemonAmount={props.pokemonAmount}
                setPokemonAmount={props.setPokemonAmount}
                setLoading={props.setLoading}
                setShowPagination={props.setShowPagination}
                setDisabledButton={props.setDisabledButton}
            /><SocialMedia /></div>


        </header></>
    )
}