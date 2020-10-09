var INIT_STATE = {
    hackerNews: [],
    isLoading: false,
    error: false,
    currentPage: null
};

function reducer(state = INIT_STATE, action) {

    switch (action.type) {
        case 'START_REQUEST': return { ...state, isLoading: true, error: false };
        case 'SET_NEWS_SUCCESS': return { hackerNews: action.payload, isLoading: false, error: false, currentPage: action.page };
        case 'SET_NEWS_FAILURE': return { isLoading: false, error: action.errorMessage };
        default: return state;
    }
}

export default reducer;