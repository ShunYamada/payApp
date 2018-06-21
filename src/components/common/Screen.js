import React, { type Node } from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

const Screen = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      {props.children}
    </View>
  );
};

export default Screen;
