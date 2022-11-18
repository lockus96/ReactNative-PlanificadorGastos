import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Alert,
  Pressable,
  Image,
  Modal
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
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

  // AsyncStorage Settings

  useEffect(() => {
    const obtenerPresupuestoStorage = async () => {
      try {
        const presupuestoStorage = await
          AsyncStorage.getItem('planificador_presupuesto') ?? 0

        if (presupuestoStorage > 0) {
          setPresupuesto(presupuestoStorage)
          setIsValidPresupuesto(true)
        }
      } catch (error) {
        console.log(error)
      }
    }
    obtenerPresupuestoStorage()
  }, [])

  useEffect(() => {
    if (isValidPresupuesto) {
      const guardarPresupuestoStorage = async () => {
        try {
          await AsyncStorage.setItem('planificador_presupuesto', presupuesto)
        } catch (error) {
          console.log(error)
        }
      }
      guardarPresupuestoStorage()
    }

  }, [isValidPresupuesto])

  useEffect(() => {
    const obtenerGastosStorage = async () => {
      try {
        const gastosStorage = await AsyncStorage.getItem('planificador_gastos')
        setGastos(gastosStorage ? JSON.parse(gastosStorage) : [])
      } catch (error) {
        console.log(error)
      }
    }
    obtenerGastosStorage()
  }, [])

  useEffect(() => {
    const guardarGastosStorage = async () => {
      try {
        await AsyncStorage.setItem('planificador_gastos', JSON.stringify(gastos))
      } catch (error) {
        console.log(error)
      }
    }
    guardarGastosStorage();
  }, [gastos])





  const handeNuevoPresupuesto = (presupuesto) => {
    if (Number(presupuesto) > 0) {
      setIsValidPresupuesto(true)
    } else {
      Alert.alert('Error', 'Presupuesto no válido', [{ text: 'OK' }])
    }
  }

  const handleGasto = gasto => {

    if ([gasto.nombre, gasto.categoria, gasto.cantidad].includes('')) {
      Alert.alert(
        'Error',
        'Todos los campos son obligatorios'
      )

      return
    }

    if (gasto.id) {
      const gastosActualizados = gastos.map(gastoState =>
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
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Borrar', style: 'destructive', onPress: () => {

            const gastosActualizados = gastos.filter(gastoState => gastoState.id !== id)

            setGastos(gastosActualizados)
            setModal(!modal)
            setGasto({})
          }
        }
      ]
    )
  }


  const resetearApp = () => {
    Alert.alert(
      '¿Querés reiniciar la App?',
      'Este cambio no se puede deshacer',
      [
        { text: 'No', style: 'cancel' },
        {
          text: 'Si', style: 'destructive', onPress: async () => {
            try {
              await AsyncStorage.clear()
              setIsValidPresupuesto(false)
              setPresupuesto(0)
              setGastos([])
            } catch (error) {
              console.log(error)
            }
          }
        }
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
              resetearApp={resetearApp}
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
    backgroundColor: '#3B82F6',
    flex: 1
  },
  header: {
    backgroundColor: '#3B82F6',
    minHeight: 500,
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
