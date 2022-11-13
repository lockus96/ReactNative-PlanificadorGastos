import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import globalStyles from './styles'
import { formatearCantidad } from '../helpers'

export default function ControlPresupuesto({presupuesto}) {
  return (
    <View style={styles.contenedor}>
          <View style={styles.centrarGrafico}>
            <Image 
              style={styles.imagen}
              source={ require('../img/grafico.jpg') }
            />
          </View>
          <View>
            <Text style={{ color: 'black' }}>
                Presupuesto:
                {formatearCantidad(presupuesto)}
            </Text>

            <Text style={{ color: 'black' }}>
                Disponible:
                {formatearCantidad(presupuesto)}
            </Text>

            <Text style={{ color: 'black' }}>
                Gastado:
                {formatearCantidad(presupuesto)}
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
  }
})