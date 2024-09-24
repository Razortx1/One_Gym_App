/**
 * Archivo que contiene el layout preciso para los settings.
 */

/**
 * @import
 * Se importa el componente Stack de la libreria expo-router
 */
import { Stack } from "expo-router";


/**
 * @function IndexLayout
 * Es una funcion que sirve para dar un layout a settings
 * 
 * @returns
 * Retorna un Stack con el cual se usará para apilar el arhivo Settings desde Userview
 */
export default function IndexLayout() {
    return <Stack screenOptions={{headerShown:false}}/>
}