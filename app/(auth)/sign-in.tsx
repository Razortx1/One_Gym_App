import { View, TextInput, StyleSheet, Pressable, Text } from "react-native";
import { Stack, Link } from "expo-router";
import { Screen } from "../../components/Screen";


export default function SignIn() {
    return(
        <Screen>
            <Stack.Screen options={{headerTitle: "Iniciar Sesion",headerTintColor:"white" , headerStyle: {backgroundColor: "#671350"}}}/>
            <TextInput style={style.textInput}/>
            <TextInput style={style.textInput}/>
            <Link href={{pathname: '/'}}>
                <Pressable style={style.button}>
                    <Text> Pagina de Inicio </Text> 
                </Pressable>
            </Link>
        </Screen>
    )
}


const style = StyleSheet.create({
    button: {
        borderWidth: 1,
        marginTop: 5,
        borderRadius: 25,
        width: 150,
        height: 25,
        paddingVertical: 2,
        textAlign: "center",
        backgroundColor: "#E600C1"
    },
    textInput: {
        borderWidth: 1,
        marginTop: 6,
        borderRadius: 30,
        paddingHorizontal: 5
    }
})