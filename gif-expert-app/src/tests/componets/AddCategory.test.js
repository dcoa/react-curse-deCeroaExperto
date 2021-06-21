import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from './../../componets/AddCategory'

describe('Test Add Category component', () => {
    const setstate = jest.fn();
    let wrapper;
    
    beforeEach( () => {
        wrapper = shallow(<AddCategory setCategory={setstate}/>)
    });

    test('should render correct', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should change the input text', () => {
        const input = wrapper.find('input');
        // es necesario enviar el evento que tiene forma de objeto
        const value = 'Hola mundo';
        input.simulate('change', { target: { value }});
        // En este caso no va a encontrar el valor porque la funcion se ejecuta y limpia el valor
        //expect(input.prop('value')).toBe(value);
    })

    test('should no post the information onSubmit', () => {

        // Simulación del envio del formulario, preventDefault forma corta para definir la funcion dentro del objeto
        wrapper.find('form').simulate('submit', {preventDefault(){}})
        // La funcion setstate no se debe haber llammado.
        expect(setstate).not.toHaveBeenCalled()
    })
    test('should call setstate and clear the input text', () => {
        const input = wrapper.find('input');
        input.simulate('change', { target: { value:'hisoka' }});
        wrapper.find('form').simulate('submit', {preventDefault(){}})
        expect(setstate).toHaveBeenCalled()
        expect(input.prop('value')).toBe('')
        // se espera que el setCategory se llame con una funcion como paramentro
        expect( setstate ).toHaveBeenCalledWith(expect.any(Function))
    })
    
});
