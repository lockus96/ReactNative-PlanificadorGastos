export const formatearCantidad = cantidad =>{

     return Number(cantidad).toLocaleString('es-AR', 
     {
         style: 'currency',
         currency: 'ARS' 
     })
}