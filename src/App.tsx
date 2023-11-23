

import { useEffect, useRef, useState, MutableRefObject } from "react";
import { Header } from "src/Layouts/Header"
import { Pokemon } from "src/services/utils/types/Pokemon";
import { getPokemonList } from "src/services/utils/api/getPokemonList";




function App() {

  const [modal, setModal] = useState(false);
  // const [pokemonData, setPokemonData] = useState<Pokemon>();
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
  return (
    <>
      <Header setPokemonList={setPokemonList}
        pokemonAmount={pokemonAmount}
        setPokemonAmount={setPokemonAmount}
        setError={setError}
        setLoading={setLoading}
        setPage={setPage}
        setShowPagination={setShowPagination}
        disabledButton={disabledButton}
        setDisabledButton={setDisabledButton}
        searchBarRef={searchBarRef} />
    </>
  )
}

export default App
