import { renderHook, act } from "@testing-library/react-hooks"
import { useForm } from "../../hooks/useForm"

describe('Test on useForm hook', () => {
    const initialForm = {
        name: 'Lina',
        email: 'lin@example.com'
    };


    test('should return a default value', () => {
        const { result } = renderHook(() => useForm(initialForm));
        expect(result.current.formValues).toEqual(initialForm);
        expect(typeof result.current.handleInputChange).toBe('function');
        expect(typeof result.current.reset).toBe('function');

    })

    test('should change the name on form value', () => {
        const { result } = renderHook(() => useForm(initialForm));
        act(() => {
            result.current.handleInputChange({ target: { name: 'name', value: 'Rosa' } })
        })

        expect(result.current.formValues.name).toBe('Rosa');
        expect(result.current.formValues).toEqual({...initialForm, name: 'Rosa'});



    })

    test('should reset the form', () => {
        const { result } = renderHook(() => useForm(initialForm));
        act(() => {
            result.current.handleInputChange({ target: { name: 'name', value: 'Rosa' } })
            result.current.reset()
        })

        expect(result.current.formValues).toEqual(initialForm);
    })
})