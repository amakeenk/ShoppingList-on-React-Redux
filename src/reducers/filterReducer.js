const filterReducer = (state = 'show_all', action) => {
    switch (action.type) {
        case "SET_FILTER":
            return action.payload;
            break;
    }
    return state;
};

export default filterReducer;