/**
 * Layout para las vistas principales de la APP
 */

/**
 * @import
 * Importaciones que se realizaran para usar en las vistas
 * - Redirect y Tabs desde expo-router
 * - Home, Calendario, Pago y User desde una carpeta creada para este proyecto, usada principalmente para almacenaje de iconos.
 */
import { Redirect, Tabs } from "expo-router";
import { Home, Calendario, Pago, User } from "../../components/icons/Icons";

export default function TabLayout() {
  /**
   * @function TabLayout
   * Esta funcion permite el renderizado de un layout para las vistas que serán puestas en el layout.
   * 
   * Incluye un IF-Else con el cual le permite saber si el usuario esta registrado o no dentro de la APP
   * Este si existe, lo dirige a la pagina principal de la APP, y en caso contrario se devuelve al initial
   * 
   * @returns
   * Hay 2 returns dentro de esta funcion, donde se describe lo siguiente:
   * - El primer return realiza un redirect hacia la vista inicial de la APP
   * - El segundo return se renderiza la vista principal de la APP trayendo consigo tambien los Tabs.
   *   El Tab tiene 1 prop con la cual poder estilizar el Tab. Este prop es screenOptions, siendo un prop que permite
   *   agregar un diseño tanto en el header como en el layout de los Tabs. En esta ocasión el screenOption tiene 2 parametros siendo
   *   headerTitle, en este caso vacio para no mostrar nada, y headerStyle, que contiene otro parametro para el color de fondo.
   *   Los tabs de la APP, teniendo la siguiente estructura:
   *    -idenx como primer tab
   *    -horario como segundo tab
   *    -pagos como tercer ta
   *    -userview como cuarto y ultimo tab
   *   Cada uno de estos tabs poseen distintos props como el name, indicando el nombre de los archivos que van a estar en los tabs
   *   ademas de poder estilizarlos como uno guste, y por ultimo el prop de options, al cual se le pueden pasar parametros para 
   *   estilizar los tabs. Los parametros que se pasaron son:
   *    -title para indicar el titulo que tendrá la vista
   *    -tabBarActiveTintColor indica el color que tendrán los tabs cuando estos sean seleccionados.
   *    -tabBarIcon indicando cual será el color que tendrá el icono.
   */
  const hola = true;
  if (!hola) {
    return <Redirect href="/initial" />;
  } else {
    return (
      <Tabs
        screenOptions={{
          headerTitle: "",
          headerStyle: {backgroundColor: "#671350"}
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "",
            tabBarActiveTintColor: "#FF90ED",
            tabBarIcon: ({ color }) => <Home color={color} />,
          }}
        />
        <Tabs.Screen
          name="horario"
          options={{
            title: "",
            tabBarActiveTintColor: "#FF90ED",
            tabBarIcon: ({ color }) => <Calendario color={color} />,
          }}
        />
        <Tabs.Screen
          name="pagos"
          options={{
            title: "",
            tabBarActiveTintColor: "#FF90ED",
            tabBarIcon: ({ color }) => <Pago color={color} />,
          }}
        />
        <Tabs.Screen
          name="userview"
          options={{
            title: "",
            tabBarActiveTintColor: "#FF90ED",
            tabBarIcon: ({ color }) => <User color={color} />,
          }}
        />
      </Tabs>
    );
  }
}
