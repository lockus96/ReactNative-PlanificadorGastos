import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';
import ControlPresupuesto from './src/components/ControlPresupuesto';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';



const App = () => {
 
  const [ isValidPresupuesto, setIsValidPresupuesto ] = useState(false) 
  const [ presupuesto, setPresupuesto ] = useState(0)
  const [ gastos, setGastos ] = useState([])


  const handeNuevoPresupuesto = (presupuesto) =>{
    if(Number(presupuesto) > 0){
      setIsValidPresupuesto(true)
    } else {
      Alert.alert('Error', 'Presupuesto no válido', [{text: 'OK'}])
    }
  }

  return (

      <View style={styles.contenedor}>
        <View style={styles.header}>
          <Header />

          {isValidPresupuesto ? (
            <ControlPresupuesto 
                presupuesto={presupuesto}
                gastos={gastos}
            /> 
          ) : (
            <NuevoPresupuesto 
                handeNuevoPresupuesto={handeNuevoPresupuesto}
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
            />
          )}
          
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
