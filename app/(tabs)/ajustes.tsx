import { StyleSheet, View, Text } from "react-native";

export default function Ajustes() {
    return (
        <View style={style.container}>
            <Text> Ajustar </Text>
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