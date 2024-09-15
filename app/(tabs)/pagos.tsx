import { StyleSheet, View, Text } from "react-native";

export default function Pagos() {
    return (
        <View style={style.container}>
            <Text> Pagar </Text>
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