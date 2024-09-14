import { View, Text } from "react-native";
import { Stack } from "expo-router";

export default function InitialMenu() {
    return (
        <View>
            <Stack.Screen options={{headerShown: false}} />
            <Text> Gola que tal</Text>
        </View>
    )
}