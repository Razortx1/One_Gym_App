/**
 * Archivo que poseeria los los pagos a traves de la APP
 */



/**
 * @import
 * Se importa Screen del archivo encontrado en components
 * Se importa Text desde la libreria React Native
 */
import { TouchableOpacity } from "react-native";
import { Screen } from "../../components/Screen";
import { Card, Text } from "react-native-paper";


/**
 * @function Pagos
 * Es la funcion que renderiza la vista que tendrian los pagos a traves de la APP
 * @returns
 * Retorna solamente un texto de pagar
*/

export default function Pagos() {
    return (
        <Screen>
            <TouchableOpacity>
                <Card>
                <Card.Content>
                  <Text variant="titleLarge">Disciplina</Text>
                  <Text variant="bodyLarge">Cross Training</Text>
                  <Text variant="titleLarge">Horario</Text>
                  <Text variant="bodyLarge">9:00 a 10:00, Lunes, Miercoles, Sabado</Text>
                  <Text variant="titleMedium">Instructora</Text>
                  <Text variant="bodyMedium">Patricia Escobar</Text>
                </Card.Content>
                </Card>
            </TouchableOpacity>
            <Text> Inscribirse en curso </Text>
        </Screen>
    )
}
