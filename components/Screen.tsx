/**
 * Archivo creado con el proposito de estandarizar las views presentes dentro del proyecto
 */


/**
 * @import
 * Se realizo un import del componente View desde la libreria de React Native
 */
import { View } from "react-native";

/**
 * @function Screen
 * Es una funcion para poder renderizar una vista
 * @param children 
 * @returns 
 * Retorna una vista, con estilos ya definidos.
 * Se crea un parametro llamado children, con el proposito de que este actue como lo haria normalmente View, solamente
 * con un diseño.
 */
export function Screen({ children }: any) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </View>
  );
}
