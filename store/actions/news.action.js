import axios from 'axios';

const NEWS_URL = 'https://hn.algolia.com/api/v1/search';

function setNewsSuccess(news, page) {

    return {
        type: 'SET_NEWS_SUCCESS',
        payload: news,
        page: page
    };
}

function setNewsFailure(err) {

    return {
        type: 'SET_NEWS_FAILURE',
        errorMessage: err.message
    };
}


function startRequest() {

    return {
        type: 'START_REQUEST'
    };
}

export function fetchNewsAsync(page) {

    return function (dispatch, getState) {

        var { news: { currentPage } } = getState();

        if (currentPage == page) return;

        dispatch(startRequest());
        axios.get(`${NEWS_URL}?page=${page}`)
            .then(function (response) {
                var { data: { hits } } = response;
                dispatch(setNewsSuccess(hits, page));
            })
            .catch(function (err) {
                setNewsFailure(err);
            });
    }
}

