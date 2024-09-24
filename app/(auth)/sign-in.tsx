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
import { TextInput, StyleSheet, Pressable, Text } from "react-native";
import { Stack, Link } from "expo-router";
import { Screen } from "../../components/Screen";

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
          headerTitle: "Iniciar Sesion",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#671350" },
        }}
      />
      <TextInput style={style.textInput} />
      <TextInput style={style.textInput} secureTextEntry />
      <Link href={{ pathname: "/" }}>
        <Pressable style={style.button}>
          <Text> Pagina de Inicio </Text>
        </Pressable>
      </Link>
    </Screen>
  );
}

/**
 * Creacion para un estilo que solo se usará en esta vista.
 */

const style = StyleSheet.create({
  button: {
    borderWidth: 1,
    marginTop: 5,
    borderRadius: 25,
    width: 150,
    height: 25,
    paddingVertical: 2,
    textAlign: "center",
    backgroundColor: "#E600C1",
  },
  textInput: {
    borderWidth: 1,
    marginTop: 6,
    borderRadius: 30,
    paddingHorizontal: 5,
  },
});
