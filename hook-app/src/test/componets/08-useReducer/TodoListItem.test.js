import { shallow } from "enzyme"
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem"
import { demoTodos } from "../../fixtures/demoTodos";


describe('Test on TodoListItem component', () => {

    const handleToggle = jest.fn();
    const handleDelete =jest.fn();
    const wrapper = shallow(
        <TodoListItem
            todo={demoTodos[1]}
            index={ 0 }
            handleToggle={ handleToggle }
            handleDelete={ handleDelete }
        />)


    test('should show correctly', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('should call delete function', () => {
        
        wrapper.find('button').simulate('click')
        expect( handleDelete ).toBeCalledWith( demoTodos[1].id );

    });

    test('should call toggle function', () => {

        wrapper.find('p').simulate('click')
        expect( handleToggle ).toBeCalledWith( demoTodos[1].id );

    });

    test('should show  the text correctly', () => {
        
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(`${0 + 1}. ${demoTodos[1].desc}`)

    });

    test('should to be the complete class if the task is done', () => {

        const todo = demoTodos[1];
        todo.done = true

        const wrapper = shallow(
            <TodoListItem
                todo={todo}
                index={ 0 }
                handleToggle={ handleToggle }
                handleDelete={ handleDelete }
            />);
        
        expect(wrapper.find('p').hasClass('doneTask')).toBeTruthy();

    });
})

