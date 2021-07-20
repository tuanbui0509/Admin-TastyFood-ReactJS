const initState = true;

export default function myReducers(state = initState, action){
        switch (action.type) {
            case 'ISTOKEN':
                return true;
                case 'LOGOUT':
                    return false;
            default:
                return state;
              
        }
}
