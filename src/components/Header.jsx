import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Header() {
  return (
    <View>
          <Text style={styles.texto}>
               Planificador de Gastos 💰
          </Text>

    </View>
  )
}

const styles = StyleSheet.create({
     
     texto: {
          textAlign: 'center',
          fontSize: 30,
          marginHorizontal: 6,
          color: '#fff',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          paddingTop: 60,
          textShadowColor: 'rgba(0, 0, 0, 0.75)',
          textShadowOffset: {width: -1, height: 1},
          textShadowRadius: 10
     }
})