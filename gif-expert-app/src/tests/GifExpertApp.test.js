import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifExpertApp from './../GifExpertApp'

describe('Test in GifExpertApp', () => {
    const wrapper = shallow(<GifExpertApp/>)

    test('should render on match with snapshot', () => {
        expect(wrapper).toMatchSnapshot();

    })
    test('should show 1 GifGrid at initial state', () => {
        expect(wrapper.find('GifGrid').length).toBe(1)
    })
    
})
