const INIT_STATE = {
    hideNews: []
};


function reducer(state = INIT_STATE, action) {

    switch (action.type) {
        case 'SET_NEWS': return { hideNews: action.payload };
        default: return state;
    }
}


export default reducer;