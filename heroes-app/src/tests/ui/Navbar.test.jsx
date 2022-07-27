import { Navbar } from "../../componets/ui/Navbar"
import { AuthContext } from "../../auth/authContext"
import { MemoryRouter, useNavigate } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { types } from "../../types/types";

const mockNavigate = jest.fn();
jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

describe('Navbar', () => {
    const contextValue = {
        user: {
            logged: true,
            name: 'John',
            id: '123'
        },
        dispatch: jest.fn()
    };
    beforeEach(() => jest.clearAllMocks());

    test('should show user authenticated name', () => {

        render((<AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/']}>
                <Navbar />
            </MemoryRouter>
        </AuthContext.Provider>
        ));

        expect(screen.getByText(contextValue.user.name)).toBeTruthy();
    })

    test('should call logout and navigate function when click the logout boton', () => {

        render((<AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/']}>
                <Navbar />
            </MemoryRouter>
        </AuthContext.Provider>
        ));
        const buton = screen.getByText('Logout');
        const action = { type: types.logout };
        Storage.prototype.removeItem = jest.fn();
        fireEvent.click(buton);
        expect(contextValue.dispatch).toBeCalledWith(action);
        expect(localStorage.removeItem).toHaveBeenCalledWith('user');
        expect(mockNavigate).toBeCalledWith('/login', {
            replace: true
        })
    })
})