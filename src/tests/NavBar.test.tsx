import { describe, expect, it, vi } from 'vitest';
import NavBar from '../components/NavBar';
import { AuthContext } from '../context/authContext';
import { render, screen } from '@testing-library/react';

describe('NavBar', () => {
    const mockHandleLogout = vi.fn();
    const mockNavigate = vi.fn();

    const mockAuthContext = {
        isAuth : false,
        setIsAuth: vi.fn(),
        login: vi.fn(),
        logout: vi.fn(),
    };

    it("Renderiza o título do blog e o ícone", () => {
        render(
            <AuthContext.Provider value={mockAuthContext}>
                <NavBar
                    isAuthenticated={false}
                    handleLogout={mockHandleLogout}
                    navigate={mockNavigate}
                />
            </AuthContext.Provider>
        );

        expect(screen.getByText(/Blog Educacional/i)).toBeInTheDocument();
    
        const iconImagem = screen.getByRole('img', {name: /coruja/i });
        expect(iconImagem).toBeInTheDocument();
        expect(iconImagem).toHaveAttribute('src', expect.stringContaining('coruja.png'));
    });   
    
});



