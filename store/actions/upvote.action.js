import AsyncStorage from '@react-native-community/async-storage';
import { set } from 'react-native-reanimated';
function changeUpvotes(upvotes) {

    return {
        type: 'NEW_UPVOTES',
        upvotes: upvotes
    };
}

function setError(err) {

    return {
        type: 'SET_ERROR',
        erroeMessage: err.message
    };
}

function getItem(key) {
    return new Promise(async (resolve, reject) => {
        try {
            var data = await AsyncStorage.getItem(key);
            data = data == null ? [] : JSON.parse(data);
            resolve(data);
        }
        catch (err) {
            reject(err);
        }
    })
}


export function setInitial() {

    return async function (dispatch) {
        var upvotes = await getItem('upvotes');
        dispatch(changeUpvotes(upvotes));
    }
}


export function addUpvoteAsync(key) {

    return async function (dispatch) {
        try {
            var upvotes = await getItem('upvotes');
            if (!upvotes.includes(key)) {
                var newUpvotes = [...upvotes, key];
            }
            else {
                var newUpvotes = upvotes;
            }
            await AsyncStorage.setItem('upvotes', JSON.stringify(newUpvotes));
            dispatch(changeUpvotes(newUpvotes));
        }
        catch (err) {
            dispatch(setError(err.message));
        }
    }
}


export function removeUpvoteAsync(key) {

    return async function (dispatch) {
        var upvotes = await getItem('upvotes');
        var newUpvotes = upvotes.filter(function (idx) {
            return idx !== key
        });
        await AsyncStorage.setItem('upvotes', JSON.stringify(newUpvotes));
        dispatch(changeUpvotes(newUpvotes));
    }
}