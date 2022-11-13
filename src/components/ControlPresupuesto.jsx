import React, { useState, useEffect } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import globalStyles from './styles'
import { formatearCantidad } from '../helpers'

export default function ControlPresupuesto({presupuesto, gastos}) {

  const [ disponible, setDisponible ] = useState(0)
  const [ gastado, setGastado ] = useState(0)


  useEffect(()=>{
    const totalGastado = gastos.reduce( (total, gasto)=> Number(gasto.cantidad) + total, 0)
    const totalDisponible = presupuesto - totalGastado

    setDisponible(totalDisponible)
    setGastado(totalGastado)
  }, [])

  return (
    <View style={styles.contenedor}>
          <View style={styles.centrarGrafico}>
            <Image 
              style={styles.imagen}
              source={ require('../img/grafico.jpg') }
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