export const todoReducer = ( state = [], action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload]   
            case 'delete':
                return state.filter(ob => ob.id !== action.payload) //payload es el id 
                case 'toggle':
                    return state.map(ob => ob.id === action.payload ? {...ob, done: !ob.done} : ob) //payload es el id
        default:
            return state;
    }
}