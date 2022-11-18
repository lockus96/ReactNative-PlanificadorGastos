import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import globalStyles from './styles'
import { formatearCantidad } from '../helpers'
import CircularProgress from 'react-native-circular-progress-indicator'

export default function ControlPresupuesto({
  presupuesto, 
  gastos, 
  resetearApp,
  setIsValidPresupuesto,
  setPresupuesto
}) {

  const [ disponible, setDisponible ] = useState(0)
  const [ gastado, setGastado ] = useState(0)
  const [ porcentaje, setPorcentaje ] = useState(0)

  useEffect(()=>{
    const totalGastado = gastos.reduce( (total, gasto)=> Number(gasto.cantidad) + total, 0)
    const totalDisponible = presupuesto - totalGastado

    const nuevoPorcentaje = (
      ((presupuesto - totalDisponible) / presupuesto) * 100
    )
    setTimeout(()=>{
      setPorcentaje(nuevoPorcentaje)
    }, 500)

    setDisponible(totalDisponible)
    setGastado(totalGastado)
  }, [gastos])

  return (
    <View style={styles.contenedor}>
          <View style={styles.centrarGrafico}>
            
            <CircularProgress 
              value={porcentaje}
              duration={500}
              radius={130}
              valueSuffix={'%'}
              title='Gastado'
              titleColor='black'
              inActiveStrokeColor='#FFE591'
              inActiveStrokeWidth={20}
              activeStrokeColor='#FF5733'
              activeStrokeWidth={20}
              titleStyle={{ marginTop: -10, marginBottom: 20, fontSize: 25 }}
            />

          </View>

          <View style={styles.contenedorTexto}>

            <Pressable
              style={styles.boton}
              onPress={resetearApp}
            >
              <Text
                style={styles.textoBoton}
              >
                Reiniciar App
              </Text>
            </Pressable>

            <Pressable
              style={styles.btnPresupuesto}
              onLongPress={()=>{
                setIsValidPresupuesto(false)
                setPresupuesto(0)
              }
              }
            >
              <Text style={styles.valorPresupuesto}>
                  <Text style={styles.labelPresupuesto}>
                    Presupuesto: {''}
                  </Text>
                  {formatearCantidad(presupuesto)}
              </Text>
            </Pressable>

            <Text style={styles.valor}>
                <Text style={styles.label}>
                  Disponible: {''}
                </Text>
                {formatearCantidad(disponible)}
            </Text>

            <Text style={styles.valor}>
                <Text style={styles.label}>
                  Gastado: {''}
                </Text>
                {formatearCantidad(gastado)}
            </Text>
          </View>
     </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#FEFEFE',
    marginHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 40,
    paddingHorizontal: 20,
    transform: [{ translateY: 50 }],
    shadowColor: "#000",
    shadowOffset: {
         width: 0,
         height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  centrarGrafico: {
      alignItems: 'center'
  },
  boton: {
    backgroundColor: '#DB2777',
    padding: 10,
    marginBottom: 40,
    borderRadius: 100,
    marginHorizontal: 80
  },
  textoBoton: {
      textAlign: 'center',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: 20,
      color: '#fff'
  },
  contenedorTexto: {
    marginTop: 50,

  },
  valor: {
    fontSize: 25,
    textAlign: 'center',
    color: 'red',
    marginBottom: 6,
    fontWeight: 'bold'
  },
  valorPresupuesto: {
    fontSize: 25,
    textAlign: 'center',
    color: '#F3CD52',
    marginBottom: 6,
    fontWeight: 'bold'
  },
  label: {
    fontWeight: '700',
    color: 'black'
  },
  labelPresupuesto: {
    fontWeight: '700',
    color: '#FFF6D8'
  },
  btnPresupuesto: {
    backgroundColor: '#8C8C8C',
    borderRadius: 20,
    marginHorizontal: 30
  }
})