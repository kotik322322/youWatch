import { SET_INFO_TO_CARD } from '../actions/setInfoToCard'

const initialState = {
    infoToCard: []
}

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_INFO_TO_CARD: {
            return {...state, infoToCard : action.payload}
        }







        default: {
            return state
        }
    }
}

export default itemsReducer