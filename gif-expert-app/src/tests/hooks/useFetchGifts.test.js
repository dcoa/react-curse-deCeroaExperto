import React from 'react';
import '@testing-library/jest-dom';
import {renderHook } from '@testing-library/react-hooks'
import { shallow } from 'enzyme';
import { useFetchGifts } from "../../hooks/useFetchGifts";

// se usara react hook testing libraty
describe('test in useFetchGifts hook', () => {
    test('should return the initil state', async() => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifts('Hisoka'))
        const { data, loading } = result.current;
       // const { data, loading } = useFetchGifts('Hisoka');
       await waitForNextUpdate()

        expect(data).toEqual([])
        expect(loading).toBeTruthy()
    })
    
    test('should return an array of images and loading in false', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifts('Hisoka'))
        await waitForNextUpdate()
        const { data, loading } = result.current;
        expect(data.length).toBe(9)
        expect(loading).toBeFalsy()
    })  
    
})
