import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { addUpvoteAsync, removeUpvoteAsync } from '../../store/actions/upvote.action';
import { addHideAsync } from '../../store/actions/hide.action';

function News({ objectID, sno, title, points, created_at, navigation, upvotes, dispatch, hideNews }) {

    function handleTransition(id) {
        navigation.navigate('Details', {
            id: id
        });
    }

    return !hideNews.includes(objectID) && (
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
                <Text style={styles.subtitle}>{points} points ||</Text>
                <TouchableOpacity onPress={function () {
                    dispatch(addHideAsync(objectID));
                }}>
                    <Text style={styles.anchor}>hide</Text>
                </TouchableOpacity>
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

var mapStateToProps = ({ upvote: { upvotes }, hide: { hideNews } }) => ({
    upvotes: upvotes,
    hideNews: hideNews
});


export default connect(mapStateToProps)(News);