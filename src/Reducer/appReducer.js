
const initialeState = {
    basket: [],
    user: null
}

function appReducer(state = initialeState, action){
    switch(action.type){
        case 'ADD_PRODUCT': const el = state.basket.findIndex(item => item.id === action.payload.id)
            if(el !== -1){
                return {
                    ...state,
                    basket: state.basket.map((item, i) => {
                        if(i === el) {
                            item.amount = item.amount + 1;
                            return item;
                        }else return item
                    })
                }
            }
            else return {
                //add product
                ...state,
                basket: [...state.basket, action.payload]
            }
        case 'DECREASE_AMOUNT':
            return {
                ...state,
                basket: state.basket.map(item =>{
                    if(item.id === action.payload.id){
                        item.amount = item.amount - 1;
                        return item;
                    }else return item;
                }).filter(item => item.amount !== 0)
            }
        case 'DELETE_PRODUCT':
            return {
                ...state,
                basket: state.basket.filter(item => item.id !== action.payload.id)
            }
        case 'SET_BASKET':
            return {
                ...state,
                basket: action.payload
            }
        case 'SET_USER':
            console.log(">>>>", action.payload);
            return {
                ...state,
                user: action.payload
            }
        default: return state
    }
}
export default appReducer;