import { View, Text, Pressable, StyleSheet } from "react-native";
import { Stack, Link } from "expo-router";

export default function InitialMenu() {
    return (
        <View style={style.container}>
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
        </View>
    )
}



const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
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