
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect, vi, } from "vitest"
import Button from './Button';
import { SocialMedia } from './SosialMedia';
import GithubLogo from 'src/assets/Images/logo-github.svg';


describe('Button Component', () => {
    it('renders a button with provided text', () => {
        const onClickMock = vi.fn();
        const { getByText } = render(
            <Button onClick={onClickMock}>Click Me</Button>
        );

        const buttonElement = getByText('Click Me');
        expect(buttonElement).toBeInTheDocument();
    });

    it('executes the onClick handler when clicked', () => {
        const onClickMock = vi.fn();
        const { getByText } = render(
            <Button onClick={onClickMock}>Click Me</Button>
        );

        const buttonElement = getByText('Click Me');
        fireEvent.click(buttonElement);
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    it('applies specific classes based on props', () => {
        const { container, rerender } = render(<Button>Test</Button>);

        const buttonElement = container.firstChild as HTMLElement;
        expect(buttonElement).toHaveClass('w-10 h-10 border border-white');

        rerender(<Button selected>Test</Button>);
        expect(buttonElement).toHaveClass('bg-[#2F5AFF]');

        rerender(<Button disabled>Test</Button>);
        expect(buttonElement).toHaveClass('pointer-events-none opacity-50');
    });
});





describe('SocialMedia Component', () => {
    it('renders SocialMedia component with GitHub link', () => {
        render(<SocialMedia />);

        const githubLink = screen.getByRole('link', { name: /github/i });
        expect(githubLink).toBeInTheDocument();
        expect(githubLink).toHaveAttribute('href', 'https://github.com/sonyfebrian/pokemon-dex-app');
        expect(githubLink).toHaveAttribute('target', '_blank');
        expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');

        const githubLogo = screen.getByAltText('github-logo');
        expect(githubLogo).toBeInTheDocument();
        expect(githubLogo).toHaveAttribute('src', GithubLogo);
        expect(githubLogo).toHaveAttribute('alt', 'github-logo');
        expect(githubLogo).toHaveClass('w-8 h-8');
    });
});




