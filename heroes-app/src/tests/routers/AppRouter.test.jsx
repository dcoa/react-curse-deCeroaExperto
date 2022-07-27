import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../auth/authContext"
import { AppRouter } from "../../routers/AppRouter"

describe('AppRouter', () => {

    test('should show the login if not authenticted', () => {
        const contextValue = {
            user: { logged: false }
        };
        render((
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        ));
        expect(screen.getAllByText('Login').length).toBe(2);
    });

    test('should show Marvel Screen when a user is authenticated', () => {
        const contextValue = {
            user: {
                logged: true,
                name: 'John',
                id: '123'
            }
        };
        render((<AuthContext.Provider value={contextValue}>
            <AppRouter />
        </AuthContext.Provider>
        ));
        expect(screen.getAllByText('Marvel Comics Heroes')).toBeTruthy();
    });
});