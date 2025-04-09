import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const CurrencyConverter = ({ fromUnit, toUnit, conversionRate }) => {
  const [fromValue, setFromValue] = useState(''); // État pour la valeur de l'unité source
  const [toValue, setToValue] = useState(''); // État pour la valeur de l'unité cible

  // Fonction pour convertir de l'unité source vers l'unité cible
  const handleFromChange = (value) => {
    setFromValue(value);
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      setToValue((parsedValue * conversionRate).toFixed(2));
    } else {
      setToValue('');
    }
  };

  // Fonction pour convertir de l'unité cible vers l'unité source
  const handleToChange = (value) => {
    setToValue(value);
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      setFromValue((parsedValue / conversionRate).toFixed(2));
    } else {
      setFromValue('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Convertisseur {fromUnit} ↔ {toUnit}
      </Text>
      <TextInput
        style={styles.input}
        placeholder={`Entrez un montant en ${fromUnit}`}
        keyboardType="numeric"
        value={fromValue}
        onChangeText={handleFromChange}
      />
      <TextInput
        style={styles.input}
        placeholder={`Entrez un montant en ${toUnit}`}
        keyboardType="numeric"
        value={toValue}
        onChangeText={handleToChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default CurrencyConverter;

