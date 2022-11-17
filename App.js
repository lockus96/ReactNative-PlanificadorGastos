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
import Filtro from './src/components/Filtro';
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
  const [filtro, setFiltro] = useState('')
  const [gastosFiltrados, setGastosFiltrados] = useState({})


  const handeNuevoPresupuesto = (presupuesto) => {
    if (Number(presupuesto) > 0) {
      setIsValidPresupuesto(true)
    } else {
      Alert.alert('Error', 'Presupuesto no válido', [{ text: 'OK' }])
    }
  }

  const handleGasto = gasto => {

    if ([ gasto.nombre, gasto.categoria, gasto.cantidad ].includes('')) {
      Alert.alert(
        'Error',
        'Todos los campos son obligatorios'
      )

      return
    }

    if(gasto.id){
      const gastosActualizados = gastos.map( gastoState => 
        gastoState.id === gasto.id 
        ? gasto 
        : gastoState)
      setGastos(gastosActualizados)
    } else {

      // Añadir el gasto al State
      gasto.id = generarId()
      gasto.fecha = Date.now()
  
      setGastos([...gastos, gasto])
    }

    setModal(!modal)

  }


    const eliminarGasto = id => {
        Alert.alert(
          '¿Estás segurísimo/a de querer borrar?',
          'Una vez hecho, no se podrá recuperar',
          [
            { text: 'Cancelar', style: 'cancel'},
            { text: 'Borrar', style: 'destructive', onPress: ()=>{

              const gastosActualizados = gastos.filter( gastoState => gastoState.id !== id)

              setGastos(gastosActualizados)
              setModal(!modal)
              setGasto({})
            }}
          ]
        )
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

          <>
            <Filtro 
              filtro={filtro}
              setFiltro={setFiltro}
              gastos={gastos}
              setGastosFiltrados={setGastosFiltrados}
            />
            <ListadoGastos
              gastos={gastos}
              setModal={setModal}
              setGasto={setGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
            />
          </>

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
            eliminarGasto={eliminarGasto}
          />
        </Modal>
      )}

      {isValidPresupuesto && (
        <Pressable
          style={styles.pressable}
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
  pressable: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 30,
    right: 30
  },
  imagen: {
    width: 60,
    height: 60,
  }
});

export default App;
