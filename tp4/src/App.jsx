import React from 'react';
import { StyleSheet, View } from 'react-native';
import CurrencyConverter from './components/CurrencyConverter';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Exemple : Conversion EUR ↔ USD avec un taux de 1.1 */}
      <CurrencyConverter fromUnit="EUR" toUnit="VND" conversionRate={25000} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default App;
