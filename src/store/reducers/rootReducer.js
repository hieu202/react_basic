const initState = {
    users: [
        {id: 1, name : 'Eric'},
        {id: 2, name : 'Hiếu'}
    ]
}

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case 'DELETE_USER':
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id);
            return {
                ...state,users
            };
        case 'CREATE_USER':
            let user = {id: 1000, name : 'Minh Hiếu'}
            return {
                ...state, users: [...state.users, user]
            }   
        default:
            return state;    
    }
    return state;
}     
export default rootReducer; 