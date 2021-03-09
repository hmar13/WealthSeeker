import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, Linking } from 'react-native';

const NewsItemsComponent = ({ title, newsChannel, imageUrl, webUrl }) => {
  let image = {}

  if (imageUrl) {
    image = { uri: imageUrl}
  }

  return (
    <TouchableHighlight
      onPress={() => {Linking.openURL(`${webUrl}`)}}
      underlayColor="#ffffff"
    >
      <View style={styles.container}>

        <View style={styles.text__container}>
          <Text style={styles.text__title}>{title}</Text>
          <Text style={styles.text__newsChannel}>{newsChannel}</Text>
        </View>

        <View style={styles.image__container}>
          <ImageBackground
          source={image}
          style={styles.image}>
          </ImageBackground>
        </View>

      </View>
    </TouchableHighlight>
  )
}

export default NewsItemsComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: '2%'
  },
  text__container: {
    width: '70%',
    paddingRight: '5%',
  },
  text__title: {
    fontSize: 15,
  },
  text__newsChannel: {
    fontSize: 10,
  },
  image__container: {
    width: '30%',
  },
  image: {
    flex: 1,
    borderRadius: 4,
    overflow: 'hidden',
  },
})
