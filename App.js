import React from 'react';
import { View, StyleSheet } from 'react-native';
import StartupComponent from '@comps/StartupComponent';

const App = () => {
  return (
    <View style={styles.container}>
      <StartupComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
