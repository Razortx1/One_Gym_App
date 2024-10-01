/**
 * Archivo principal para el inicio de la APP apenas esta se abre por primera vez.
 */

/**
 * @import
 * Apartado de imports, importando asi el componente Text desde la libreria de React Native
 * importando tambien el componente Stack, siendo importado solamente para poder estilar mas adelante, ademas del componente Link
 * con el proposito de realizar los cambios hacia las vistas de la APP
 * Tambien se importo un componente, creado para este proyecto, llamado Screen.
 *
 * Para mas info sobre Screen, abrir archivo llamado Screen.tsx.
 */
import { Text } from "react-native";
import { Stack, Link } from "expo-router";
import { Screen } from "../../components/Screen";
import { Button } from "react-native-paper";

export default function InitialMenu() {
  /**
   * @function InitialMenu
   * Es una funcion con la cual permite renderizar la vista que va a contener el inicio de la APP, indicando desde
   * un boton hasta la imagen de la empresa.
   * @returns
   * La funcion retornará un renderizado para crear la vista. Esta contiene:
   * - Un Screen, siendo el principal contenedor.
   * - Una imagen, siendo el logo de la empresa.
   * - 2 Link donde su referencia es hacia la vista sign-in en la primera y un formulario en la segunda.
   *   Uno de estos link debe de tener la prop asChild, indicandole a React que la vista correspondiente es una hija de esta
   *   siendo apilada por encima de esta
   * - 2 Pressables para que los links sean personalizables pareciendose mas a un boton.
   * - 2 componentes Text ya que de lo contrario, daria problemas si no estarian. Contienen el texto que ira en el boton
   */
  return (
    <Screen>
      <Stack.Screen options={{ headerShown: false }} />
      <Text style={{ marginBottom: 5 }}>Imagen salvage aparece</Text>
      <Link href={"/sign-in"} asChild>
        <Button
          mode="contained"
          buttonColor="#671350"
          style={{ marginVertical: 5 }}
        >
          Iniciar Sesión
        </Button>
      </Link>
        <Button mode="contained" buttonColor="#671350">
        <Link href="">
          <Text> Suscribirse </Text>
          </Link>
        </Button>
    </Screen>
  );
}
