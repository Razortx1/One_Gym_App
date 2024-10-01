/**
 * Vista para el inicio de sesion.
 */

/**
 * @import
 * Importando los componentes que se usarán para esta vista.
 * - TextIntpu, StyleSheet, Pressable, Text desde React Native
 * - Stack y Link de expo-router
 * - Screen, un componente creado exclusivamente para esta APP
 */
import { StyleSheet, Text } from "react-native";
import { Stack, Link } from "expo-router";
import { Screen } from "../../components/Screen";
import { Button, TextInput } from "react-native-paper";

export default function SignIn() {
  /**
   * @function SingIn
   * Esta funcion permite el renderizado de la vista con el cual se hará el inicio de sesion
   */

  /**
   * @returns
   * Se retornará los componentes con los cuales ingresar los datos con el fin de validarlos despues. Estos son
   * - Screen siendo el principal contenedor. Para mas informacion de este componente visite el archivo Screen.tsx
   * - 2 TextInputs ocupando 1 para el nombre del usuario y el otro para la contraseña.
   *   El TextInput para la contraseña se le agrego el prop secureTextEntry con el fin de aumentar la seguridad de la cuenta.
   * - Un componente Link con el cual poder conectar con la pagina principal de la APP
   * - Pressable para agregar mas estilos al link, ademas de darle estilaje de tipo boton.
   * - Text para el texto del boton
   */
  return (
    <Screen>
      <Stack.Screen
        options={{
          headerTitle: "Iniciar Sesión",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#671350" },
        }}
      />
      <TextInput
        mode="flat"
        style={style.textInput}
        label="Ingrese Rut"
        autoFocus
      />
      <TextInput
        mode="flat"
        style={style.textInput}
        label="Ingrese Contraseña"
        secureTextEntry
      />
      <Link href="/" asChild>
        <Button mode="contained" buttonColor="#671350">
          Iniciar Sesion
        </Button>
      </Link>
    </Screen>
  );
}

/**
 * Creacion para un estilo que solo se usará en esta vista.
 */

const style = StyleSheet.create({
  button: {
    marginVertical: 5,
  },
  textInput: {
    height: 50,
    width: 200,
    marginVertical: 5,
  },
});
