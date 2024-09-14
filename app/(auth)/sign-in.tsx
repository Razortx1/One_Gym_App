import { View, TextInput, StyleSheet, Pressable, Text } from "react-native";
import { Stack, Link } from "expo-router";


export default function SignIn() {
    return(
        <View style={style.container}>
            <Stack.Screen options={{headerTitle: "Iniciar Sesion"}}/>
            <TextInput style={style.textInput}/>
            <TextInput style={style.textInput}/>
            <Link href={{pathname: '/'}}>
                <Pressable style={style.button}>
                    <Text> Pagina de Inicio </Text> 
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
        marginTop: 5,
        borderRadius: 25,
        width: 150,
        height: 25,
        paddingVertical: 2,
        textAlign: "center",
        backgroundColor: "#c732b0"
    },
    textInput: {
        borderWidth: 1,
        marginTop: 6,
        borderRadius: 30,
        paddingHorizontal: 5
    }
})