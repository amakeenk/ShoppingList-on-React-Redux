export const addPurchase = (purchase) => {
    return {
        type: 'ADD_PURCHASE',
        payload: purchase
    }
};

export const togglePurchase = (id) => {
    return {
        type: 'TOGGLE_PURCHASE',
        payload: id
    }
};

export const deletePurchase = (id) => {
    return {
        type: 'DELETE_PURCHASE',
        payload: id
    }
};

export const editPurchase = (id) => {
    return {
        type: 'EDIT_PURCHASE',
        payload: id
    }
};

export const savePurchase = (id, newValue) => {
    return {
        type: 'SAVE_PURCHASE',
        payload: {
            id: id,
            newValue: newValue
        }
    }
};

export const deleteAll = () => {
    return {
        type: 'DELETE_ALL'
    }
};

export const deleteIsBought = () => {
    return {
        type: 'DELETE_IS_BOUGHT'
    }
};