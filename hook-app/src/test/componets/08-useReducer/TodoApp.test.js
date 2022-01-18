import { act } from "@testing-library/react";
import { mount, shallow } from "enzyme";
import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Test on TodoApp component', () => {

    const wrapper = shallow(<TodoApp/>)
    
    Storage.prototype.setItem = jest.fn(() => {});
    test('should show the componet correctly', () => {

        expect(wrapper).toMatchSnapshot();
        
    });

    test('should add a new task', () => {
        // probar el componete app en general
        const wrapper = mount(<TodoApp/>);
        act(()=>{
            wrapper.find('TodoAdd').prop('handleAdd')( demoTodos[0] );
            wrapper.find('TodoAdd').prop('handleAdd')( demoTodos[1] );
        });


        expect(wrapper.find('h1').text().trim()).toBe('To Do App: 2');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2)

    });


    test('should delete a todo', () => {
        wrapper.find('TodoAdd').prop('handleAdd')( demoTodos[0] );

        expect(wrapper.find('h1').text().trim()).toBe('To Do App: 1');
        wrapper.find('TodoList').prop('handleDelete')( demoTodos[0].id );
        expect(wrapper.find('h1').text().trim()).toBe('To Do App: 0');


    })
    
    
    

});
