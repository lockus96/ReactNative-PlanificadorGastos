import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Header() {
  return (
    <View>
          <Text style={styles.texto}>
               Planificador de Gastos
          </Text>
    </View>
  )
}

const styles = StyleSheet.create({
     
     texto: {
          textAlign: 'center',
          fontSize: 30,
          color: '#fff',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          paddingTop: 35,


     }
})