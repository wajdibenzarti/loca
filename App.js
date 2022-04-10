/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import InscriptionAgence from './src/screens/InscriptionAgence/InscriptionAgence'


const App = () => {
  return (
   <View style={styles.root}>
     <InscriptionAgence />
   </View>
  );
}
const styles =StyleSheet.create({
  root: {
    flex: 1,
  }
});
export default App;
