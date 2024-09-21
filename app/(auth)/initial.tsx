import { View, Text, Pressable, StyleSheet } from "react-native";
import { Stack, Link } from "expo-router";
import { Screen } from "../../components/Screen";

export default function InitialMenu() {
    return (
        <Screen>
            <Stack.Screen options={{headerShown: false}}/>
            <Text style={{marginBottom: 5}}>Imagen salvage aparece</Text>
            <Link href={'/sign-in'}  asChild>
            <Pressable style={style.button}>
                <Text style={style.text}>Iniciar Sesion</Text>
            </Pressable>
            </Link>
            <Link href="">
            <Pressable style={style.button}>
                <Text>Suscribirse</Text>
            </Pressable>
            </Link>
        </Screen>
    )
}



const style = StyleSheet.create({
    button: {
        borderWidth: 1,
        marginBottom: 5,
        borderRadius: 25,
        width: 150,
        height: 25,
        paddingVertical: 2,
        textAlign: "center",
        backgroundColor: "#c732b0"
    },
    text: {
        textAlign: "center"
    }
})