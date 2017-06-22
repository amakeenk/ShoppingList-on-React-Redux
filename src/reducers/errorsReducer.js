const errorsReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_ERROR":
            return [action.payload];
            break;
    }
    return state;
};

export default errorsReducer;
