import React, { useState, useEffect } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import globalStyles from './styles'
import { formatearCantidad } from '../helpers'
import CircularProgress from 'react-native-circular-progress-indicator'

export default function ControlPresupuesto({presupuesto, gastos}) {

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
              titleColor='gray'
              inActiveStrokeColor='#f5f5f5'
              inActiveStrokeWidth={20}
              activeStrokeColor='#3b82f6'
              activeStrokeWidth={20}
              titleStyle={{ marginTop: -10, marginBottom: 20, fontSize: 25 }}
            />

          </View>

          <View style={styles.contenedorTexto}>
            <Text style={styles.valor}>
                <Text style={styles.label}>
                  Presupuesto: {''}
                </Text>
                {formatearCantidad(presupuesto)}
            </Text>

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
      ...globalStyles.contenedor
  },
  centrarGrafico: {
      alignItems: 'center'
  },
  imagen: {
      width: 200,
      height: 200
  },
  contenedorTexto: {
    marginTop: 50,

  },
  valor: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    marginBottom: 6,
  },
  label: {
    fontWeight: '700',
    color: '#3B82F6'
  },
})