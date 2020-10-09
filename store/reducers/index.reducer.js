import { combineReducers } from 'redux';

import newsReducer from './news.reducer';
import upvoteReducer from './upvote.reducer';
import hideReducer from './hide.reducer';

var rootReducer = combineReducers({
    news: newsReducer,
    upvote: upvoteReducer,
    hide: hideReducer
});



export default rootReducer;