import { shallow } from "enzyme"
import { TodoList } from "../../../components/08-useReducer/TodoList"
import { demoTodos } from "../../fixtures/demoTodos"

describe('Test on TodoList component', () => {
    const handleToggle = jest.fn();
    const handleDelete = jest.fn();

    const wapper = shallow(
        <TodoList
            todos={demoTodos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />)

    test('should show correctly', () => {

        expect(wapper).toMatchSnapshot();

    });

    test('should have 2 TodoListItem', () => {

        expect(wapper.find('TodoListItem').length).toBe(demoTodos.length);
        // Evaluar que al TodoListItem se le envia la prop handleDelete y es una funcion
        expect(wapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
        expect(wapper.find('TodoListItem').at(0).prop('handleToggle')).toEqual(expect.any(Function));
        expect(wapper.find('TodoListItem').at(0).prop('todo')).toEqual(expect.any(Object));


    });
})
