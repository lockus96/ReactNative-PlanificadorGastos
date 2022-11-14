import React from 'react'
import { Text, 
     View, 
     StyleSheet, 
     TextInput,
     Pressable
} from 'react-native'
import { Picker } from '@react-native-picker/picker'

export default function FormularioGasto() {
  return (
    <View style={styles.contenedor}>
          <View>
               <Pressable>
                    <Text>
                         Cancelar
                    </Text>
               </Pressable>
          </View>

          <View>
               <Text>
                    Nuevo Gasto
               </Text>

               <View>
                    <Text>
                         Nombre Gasto  
                    </Text>
                    <TextInput 
                         placeholder='Nombre del Gasto'
                    />
               </View>

               <View>
                    <Text>
                         Cantidad Gasto  
                    </Text>
                    <TextInput 
                         placeholder='Cantidad de Gasto'
                         keyboardType='numeric'
                    />
               </View>

               <View>
                    <Text>
                         Categoría  
                    </Text>
                    <Picker
                         mode='dropdown'
                    >
                         <Picker.Item 
                              label='Seleccionar'
                              value=''
                         />
                         <Picker.Item 
                              label='Comida'
                              value='comida'
                         />
                         <Picker.Item 
                              label='Ropa'
                              value='ropa'
                         />
                         <Picker.Item 
                              label='Salidas'
                              value='salidas'
                         />
                         <Picker.Item 
                              label='Viajes'
                              value='viajes'
                         />
                         <Picker.Item 
                              label='Suscripciones'
                              value='suscripciones'
                         />
                         <Picker.Item 
                              label='Otros'
                              value='otros'
                         />
                    </Picker>
               </View>
               
               <Pressable>
                    <Text>
                         Agregar Gasto
                    </Text>
               </Pressable>

          </View>
    </View>
  )
}

const styles = StyleSheet.create({
     contenedor: {
          backgroundColor: 'black'
     }
})
