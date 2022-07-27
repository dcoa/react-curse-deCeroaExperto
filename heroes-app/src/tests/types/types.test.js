import { types } from "../../types/types"

describe('Types', () => { 
    test('should return types', () => { 
        expect(types).toEqual( {
            login: '[auth] Login',
            logout: '[auth] Logout'
        })
     })
 })