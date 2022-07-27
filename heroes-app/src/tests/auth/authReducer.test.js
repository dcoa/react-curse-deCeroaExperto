import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('authReducer', () => {

    test('should returon the default state', () => {
        const stateInit = { logged: false };
        const action = {};
        const result = authReducer(stateInit, action)

        expect(result).toEqual(stateInit);
    });

    test('should call the login and authenticate', () => {
        const stateInit = { logged: false };
        const action = {
            type: types.login,
            payload: {
                name: 'John',
                id: '123'
            }
        };
        const result = authReducer(stateInit, action)
        expect(result).toEqual({
            logged: true,
            ...action.payload
        });
    });

    test('should call the logout and close session', () => {
        const stateInit = {
            logged: true,
            name: 'John',
            id: '123'
        };
        const action = {
            type: types.logout,
            payload: {
                name: 'John',
                id: '123'
            }
        };
        const result = authReducer(stateInit, action)
        expect(result).toEqual({ logged: false });
    });
})