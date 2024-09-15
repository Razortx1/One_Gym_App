import { StyleSheet, View, Text } from "react-native";

export default function Horario() {
    return (
        <View style={style.container}>
            <Text>Horario</Text>
        </View>
    )
}








const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})