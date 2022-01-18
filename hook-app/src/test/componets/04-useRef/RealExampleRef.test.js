import React from "react"
import { shallow } from "enzyme"
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef"

describe('Test on RealExampleRef', () => {
    const wapper = shallow(<RealExampleRef/>)

    test('should render the component', () => {
        expect(wapper).toMatchSnapshot();
        expect(wapper.find('MultipleCutomHooks').exists()).toBeFalsy();

    })
 
    test('should show the component MultipleCutomHooks', () => {
        wapper.find('button').simulate('click');
        expect(wapper).toMatchSnapshot();
        expect(wapper.find('MultipleCutomHooks').exists()).toBeTruthy();
        
    })
})
