import React from 'react';
import { StyleSheet, View, Text } from 'react-native'

import PaginationItemComponent from './PaginationItem';

function Pagination() {

    return (
        <View style={styles.paginationWrapper}>
            {[1, 2, 3, 4, 5].map(function (page) {
                return <PaginationItemComponent key={page} page={page} />
            })}
        </View>
    );
}


var styles = StyleSheet.create({
    paginationWrapper: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
});



export default Pagination;