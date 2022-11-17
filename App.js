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
import ListadoGastos from './src/components/ListadoGastos';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import { generarId } from './src/helpers';


const App = () => {

  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [presupuesto, setPresupuesto] = useState(0)
  const [gastos, setGastos] = useState([])
  const [modal, setModal] = useState(false)
  const [gasto, setGasto] = useState({})


  const handeNuevoPresupuesto = (presupuesto) => {
    if (Number(presupuesto) > 0) {
      setIsValidPresupuesto(true)
    } else {
      Alert.alert('Error', 'Presupuesto no válido', [{ text: 'OK' }])
    }
  }

  const handleGasto = gasto => {

    if (Object.values(gasto).includes('')) {
      Alert.alert(
        'Error',
        'Todos los campos son obligatorios'
      )

      return
    }

    // Añadir el gasto al State

    gasto.id = generarId()
    gasto.fecha = Date.now()
 
    setGastos([...gastos, gasto])

    setModal(!modal)
  }

  return (

    <View style={styles.contenedor}>

      <ScrollView>
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

        {isValidPresupuesto && (
          <ListadoGastos
            gastos={gastos}
            setModal={setModal}
            setGasto={setGasto}
          />
        )}

      </ScrollView>

      {modal && (
        <Modal
          animationType='fade'
          visible={modal}
          onRequestClose={() => {
            setModal(!modal)
          }}
        >
          <FormularioGasto
            setModal={setModal}
            handleGasto={handleGasto}
            setGasto={setGasto}
            gasto={gasto}
          />
        </Modal>
      )}

      {isValidPresupuesto && (
        <Pressable
          onPress={() => setModal(true)}
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
    minHeight: 400,
  },
  imagen: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 30,
    right: 30
  }
});

export default App;
