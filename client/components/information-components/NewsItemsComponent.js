import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NewsItemsComponent = ({ newsItem }) => {

  return (
    <View>
      <Text>Headline</Text>
      <Text>{newsItem.headline}</Text>
      <Text>Summary</Text>
      <Text>{newsItem.summary}</Text>
    </View>
  )
}

export default NewsItemsComponent;

const styles = StyleSheet.create({})
