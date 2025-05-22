
import { describe, expect, it, vi } from 'vitest';
import NavBar from '../components/NavBar';
import { AuthContext } from '../context/authContext';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

    
    it('Mostra o botão "Login" quando não autenticado', async () => {
        mockAuthContext.isAuth = false;

        render(
            <AuthContext.Provider value={mockAuthContext}>
                <NavBar 
                    isAuthenticated={false}
                    handleLogout={mockHandleLogout}
                    navigate={mockNavigate}
                />
            </AuthContext.Provider>
        );
        
        const loginButton = screen.getByRole('button', { name: /Login/i });
        expect(loginButton).toBeInTheDocument();
        expect(loginButton).toBeVisible();
    });


    it('Mostra o botão "Sair" (Logout) quando autenticado', async () => {
        mockAuthContext.isAuth = true;

        render(
             <AuthContext.Provider value={mockAuthContext}>
                <NavBar 
                    isAuthenticated={true}
                    handleLogout={mockHandleLogout}
                    navigate={mockNavigate}
                />
            </AuthContext.Provider>
        );

        const loginButton = screen.getByRole('button', { name: /Sair/i });
        expect(loginButton).toBeInTheDocument();
        expect(loginButton).toBeVisible();
    });

    it('Chama handleLogout ao clicar no botão Sair', async () => {
        const user = userEvent.setup();
        mockAuthContext.isAuth = true;
        
        render(
             <AuthContext.Provider value={mockAuthContext}>
                <NavBar 
                    isAuthenticated={true}
                    handleLogout={mockHandleLogout}
                    navigate={mockNavigate}
                />
            </AuthContext.Provider>
        );

        const logoutButton = screen.getByRole('button', { name: /Sair/i });
        await user.click(logoutButton);
    
        expect(mockHandleLogout).toHaveBeenCalledTimes(1);
        expect(mockHandleLogout).toHaveBeenCalledWith();
    });
});



