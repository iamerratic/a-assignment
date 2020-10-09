import { combineReducers } from 'redux';

import newsReducer from './news.reducer';
import upvoteReducer from './upvote.reducer';

var rootReducer = combineReducers({
    news: newsReducer,
    upvote: upvoteReducer
});



export default rootReducer;