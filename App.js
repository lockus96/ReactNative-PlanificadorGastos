import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';

const App = () => {
 

  return (
      <View style={styles.contenedor}>
        <View style={styles.header}>
          <Header />
          <NuevoPresupuesto />
        </View>
        
      </View>
  );
};

const styles = StyleSheet.create({
    contenedor: {
      backgroundColor: '#f5f5f5',
      flex: 1
    },
    header: {
      backgroundColor: '#3B82F6',
      

 },
});

export default App;
