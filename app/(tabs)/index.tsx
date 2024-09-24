/**
 * Archivo que contiene la pagina principal
 */



/**
 * @import
 * Se importa Screen del archivo encontrado en components
 * Se importa Text desde la libreria React Native
 */

import { Text } from "react-native";
import { Screen } from "../../components/Screen";

/**
 * @function Index
 * Es la funcion que renderiza la vista que se veria al inicializar la APP
 * @returns
 * Retorna solamente un texto de Idenx
*/
export default function Index() {
    return (
        <Screen>
            <Text>Index</Text>
        </Screen>
    )
}