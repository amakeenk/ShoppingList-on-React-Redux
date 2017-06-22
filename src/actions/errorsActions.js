export const addError = (error) => {
    return {
        type: 'ADD_ERROR',
        payload: error
    }
};
