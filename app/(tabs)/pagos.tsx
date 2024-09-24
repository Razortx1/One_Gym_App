/**
 * Archivo que poseeria los los pagos a traves de la APP
 */



/**
 * @import
 * Se importa Screen del archivo encontrado en components
 * Se importa Text desde la libreria React Native
 */
import { Text } from "react-native";
import { Screen } from "../../components/Screen";


/**
 * @function Pagos
 * Es la funcion que renderiza la vista que tendrian los pagos a traves de la APP
 * @returns
 * Retorna solamente un texto de pagar
*/

export default function Pagos() {
    return (
        <Screen>
            <Text> Pagar </Text>
        </Screen>
    )
}
