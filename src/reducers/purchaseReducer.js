import _ from 'lodash';

const initialState = [
    {
        purchase: "хлеб",
        isBought: false,
        isEditing: false
    },
    {
        purchase: "колбаса",
        isBought: false,
        isEditing: false
    },
    {
        purchase: "майонез",
        isBought: false,
        isEditing: false
    },
    {
        purchase: "пирожок",
        isBought: false,
        isEditing: false
    },
    {
        purchase: "мороженка",
        isBought: true,
        isEditing: true
    }
];


const purchaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PURCHASE":
            return [
                {
                    purchase: action.payload,
                    isBought: false,
                    isEditing: false
                },
                ...state
            ];
            break;

        case "TOGGLE_PURCHASE":
            const findItem = state.find((item, index) => index === action.payload);
            findItem.isBought = !findItem.isBought;
            return [
                ...state
            ];
            break;

        case "DELETE_PURCHASE":
            _.remove(state, (item, index) => index === action.payload);
            return [
                ...state
            ];
            break;

        case "DELETE_ALL":
            state.splice(0, state.length);
            return [
                ...state
            ];
            break;

        case "DELETE_IS_BOUGHT":
            _.remove(state, (item, index) => item.isBought === true);
            return [
                ...state
            ];
            break;

        case "EDIT_PURCHASE":
            const findItemForEdit = state.find((item, index) => index === action.payload);
            findItemForEdit.isEditing = !findItemForEdit.isEditing;
            return [
                ...state
            ];
            break;

        case "SAVE_PURCHASE":
            const findItemForSave = state.find((item, index) => index === action.payload.id);
            findItemForSave.isEditing = !findItemForSave.isEditing;
            findItemForSave.purchase = action.payload.newValue;
            return [
                ...state
            ];
            break;
    }
    return state;
};

export default purchaseReducer;
