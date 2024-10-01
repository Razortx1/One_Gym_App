/**
 * Archivo que poseeria los datos del usuario
 */

/**
 * @import
 * Se importa el componente Stack y Link de la libreria expo-router
 * Se importa Ajuste, siendo el icono para usar
 * Se importa Screen del archivo encontrado en components
 * Se importa Pressable y Text desde la libreria React Native
 */


import { Pressable, Text } from "react-native";
import { Link, Stack } from "expo-router";
import { Ajuste } from "../../components/icons/Icons";
import { Screen } from "../../components/Screen";


/**
 * @function UserView
 * Es la funcion que renderiza la vista que tendria el usuario
 * @returns
 * Retorna un icono que dentro de este
 * contiene un Link que va directamente hacia Settings, con un prop de asChild
 * todo esto dentro de un Pressable ademas de un texto que dice Usuario
 */
export default function UserView() {
    return (
        <Screen>
            <Stack.Screen options={{headerRight: () => <Link href="../settings" asChild>
            <Pressable>
                <Ajuste />
            </Pressable>
            </Link>}} />
            <Text> Aqui viene algo :D </Text>
        </Screen>
    )
}
