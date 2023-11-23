import { useMedia } from "src/hooks/useMedia";
import LeftArrowIcon from "src/assets/Images/icon-arrow-left.svg";
import RightArrowIcon from "src/assets/Images/icon-arrow-right.svg";
import { ReactNode, SyntheticEvent, useState } from "react";

type SlideProps = {
    children: ReactNode;
};

export const Slide = ({ children }: SlideProps) => {
    const [slidePosition, setSlidePosition] = useState(0);
    const mobile = useMedia("(max-width: 31.25rem)");

    const slideNavigation = ({ currentTarget }: SyntheticEvent) => {
        const direction = (currentTarget as HTMLButtonElement).value;

        direction === "next"
            ? setSlidePosition(slidePosition <= -87.5 ? -87.5 : slidePosition - 12.5)
            : setSlidePosition(slidePosition === 0 ? 0 : slidePosition + 12.5);
    };

    const transformStyle = `translateX(${slidePosition}rem)`;


    return (
        <div className="flex items-center gap-4">
            {!mobile && (
                <button
                    className="bg-none flex justify-center items-center"
                    value="prev"
                    onClick={slideNavigation}
                    disabled={slidePosition === 0 && true}
                >
                    <img className="w-14 h-14" alt="left-arrow" src={LeftArrowIcon} />

                </button>
            )}
            <div className="max-w-full  overflow-hidden">
                <div className="flex gap-2 transition-transform duration-400" style={{ transform: transformStyle }}>
                    {children}
                </div>
            </div>


            {!mobile && (
                <button
                    className="bg-none flex justify-center items-center"
                    value="next"
                    onClick={slideNavigation}
                    disabled={slidePosition === -87.5 && true}
                >
                    <img className="w-14 h-14" alt="left-arrow" src={RightArrowIcon} />
                </button>
            )}
        </div>
    );
};