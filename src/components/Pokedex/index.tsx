import UsePagination from "../ui/Pagination";
import { PokemonCard } from "../ui/Card";
import { Pokemon } from "src/services/utils/types/Pokemon";
import { Loading } from "src/services/helper/Loading";
import { ErrorMessage } from "src/services/helper/ErrorMessage";

type PokedexProps = {
    setModal: (value: boolean) => void;
    setPokemonData: (data: Pokemon) => void;
    pokemonList: Pokemon[];
    setPokemonList: (data: Pokemon[]) => void;
    pokemonAmount: number;
    setPokemonAmount: (value: number) => void;
    error: boolean;
    loading: boolean;
    setLoading: (value: boolean) => void;
    page: number;
    setPage: (value: number) => void;
    showPagination: boolean;
    setShowPagination: (value: boolean) => void;
    disabledButton: boolean;
    searchBarRef: React.MutableRefObject<HTMLDivElement>;
};

export const Pokedex = (props: PokedexProps) => {
    if (props.error) return <ErrorMessage />;
    else
        return (
            <>
                <div >
                    {props.loading ? (
                        <Loading />
                    ) : (
                        <div className="container  px-5 py-24 mx-auto ">
                            <div className="flex  flex-wrap -m-4">
                                {props.pokemonList.map((pokemon) => (
                                    <div className="p-4 lg:w-1/3">
                                        <PokemonCard
                                            key={pokemon.id}
                                            pokemon={pokemon}
                                            setModal={props.setModal}
                                            setPokemonData={props.setPokemonData}
                                        />
                                    </div>
                                ))}


                            </div>

                        </div>
                    )}
                    {props.pokemonList.length > 1 &&
                        props.loading === false &&
                        props.showPagination === true && (
                            <UsePagination
                                setPokemonList={props.setPokemonList}
                                setLoading={props.setLoading}
                                searchBarRef={props.searchBarRef}
                                page={props.page}
                                setPage={props.setPage}
                            />
                        )}

                </div>
            </>
        );
};