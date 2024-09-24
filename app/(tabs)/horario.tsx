/**
 * Archivo que contiene un renderizado del horario
 */



/**
 * @import
 * Se importa Screen del archivo encontrado en components
 * Se importa Text desde la libreria React Native
 */

import { Text } from "react-native";
import { Screen } from "../../components/Screen";

/**
 * @function Horario
 * Es la funcion que renderiza la vista que tendria el horario
 * @returns
 * Retorna solamente un texto de horario
*/
export default function Horario() {
    return (
        <Screen>
            <Text>Horario</Text>
        </Screen>
    )
}






