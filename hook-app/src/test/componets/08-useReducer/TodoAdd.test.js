import { shallow } from "enzyme"
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd"

describe('Test on TodoAdd', () => {

    const handleAdd = jest.fn(); 
    const wrapper = shallow(
    <TodoAdd
    handleAdd={handleAdd}    
    />);

    test('should show correctly', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('should not call handleAdd', () => {
        
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault: () =>{}})

        expect(handleAdd).toHaveBeenCalledTimes(0)
    });

    test('should call the function handleAdd', () => {

        const value = 'Learn mongo';
        wrapper.find('input').simulate('change', {target: { value, name: 'description'}})
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault: () =>{}})

        expect(handleAdd).toHaveBeenCalledTimes(1);
        // evalua que la funcion se llame con esos argumentos y el id no importa cualquier numero
        expect(handleAdd).toHaveBeenCalledWith({
            desc:value,
            done: false,
            id: expect.any(Number)
        });

        expect(wrapper.find('input').prop('value')).toBe('')
    })
    
    
    
});
