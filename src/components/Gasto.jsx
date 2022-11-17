import React from 'react'
import { View, Text, StyleSheet, Image, Pressable, } from 'react-native'
import { formatearCantidad, formatearFecha } from '../helpers'

const icons = {
     comida: require('../img/comida.png'),
     ropa: require('../img/ropa.png'),
     salidas: require('../img/salidas.png'),
     viajes: require('../img/viajes.png'),
     suscripciones: require('../img/suscripciones.png'),
     otros: require('../img/otros.png'),

}

function Gasto({ gasto, setModal, setGasto }) {

     const { nombre, categoria, cantidad, fecha } = gasto

     const handleAcciones = () => {
          setModal(true)
          setGasto(gasto)
          
     }


     return (
          <Pressable
               onLongPress={handleAcciones}
          >
               <View style={styles.contenedor}>
                    <View
                         style={styles.contenido}
                    >
                         <View
                              style={styles.contenedorImagen}
                         >
                              <Image
                                   style={styles.imagen}
                                   source={icons[categoria]}
                              />
                              <View
                                   style={styles.contenedorTexto}
                              >
                                   <Text style={styles.categoria}>
                                        {categoria}
                                   </Text>

                                   <Text style={styles.nombre}>
                                        {nombre}
                                   </Text>
                                   <Text style={styles.fecha}>
                                        {formatearFecha(fecha)}
                                   </Text>
                              </View>
                         </View>
                         <Text style={styles.precio}>
                              {formatearCantidad(cantidad)}
                         </Text>
                    </View>
               </View>
          </Pressable>
     )
}

const styles = StyleSheet.create({
     contenedor: {
          backgroundColor: '#fff',
          marginHorizontal: 20,
          borderRadius: 10,
          paddingVertical: 30,
          paddingHorizontal: 1,
          marginTop: 10,
          marginBottom: 10,
          shadowColor: "#000",
          shadowOffset: {
               width: 0,
               height: 5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,
          elevation: 5,
     },
     contenido: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
     },
     contenedorImagen: {
          flexDirection: 'row',
          marginHorizontal: 20,
          alignItems: 'center',
          flex: 1
     },
     imagen: {
          width: 80,
          height: 80,
          marginRight: 20
     },
     contenedorTexto: {
          flex: 1
     },
     categoria: {
          color: '#94A3B8',
          fontSize: 13,
          fontWeight: 'bold',
          textTransform: 'uppercase',
          marginBottom: 5,
     },
     nombre: {
          fontSize: 15,
          color: '#64748B',
          marginBottom: 5,
          fontWeight: 'bold',
     },
     fecha: {
          fontSize: 13,
          color: '#64748B',
          marginBottom: 5,
          fontWeight: 'bold',
     },
     precio: {
          fontSize: 16,
          color: 'black',
          marginRight: 13,
          fontWeight: 'bold'
     }
})

export default Gasto