import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../componets/GifGrid'
import { useFetchGifts } from '../../hooks/useFetchGifts';

jest.mock('../../hooks/useFetchGifts');

describe('Testing in gifGrid.js', () => {
    const cat = 'one piece'

    test('should render correct', () => {
        //mock de el hook inicial
        useFetchGifts.mockReturnValue({
            data: [],
            loading: true
        });
        // no lo puedo colocar por fuera porque no toma el mock
        const wrapper = shallow(<GifGrid Category={cat} />)
        expect(wrapper).toMatchSnapshot();
    })

    test('should show items when images are loaded', () => {
        const img = [{
            id: 'ABC',
            url: 'http://localhost(cualquiercosa/cosa.jpg',
            title: 'Prueba'
        },
        {
            id: 'CDE',
            url: 'http://localhost(cualquiercosa/cosa.jpg',
            title: 'Prueba 2'
        }]
        // Se hace un mock del constum hook useFetchGifs
        useFetchGifts.mockReturnValue({
            data: img,
            loading: false
        });
        const wrapper = shallow(<GifGrid Category={cat} />)
        //Forma mas facil de analizar el renderizado expect(wrapper).toMatchSnapshot()
        //Encnenutra el elemento GifGridItem y cuantos hay en este caso solo debe haber 1 
        expect(wrapper.find('GifGridItem').length).toBe(img.length)
    })

})
