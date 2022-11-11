import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import globalStyles from './styles'

export default function ControlPresupuesto() {
  return (
    <View style={styles.contenedor}>
          <View style={styles.centrarGrafico}>
            <Image 
              style={styles.imagen}
              source={ require('../img/grafico.jpg') }
            />
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