import AsyncStorage from '@react-native-community/async-storage';


function setHideNews(ids) {

    return {
        type: 'SET_NEWS',
        payload: ids
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


export function setInitialHide() {

    return async function (dispatch) {
        var hides = await getItem('hides');
        dispatch(setHideNews(hides));
    }
}

export function addHideAsync(id) {

    return async function (dispatch) {
        try {
            var hides = await getItem('hides');
            if (!hides.includes(id)) {
                var newHides = [...hides, id];
            }
            else {
                var newHides = hides;
            }
            await AsyncStorage.setItem('hides', JSON.stringify(newHides));
            dispatch(setHideNews(newHides));
        }
        catch (err) {
            console.log(err.message);
        }
    }
}
