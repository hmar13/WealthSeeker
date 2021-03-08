import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ApiService from '../../ApiService';
import NewsItemsComponent from './NewsItemsComponent';

const NewsComponent = ({ticker}) => {
  const [news, setNews] = useState([]);

  //Fetch News from API
  const handleNewsFetch = useCallback(async (ticker) => {
    const result = await ApiService.getNews(ticker);
    if (result.length === 0) {
      console.log('Ticker Not Available');
    } else {
      setNews(result.articles);
    }
  }, [])

  //Fetch News if Ticker
  useEffect(() => {
    handleNewsFetch(ticker);
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>News</Text>
      <FlatList
        data={news}
        keyExtractor={item => item.url}
        renderItem={({ item }) =>
          <NewsItemsComponent
          title={item.title}
          newsChannel={item.source.name}
          imageUrl={item.urlToImage}
          />
        }
      />
    </View>
  )
}

export default NewsComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
    paddingHorizontal: '2%',
  },
  title: {
    alignSelf: 'center',
    fontSize: 18,
  },
})
