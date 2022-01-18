import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demoTodos";



describe('Test on todoReducer', () => {

    test('should return the default state', () => {
        
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    });


    test('should add new task', () => {
        
        const newTask = {
            id: 3,
            desc: 'Learn Saas',
            done: true
        };
        const state = todoReducer(demoTodos, {
            type: 'add',
            payload: newTask
        });

        expect(state.length).toBe(3);
        expect(state.includes(newTask)).toBeTruthy();
        expect(state).toEqual([...demoTodos, newTask]);

    });

    test('should delete a new todo', () => {
        const state = todoReducer(demoTodos, {
            type: 'delete',
            payload: 1
        });

        expect(state.length).toBe(1);
        expect( state ).toEqual([demoTodos[1]])

    });


    test('should toggle the task (done)', () => {
        const state = todoReducer(demoTodos, {
            type: 'toggle',
            payload: 1
        });
        expect(state[0].done).toBeTruthy();
        expect(state[1]).toEqual(demoTodos[1])

    });
    
})
