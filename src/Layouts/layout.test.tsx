import { describe, it, expect, vi, } from "vitest"
import { render, screen } from '@testing-library/react';
import { Header } from "./Header";
import PokemonLogo from 'src/assets/Images/logo-pokemon.svg';

describe('Header Component', () => {
    const mockProps = {
        setPokemonList: vi.fn(),
        pokemonAmount: 10,
        setPokemonAmount: vi.fn(),
        setError: vi.fn(),
        setLoading: vi.fn(),
        setPage: vi.fn(),
        setShowPagination: vi.fn(),
        disabledButton: false,
        setDisabledButton: vi.fn(),
        searchBarRef: { current: document.createElement('div') },
    };

    it('renders Header component with Pokemon logo, SearchFilter, and SocialMedia', () => {
        render(<Header {...mockProps} />);

        const logoElement = screen.getByAltText('logo-navbar');
        expect(logoElement).toBeInTheDocument();
        expect(logoElement).toHaveAttribute('src', PokemonLogo);




        const socialMediaElement = screen.getByRole('link', { name: /github/i });
        expect(socialMediaElement).toBeInTheDocument();

    });


});
