import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
  Pressable,
  Image,
  Modal
} from 'react-native';
import ControlPresupuesto from './src/components/ControlPresupuesto';
import FormularioGasto from './src/components/FormularioGasto';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';



const App = () => {
 
  const [ isValidPresupuesto, setIsValidPresupuesto ] = useState(false) 
  const [ presupuesto, setPresupuesto ] = useState(0)
  const [ gastos, setGastos ] = useState([])
  const [ modal, setModal ] = useState(false)


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

            {modal && (
              <Modal 
                animationType='fade'
                visible={modal}
                onRequestClose={()=>{
                  setModal(!modal)
                }}
              >
                  <FormularioGasto 
                    setModal={setModal}
                  />
              </Modal>
            )}

            {isValidPresupuesto && (
              <Pressable
               onPress={()=> setModal(true)}
              >
                  <Image 
                    source={require('./src/img/nuevo-gasto.png')}
                    style={styles.imagen}
                  />
              </Pressable>
            )}

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
    imagen: {
      width: 60,
      height: 60,
      position: 'absolute',
      top: 270,
      right: 20
    }
});

export default App;
