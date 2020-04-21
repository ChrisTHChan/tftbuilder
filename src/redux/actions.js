export const setCostFilter = (value) => {
    return {
        type: 'SET_COST_FILTER',
        payload: value
    }
}

export const setOriginFilter = (value => {
    return {
        type: 'SET_ORIGIN_FILTER',
        payload: value,
    }
})

export const setClassFilter = (value) => {
    return {
        type: 'SET_CLASS_FILTER',
        payload: value,
    }
}

export const clearAllFilters = () => {
    return {
        type: 'CLEAR_ALL_FILTERS',
    }
}