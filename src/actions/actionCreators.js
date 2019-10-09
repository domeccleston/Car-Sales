import * as types from './actionTypes';

const buyItem = item => {
    return {
        type: types.BUY_ITEM,
        payload: item
    }
}

const removeItem = item => {
    return {
        type: types.REMOVE_IT,
        payload: item
    }
}