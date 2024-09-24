/**
 * Codigo sobre layout que se usará para la autenticacion de los usuarios
 */

/**
 * @import
 * Se importo un componente llamado Stack, para poder acceder a ella se hizo necesario instalar
 * la libreria de expo-router a traves de npx expo install expo-router
 */
import { Stack } from "expo-router";

export default function InitialLayout() {
  /**
   * @function InitialLayout
   * Esta funcion lo que permite es cargar las vistas que son contenidas en los archivos encontrados en la
   * carpeta (auth), como lo puede ser initial.tsx y sign-in.tsx
   *
   * @returns
   * Esta funcion retorna solamente el componente Stack, React Native se encargaria del resto
   */
  return <Stack />;
}
