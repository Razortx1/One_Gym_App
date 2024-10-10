/**
 * Archivo que contiene los settings de la APP
 */



/**
 * @import
 * Se importa Screen del archivo encontrado en components
 * Se importa Text desde la libreria React Native
 * Se importa Stack desde la libreria expo router
 */

import { Text } from "react-native";
import { Screen } from "../components/Screen";
import { Stack } from "expo-router";

/**
 * @function Ajustes
 * Es la funcion que renderiza la vista que tendrian los settings de la APP
 * @returns
 * Retorna solamente un texto de Ajustes
 * Retorna ademas una peticion al componente Stack para que este pueda mostrar el header sin titulo.
*/

export default function Ajustes() {
  return (
    <Screen>
      <Stack.Screen options={{headerShown: true, headerTitle: "Ajustes" }} />
      <Text> Ajustes </Text>
    </Screen>
  );
}