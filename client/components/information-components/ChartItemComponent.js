import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LineChart } from "react-native-chart-kit";

const ChartItemComponent = ({closePrices, closeDates}) => {

  return (
    <View style={styles.container}>
      {/* <Text>Bezier Line Chart</Text> */}
      <LineChart
        data={{
          labels: closeDates,
          datasets: [
            {
              data: closePrices
            }
          ]
        }}
        yAxisLabel="$"
        // yAxisSuffix="Date"
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: "#00ADEF",
          backgroundGradientFrom: "#00ADEF",
          backgroundGradientTo: "#FFBA05",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "2",
            strokeWidth: "5",
            stroke: "#000000"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    </View>
  )
}

export default ChartItemComponent;

const styles = StyleSheet.create({
  container: {
  }
})
