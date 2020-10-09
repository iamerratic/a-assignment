import React, { useEffect } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { fetchNewsAsync } from '../../store/actions/news.action';
import LoaderRenderComponent from '../rpc/loader.render';
import NewsComponent from '../components/News';
import PaginationComponent from '../components/Pagination';
import { setInitial } from '../../store/actions/upvote.action';
import { setInitialHide } from '../../store/actions/hide.action';

function Home({ dispatch, hackerNews, isLoading, navigation }) {

    useEffect(function () {
        dispatch(fetchNewsAsync(1));
        dispatch(setInitial());
        dispatch(setInitialHide());
    }, []);


    return (
        <LoaderRenderComponent isLoading={isLoading}>
            <ScrollView>
                <View style={styles.Home, styles.MainWrapper}>
                    {hackerNews.filter(function (news) {
                        return news.title != '' && news.title != null
                    })
                        .map(function (news, idx) {
                            return <NewsComponent navigation={navigation} {...news} sno={idx} key={news.objectID} />
                        })}
                </View>
                <PaginationComponent />
            </ScrollView>
        </LoaderRenderComponent>
    );
}


var styles = StyleSheet.create({
    Home: {
        padding: 10,
        margin: 10
    },
    MainWrapper: {
        backgroundColor: 'rgba(255,165,0,0.6)'
    }
});


var mapStateToProps = ({ news: { isLoading, hackerNews } }) => ({
    isLoading: isLoading,
    hackerNews: hackerNews
});

export default connect(mapStateToProps)(Home);