import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { addUpvoteAsync, removeUpvoteAsync } from '../../store/actions/upvote.action';

function News({ objectID, sno, title, points, created_at, navigation, upvotes, dispatch }) {

    function handleTransition(id) {
        navigation.navigate('Details', {
            id: id
        });
    }

    return (
        <View style={styles.newsWrapper}>
            <View style={styles.titleWrapper}>
                <Text>{sno}. </Text>
                {!upvotes.includes(objectID) && (
                    <TouchableOpacity onPress={function () {
                        dispatch(addUpvoteAsync(objectID));
                    }}>
                        <Text style={styles.anchor}>upvote </Text>
                    </TouchableOpacity>
                )}
                <TouchableOpacity onPress={function () {
                    handleTransition(objectID)
                }}>
                    <Text style={styles.title}>{title}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.subtitleWrapper}>
                <Text style={styles.subtitle}>{created_at} || </Text>
                <Text style={styles.subtitle}>{points} points </Text>
                {upvotes.includes(objectID) && (
                    <TouchableOpacity onPress={function () {
                        dispatch(removeUpvoteAsync(objectID));
                    }}>
                        <Text style={styles.anchor}> || down-upvote </Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}


var styles = StyleSheet.create({
    newsWrapper: {
        padding: 10
    },
    titleWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 20
    },
    subtitleWrapper: {
        flexDirection: 'row',
    },
    subtitle: {
        color: '#aaa'
    },
    anchor: {
        color: 'blue',
        textDecorationLine: 'underline'
    }
});

var mapStateToProps = ({ upvote: { upvotes } }) => ({
    upvotes: upvotes
});


export default connect(mapStateToProps)(News);