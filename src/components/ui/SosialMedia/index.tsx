import GithubLogo from "src/assets/Images/logo-github.svg"


export const SocialMedia = () => {
    return (

        <ul className="flex gap-2">
            <a

                target="_blank"
                rel="noopener noreferrer"
                className=" p-2 flex justify-center items-center" href="https://github.com/sonyfebrian/pokemon-dex-app">

                <img src={GithubLogo} alt="github-logo" className="w-8 h-8" />
            </a>
        </ul>

    );
};