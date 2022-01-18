import { renderHook, act } from "@testing-library/react-hooks"
import { useCounter } from "../../hooks/useCounter"

describe('Test on hook useCounter', () => {
    test('should return default values', () => {
        const { result } = renderHook( () => useCounter());

        expect(result.current.counter).toBe(10)  
        expect(typeof result.current.increment).toBe('function')  
        expect(typeof result.current.decrement).toBe('function')  
        expect(typeof result.current.reset).toBe('function')  

    })
    test('should return 100 like initial value', () => {
        const { result } = renderHook( () => useCounter(100));

        expect(result.current.counter).toBe(100)  

    })
    test('should increment the counter in 200', () => {
        const { result } = renderHook( () => useCounter(100));
        const increment = result.current.increment;
        //act permite ejecutar funciones
        act(()=>increment(200)) 
        const counter = result.current.counter;
        expect(counter).toBe(300)  

    })

    test('should decrement the counter in 2', () => {
        const { result } = renderHook( () => useCounter(100));
        const decrement = result.current.decrement;
        act(()=>decrement(2)) 
        const counter = result.current.counter;
        expect(counter).toBe(98)  

    })

    test('should reset the counter to initial state 100', () => {
        const { result } = renderHook( () => useCounter(100));
        const { decrement, reset } = result.current;
        act(()=>{
            decrement(200);
            reset()
        }) 
        const counter = result.current.counter;
        expect(counter).toBe(100)  

    })
    
    
})
