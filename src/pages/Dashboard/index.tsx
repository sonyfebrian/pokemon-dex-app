import { useEffect, useRef, useState, MutableRefObject } from "react";
import { Header } from "src/Layouts/Header"
import { Pokedex } from "src/components/Pokedex";
import { Pokemon } from "src/services/utils/types/Pokemon";
import { getPokemonList } from "src/services/utils/api/getPokemonList";


const Dashboard = () => {
    const [modal, setModal] = useState(false);
    const [pokemonData, setPokemonData] = useState<Pokemon>();
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [pokemonAmount, setPokemonAmount] = useState(9);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [showPagination, setShowPagination] = useState(true);
    const [disabledButton, setDisabledButton] = useState(false);
    // const searchBarRef = useRef<HTMLDivElement>(null);
    const searchBarRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;

    console.log(error, loading, page, showPagination, setModal, "cek state")
    useEffect(() => {
        (async () => {
            setLoading(true);
            setPokemonList(await getPokemonList(1));
            setLoading(false);
        })();
    }, []);

    useEffect(() => {
        const html = document.documentElement;

        modal
            ? (html.style.overflow = "hidden")
            : (html.style.overflow = "initial");
    }, [modal]);

    useEffect(() => {
        setError(false);
    }, [pokemonList]);


    console.log(pokemonData, "data pokemon")
    return (
        <>
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900">  <Header setPokemonList={setPokemonList}
                pokemonAmount={pokemonAmount}
                setPokemonAmount={setPokemonAmount}
                setError={setError}
                setLoading={setLoading}
                setPage={setPage}
                setShowPagination={setShowPagination}
                disabledButton={disabledButton}
                setDisabledButton={setDisabledButton}
                searchBarRef={searchBarRef} />

                <Pokedex
                    setModal={setModal}
                    setPokemonData={setPokemonData}
                    pokemonList={pokemonList}
                    setPokemonList={setPokemonList}
                    pokemonAmount={pokemonAmount}
                    setPokemonAmount={setPokemonAmount}
                    error={error}
                    loading={loading}
                    setLoading={setLoading}
                    page={page}
                    setPage={setPage}
                    showPagination={showPagination}
                    setShowPagination={setShowPagination}
                    searchBarRef={searchBarRef}
                    disabledButton={disabledButton}
                /></div>

        </>
    )
}

export default Dashboard