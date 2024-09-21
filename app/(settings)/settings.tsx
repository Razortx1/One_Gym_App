import { Text } from "react-native";
import { Screen } from "../../components/Screen";
import { Stack } from "expo-router";

export default function Ajustes() {
    return (
        <Screen>
            <Stack.Screen options={{headerShown: true}} />
            <Text> Ajustar </Text>
        </Screen>
    )
}