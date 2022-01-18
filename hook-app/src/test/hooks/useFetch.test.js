import { renderHook } from "@testing-library/react-hooks"
import { useFetch } from "../../hooks/useFetch";

describe('Test useFetch costum hook', () => {

    test('should return default values', () => {

        const { result } = renderHook( () => useFetch(`https://www.breakingbadapi.com/api/quotes/1`));

        const { data, loading, error } = result.current;
        
        expect(data).toBeNull();
        expect(loading).toBeTruthy();
        expect(error).toBeNull();
    });

    test('should return the data, loading false and error false', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetch(`https://www.breakingbadapi.com/api/quotes/1`));
        await waitForNextUpdate({timeout: 3000});

        const { data, loading, error } = result.current;
        
        expect(data.length).toBe(1);
        expect(loading).toBeFalsy();
        expect(error).toBeNull();
    });
    
    test('should manage the error', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetch(`https://reqres.in/apiooo/users?page=2`));
        await waitForNextUpdate({timeout: 3000});

        const { data, loading, error } = result.current;
        
        expect(error).toBe('No se pudo cargar la info');
        expect(loading).toBeFalsy();
        expect(data).toBeNull();
    });
})
