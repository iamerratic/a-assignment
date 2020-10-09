const INIT_STATE = {
    upvotes: [],
    error: null
};


function reducer(state = INIT_STATE, action) {

    switch (action.type) {

        case 'NEW_UPVOTES': return { upvotes: action.upvotes, error: null };
        case 'SET_ERROR': return { ...state, error: action.errorMessage };
        default: return state;
    }
}



export default reducer;