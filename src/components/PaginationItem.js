import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';

import { fetchNewsAsync } from '../../store/actions/news.action';

function PaginationItem({ dispatch, currentPage, page }) {

    function handleClick(page) {
        dispatch(fetchNewsAsync(page));
    }

    var style = currentPage == page ? { ...styles.paginationItemWrapper, ...styles.active } : styles.paginationItemWrapper

    return (
        <TouchableOpacity onPress={function () {
            handleClick(page);
        }}>
            <View style={style}>
                <Text>{page}</Text>
            </View>
        </TouchableOpacity>
    );
}

var styles = StyleSheet.create({
    paginationItemWrapper: {
        width: 30,
        height: 30,
        margin: 5,
        backgroundColor: 'orange',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    active: {
        backgroundColor: 'red'
    }
});

var mapStateToProps = ({ news: { currentPage } }) => ({
    currentPage: currentPage
});

export default connect(mapStateToProps)(PaginationItem);