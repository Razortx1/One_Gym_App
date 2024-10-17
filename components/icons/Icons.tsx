/**
 * Archivo con el cual serán guardados los iconos
 */

/**
 * @import
 * Se importa el componente FontAwesome desde la libreria de expo llamada vector icons
 */
import { FontAwesome } from "@expo/vector-icons";

/**
 * @function
 * Es la funcion que se encarga de traer el icono de la rueda con el proposito de ponerla en Ajustes
 * @param props 
 * @returns
 * Se retorna el icono para los ajustes, indicando tambien un prop para el color logrando asi que el color no sea estatico
 */
export const Ajuste = (props:any) => {
    return <FontAwesome name="cog" size={24} color="white" {... props} style={{marginRight: 10}}/>
}

/**
 * @function
 * Es la funcion que se encarga de traer el icono de una casa con el proposito de ponerla en index
 * @param props 
 * @returns
 * Se retorna el icono de Home, indicando tambien un prop para el color logrando asi que el color no sea estatico
 */

export const Home = (props:any) => {
    return <FontAwesome name="home" size={24} color="black" {... props} />
}

/**
 * @function
 * Es la funcion que se encarga de traer el icono de usuario con el proposito de ponerla en userview
 * @param props 
 * @returns
 * Se retorna el icono User, indicando tambien un prop para el color logrando asi que el color no sea estatico
 */
export const User = (props:any) => {
    return <FontAwesome name="user" size={24} color="black" {... props} />
}

/**
 * @function
 * Es la funcion que se encarga de traer el icono de un calendario con el proposito de ponerla en horario
 * @param props 
 * @returns
 * Se retorna el icono calendar, indicando tambien un prop para el color logrando asi que el color no sea estatico
 */
export const Calendario = (props:any) => {
    return <FontAwesome name="calendar" size={24} color="black" {... props}/>
}

/**
 * @function
 * Es la funcion que se encarga de traer el icono de un dolar con el proposito de ponerla en pagos
 * @param props 
 * @returns
 * Se retorna el icono dollar, indicando tambien un prop para el color logrando asi que el color no sea estatico
 */
export const Pago = (props:any) => {
    return <FontAwesome name="dollar" size={24} color="black" {... props}/>
}

export const Formulario = (props:any) => {
    return <FontAwesome name="wpforms" size={24} color="black" {...props}/>
}