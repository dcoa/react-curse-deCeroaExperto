import React from "react"
import { shallow } from "enzyme"
import { MultipleCutomHooks } from "../../components/03-examples/MultipleCutomHooks"
import { useFetch } from "../../hooks/useFetch"
import { useCounter } from "../../hooks/useCounter";

jest.mock("../../hooks/useCounter");
jest.mock("../../hooks/useFetch");

describe('Test on MultipleCutomHooks component', () => {

    beforeEach(()=>{
        useCounter.mockReturnValue({
            counter: 1,
        })
    })


    test('should render ', () => {
        // Crea un mock del use fetch para poder ver el comportamiento del componente
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })

        const wapper = shallow(<MultipleCutomHooks/>)
        expect(wapper).toMatchSnapshot();
    })
    
    test('should show the information about the quote', () => {
        useFetch.mockReturnValue({
            data: [{
                quote: 'Habia una vez',
                author: 'Jhon Doe'
            }],
            loading: false,
            error: null
        })

        const wapper = shallow(<MultipleCutomHooks/>)
        expect(wapper).toMatchSnapshot();
        expect(wapper.find('.alert').exists()).toBeFalsy();
        expect(wapper.find('p').text().trim()).toBe('Habia una vez');
        expect(wapper.find('footer').text().trim()).toBe('Jhon Doe');

    })
})
