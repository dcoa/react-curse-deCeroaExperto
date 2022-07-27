import { screen, render } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../auth/authContext"
import { PublicRoute } from "../../routers/PublicRoute"

describe('PublicRoute', () => {
    test('should return the children if is not authenticate', () => {
        const contextValue = {
            user: { logged: false }
        }
        render((<AuthContext.Provider value={contextValue}>
            <PublicRoute>
                <div>Hello</div>
            </PublicRoute>
        </AuthContext.Provider>
        ));
        expect(screen.getByText('Hello')).toBeTruthy();
    });

    test('should navigate if is an authenticate user', () => {
        const contextValue = {
            user: {
                logged: true,
                name: 'John',
                id: '123'
            }
        }
        render((<AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path="/login" element={(
                        <PublicRoute>
                            <div>Hello</div>
                        </PublicRoute>
                    )} />
                    <Route path="/" element={(<div>Screen Marvel</div>)} />
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
        ));
        expect(screen.getByText('Screen Marvel')).toBeTruthy();

    })
})