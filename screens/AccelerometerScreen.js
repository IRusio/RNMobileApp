import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';

export default class AccelerometerScreen extends React.Component {
  state = {
    accelerometerData: {},
  };

  componentDidMount() {
    Accelerometer.addListener(({ x, y, z }) => {
      this.setState({ accelerometerData: { x, y, z } });
    });
  }

  componentWillUnmount() {
    Accelerometer.removeAllListeners();
  }

  render() {
    let {
      x,
      y,
      z,
    } = this.state.accelerometerData;

    return (
      <View style={styles.sensor}>
        <Text>Accelerometer:</Text>
        <Text>
          x: {round(x)} y: {round(y)} z: {round(z)}
        </Text>
      </View>
    );
  }
}

function round(n) {
  if (!n) {
    return 0;
  }

  return Math.floor(n * 100) / 100;
}

const styles = StyleSheet.create({
  sensor: {
    marginTop: 100,
    paddingHorizontal: 10,
  },
});