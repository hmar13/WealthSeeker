import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const WatchListItemsComponent = (props) => {
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  )
}

export default WatchListItemsComponent;

const styles = StyleSheet.create({})
