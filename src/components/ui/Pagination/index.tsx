import usePagination from "@mui/material/usePagination";
import { getPokemonList } from "src/services/utils/api/getPokemonList"
import { Pokemon } from "src/services/utils/types/Pokemon";
import LeftArrow from "src/assets/Images/icon-arrow-left.svg"
import RightArrow from "src/assets/Images/icon-arrow-right.svg"
import Button from "../Button";

type UsePaginationProps = {
    setPokemonList: (data: Pokemon[]) => void;
    setLoading: (value: boolean) => void;
    searchBarRef: React.MutableRefObject<HTMLDivElement>;
    page: number;
    setPage: (value: number) => void;
};



export default function UsePagination(props: UsePaginationProps) {
    const handleChange = async (_e: React.ChangeEvent<unknown>, value: number) => {
        props.setPage(value);

        props.setLoading(true);
        props.setPokemonList(await getPokemonList(value));
        props.setLoading(false);

        window.scrollTo({
            top: props.searchBarRef.current.offsetTop - 56,
        });
    };

    const { items } = usePagination({
        count: 10,
        siblingCount: 0,
        page: props.page,
        onChange: handleChange,
    });

    return (
        <nav>
            <ul className="flex justify-center items-center gap-2">
                {items.map(({ page, type, selected, ...item }, index) => {
                    let children = null;

                    if (type === "start-ellipsis" || type === "end-ellipsis") {
                        children = <span className="block py-3 px-0.75rem font-Montserrat font-semibold text-white">...</span>;
                    } else if (type === "page") {
                        children = (
                            <Button {...item} selected={selected} onClick={(event) => {
                                if (page !== null) {
                                    handleChange(event, page);
                                }
                            }} >
                                {page}
                            </Button>
                        );
                    } else {
                        children = (
                            <Button {...item} navigation>
                                {type === "previous" ? <img src={LeftArrow} alt="arrow-icon" className="h-20 w-20" /> : <img src={RightArrow} alt="arrow-icon" className="h-20 w-20" />}
                            </Button>
                        );
                    }

                    return <li key={index} className="mr-4">{children}</li>;
                })}
            </ul>
        </nav>
    );
}