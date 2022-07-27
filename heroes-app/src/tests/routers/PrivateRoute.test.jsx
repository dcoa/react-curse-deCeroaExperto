import { screen, render } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../auth/authContext"
import { PrivateRoute } from "../../routers/PrivateRoute";

describe('Private', () => {
    test('should return the children if is authenticated', () => {
        const contextValue = {
            user: {
                logged: true,
                name: 'John',
                id: '123'
            }
        }
        Storage.prototype.setItem = jest.fn();

        render((<AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/marvel']}>
                <PrivateRoute>
                    <div>Hello</div>
                </PrivateRoute>
            </MemoryRouter>

        </AuthContext.Provider>
        ));
        expect(screen.getByText('Hello')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')
    });

    test('should navigate if is an unauthenticate user', () => {
        const contextValue = {
            user: { logged: false }
        }
        render((<AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/marvel']}>
                <Routes>
                    <Route path="/marvel" element={(
                        <PrivateRoute>
                            <div>Hello</div>
                        </PrivateRoute>
                    )} />
                    <Route path="/login" element={(<div>Screen Login</div>)} />
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
        ));
        expect(screen.getByText('Screen Login')).toBeTruthy();

    })
})