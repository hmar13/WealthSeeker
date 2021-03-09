import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
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
        width={Dimensions.get("window").width/1.05}
        height={220}
        yAxisLabel="$"
        // yAxisSuffix="Date"
        yAxisInterval={1}
        chartConfig={{
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          propsForDots: {
            r: "5",
          },
          propsForBackgroundLines: {
            strokeDasharray: "" // solid background lines with no dashes
          }
        }}
        bezier
        style={{
          borderRadius: 16,
        }}
      />
    </View>
  )
}

export default ChartItemComponent;

const styles = StyleSheet.create({
  container: {
    width: '99%',
  }
})
