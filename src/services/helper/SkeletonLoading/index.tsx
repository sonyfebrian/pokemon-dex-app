import { useState } from "react";


type SkeletonLoadingProps = {
    src: string;
    alt: string;
};



export const SkeletonLoading = ({ src, alt }: SkeletonLoadingProps) => {
    const [skeleton, setSkeleton] = useState(true);

    return (
        <div className="relative aspect-w-1 aspect-h-1" >
            {skeleton && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-full animate-pulse"></div>
                </div>
            )}
            <img
                onLoad={() => setSkeleton(false)}
                src={src}

                className={`min-w-[16rem] min-h-[16rem] grid-area-1/1 opacity-${skeleton ? '0' : '100'} transition duration-200`}
                alt={alt}

            />
        </div>
    );
};