const intialState = {
    costFilter: '',
    originFilter: '',
    classFilter: '',
}

export const generalStateReducer = (state = intialState, action = {}) => {
    switch(action.type) {
        case 'SET_COST_FILTER':
            return {
                ...state,
                costFilter: action.payload
            }
        case 'SET_ORIGIN_FILTER':
            return {
                ...state,
                originFilter: action.payload
            }
        case 'SET_CLASS_FILTER':
            return {
                ...state,
                classFilter: action.payload
            }
        case 'CLEAR_ALL_FILTERS':
            return {
                ...state,
                costFilter: '',
                originFilter: '',
                classFilter: ''
            }
        default: 
            return state
    }
}