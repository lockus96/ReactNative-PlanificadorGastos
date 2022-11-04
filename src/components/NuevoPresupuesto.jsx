import React from 'react'
import { Text, View, TextInput, Pressable, StyleSheet } from 'react-native'

export default function NuevoPresupuesto() {
  return (
     <View style={styles.contenedor}>
          <Text style={styles.label}>
               Definir Presupuesto
          </Text>
          <TextInput 
               keyboardType='numeric'
               placeholder='Agrega tu presupuesto'
               style={styles.input}
          />
          <Pressable style={styles.boton}>
               <Text style={styles.botonTexto}>
                    Agregar Presupuesto
               </Text>
          </Pressable>
     </View>
  )
}

const styles = StyleSheet.create({
     contenedor: {
          backgroundColor: '#fff',
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
     label: {
          textAlign: 'center',
          color: '#3b82f6',
          fontSize: 24,
     },
     input: {
          backgroundColor: '#f5f5f5',
          padding: 10,
          borderRadius: 15,
          textAlign: 'center',
          marginTop: 30,
     },
     boton: {
          marginTop: 30,
          marginHorizontal: 30,
          backgroundColor: '#1048a4',
          padding: 10,
          borderRadius: 13,
     },
     botonTexto: {
          color: '#fff',
          textAlign: 'center',
          textTransform: 'uppercase',
          fontWeight: 'bold'
     },

})