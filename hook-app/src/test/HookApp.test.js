import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';



describe('Test on component <HookApp />', () => {
    
    test('should shown <HookApp/>', () => {
        const wrapper = shallow(<HookApp/>);

        expect(wrapper).toMatchSnapshot();

    })
    
})