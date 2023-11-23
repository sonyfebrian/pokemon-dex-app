import React from "react";
// import { pokemonTypes } from "src/services/utils/PokemonType";
import { Pokemon } from "src/services/utils/types/Pokemon";
// import { PokemonType } from "../FilterType";
import { SkeletonLoading } from "src/services/helper/SkeletonLoading";
// import { useMedia } from "src/hooks/useMedia";
import DividerBallIcon from "src/assets/Images/divider-pokeball.svg"
// import CloseIcon from "src/assets/Images/icon-close.svg"

type PokemonModalProps = {
    setModal: (value: boolean) => void;
    pokemonData: Pokemon;
};
// interface ProgressBarFillProps {
//     base_stat: number;
// }

// const ProgressBarFill: React.FC<ProgressBarFillProps> = ({ base_stat }) => {


//     const widthStyle = base_stat >= 100 ? 'w-full' : `w-${base_stat}`;
//     const backgroundColor = base_stat >= 50 ? 'bg-green-500' : 'bg-red-500';
//     // const boxShadowColor = base_stat >= 50
//     //     ? 'rgba(28, 216, 14, 0.25)'
//     //     : 'rgba(255, 54, 78, 0.25)';
//     console.log(widthStyle, backgroundColor, "cek data")
//     return (
//         <>

//             {/* <div
//             // style={{ backgroundColor: backgroundColor }}
//             className={`h-2  ${widthStyle} ${backgroundColor} rounded overflow-hidden shadow`}
//         // style={{ boxShadow: `0 0 0.75rem 0.25rem ${boxShadowColor}`, transform: 'translate3d(-100%, 0, 0)' }}
//         /> */}

//             <div className="h-2 bg-primary 48" ></div>

//         </>
//     );
// };


// { setModal, pokemonData }: PokemonModalProps
export const PokemonModal = ({ setModal, pokemonData }: PokemonModalProps) => {
    // const mobile = useMedia("(max-width: 980px)");

    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonData.id}.png`;

    // const [{ color }] = pokemonTypes.filter(
    //     (type) => pokemonData.types[0].type.name.indexOf(type.name) !== -1
    // );

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

    // const renderCloseButton = () => (

    //     <button className={`bg-none absolute top-6 ${mobile ? 'right-4' : 'right-6'}`} onClick={() => setModal(false)}>
    //         <img src={CloseIcon} alt="icon-close" className="w-12 h-12" />
    //     </button>



    // );

    return (
        // <div className="w-full h-full fixed top-0 left-0 z-30 bg-opacity-50 bg-black flex justify-center overflow-y-auto scrollbar-width-10rem" onClick={(e) => e.target === e.currentTarget && setModal(false)}>
        //     <div className="bg-white bg-opacity-15 backdrop-blur-lg rounded-xl relative grid grid-cols-modal-columns items-end opacity-0 transform scale-80 animate-modal-animation">
        //         <div className="flex flex-col items-center pb-10 md:pb-8 lg:pb-0 md:pt-28">

        //             <div className="w-full h-full rounded-xl absolute top-0 left-0 overflow-hidden z-[-1]">
        //                 <div style={{ backgroundColor: color }} className={`w-[12.5rem] h-[12.5rem] absolute top-0 left-[4.25rem]  blur-[128px]`}></div>
        //             </div>
        //             <div className="absolute top-[calc(-9.38rem)] left-[2.5rem] md:top-[calc(-10.5rem)] md:left-1/2 md-transform-translate-x-[-50%]">
        //                 <SkeletonLoading src={imgUrl} alt={pokemonData.name} />
        //             </div>
        //             <span className="text-lg leading-[135%] font-semibold">{formatPokemonId(pokemonData.id)}</span>
        //             <span className="text-2xl leading-[135%] font-semibold capitalize text-center block my-1/4 mx-1/2">{pokemonData.name}</span>
        //             <div className="flex gap-2">
        //                 {pokemonData.types.map(({ type }) => (
        //                     <PokemonType key={type.name} type={type.name} tabIndex={false} />
        //                 ))}
        //             </div>
        //             <div className="flex gap-6 mt-6">
        //                 <div className="flex flex-col items-center">

        //                     <div className="flex flex-col items-center">
        //                         <span className="font-semibold">Weight</span>
        //                         <span className="flex items-center gap-2">
        //                             <span className="font-semibold">{`${pokemonData.weight / 10}`}</span> {/* Replace 'X' with the weight value */}
        //                             <span className="text-sm font-normal">kg</span>
        //                         </span>
        //                     </div>

        //                 </div>
        //                 <div className="flex flex-col items-center">

        //                     <div className="flex flex-col items-center">
        //                         <span className="font-semibold">Height</span>
        //                         <span className="flex items-center gap-2">
        //                             <span className="font-semibold">{`${pokemonData.height / 10}`}</span> {/* Replace 'X' with the weight value */}
        //                             <span className="text-sm font-normal">m</span>
        //                         </span>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="flex flex-col gap-6">
        //             <img src={DividerBallIcon} alt="ball-icon" className="w-14 h-14" />
        //             <hr className="w-px h-20 bg-opacity-25 bg-white mx-auto" />
        //             <img src={DividerBallIcon} alt="ball-icon" className="w-14 h-14" />
        //         </div>

        //         <div className="px-10 py-16 md:px-4 md:py-8">
        //             <span className="block text-2xl leading-2.5 font-normal mb-4">Stats</span>
        //             <ul className="flex flex-col gap-6">
        //                 {pokemonData.stats.map(({ stat, base_stat }) =>
        //                     React.Children.toArray(
        //                         <li className="flex items-center">
        //                             <span className="min-w-[4.38rem] text-base font-normal inline-block">{formatStatName(stat.name)}</span>
        //                             <span className="min-w-[1.88rem] mx-5 font-semibold text-center">{base_stat}</span>
        //                             <div className="w-full h-1/20 bg-gray-500 rounded-sm overflow-hidden">
        //                                 <ProgressBarFill
        //                                     base_stat={base_stat}
        //                                 ></ProgressBarFill>
        //                             </div>
        //                         </li>
        //                     )
        //                 )}
        //             </ul>
        //         </div>

        //         {!mobile && renderCloseButton()}
        //     </div>
        //     {mobile && renderCloseButton()}
        // </div >
        <><div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}

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
                        <div className="p-6"> {pokemonData.stats.map(({ stat, base_stat }) =>
                            React.Children.toArray(
                                <li className="flex items-center">
                                    <span className="min-w-[4.38rem] text-base font-normal inline-block">{formatStatName(stat.name)}</span>
                                    <span className="min-w-[1.88rem] mx-5 font-semibold text-center">{base_stat}</span>

                                </li>
                            )
                        )}</div>

                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setModal(false)}
                        >
                            Close
                        </button>
                        <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                        // onClick={() => setShowModal(false)}
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div></>

    );
};