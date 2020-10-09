import React from 'react';
import { Text, StyleSheet, View, Linking, TouchableOpacity } from 'react-native'
import axios from 'axios';

import LoaderRenderComponent from '../rpc/loader.render';
const SINGLE_FETCH_NEWS_URL = 'https://hn.algolia.com/api/v1/items';

class DetailsPage extends React.Component {

    state = {
        currentNews: {},
        isLoading: true
    };

    componentDidMount() {
        var { route: { params: { id } } } = this.props;
        axios.get(`${SINGLE_FETCH_NEWS_URL}/${id}`)
            .then((response) => {
                this.setState({
                    currentNews: response.data,
                    isLoading: false
                });
            })
            .catch();
    }

    render() {
        var { isLoading } = this.state;
        var { created_at, author, title, url, points } = this.state.currentNews;
        return (
            <LoaderRenderComponent isLoading={isLoading}>
                <View style={styles.detailsWrapper}>
                    <Text>{title}</Text>
                    <Text>Author:- {author}</Text>
                    <TouchableOpacity onPress={function () {
                        Linking.openURL(url);
                    }}>
                        <Text style={styles.anchor} >Visit: {url}</Text>
                    </TouchableOpacity>
                    <Text>{points}</Text>
                    <Text>{created_at}</Text>
                </View>
            </LoaderRenderComponent>
        );
    }

}

var styles = StyleSheet.create({
    detailsWrapper: {
        margin: 10,
        padding: 10
    },
    anchor: {
        color: 'blue',
        textDecorationLine: 'underline'
    }
});



export default DetailsPage;