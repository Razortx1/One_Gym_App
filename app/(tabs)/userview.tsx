import { Pressable, Text } from "react-native";
import { Link, Stack } from "expo-router";
import { Ajuste } from "../../components/icons/Icons";
import { Screen } from "../../components/Screen";

export default function UserView() {
    return (
        <Screen>
            <Stack.Screen options={{headerRight: () => <Link href="/settings">
            <Pressable>
                <Ajuste />
            </Pressable>
            </Link>}} />
            <Text> Ajustar </Text>
        </Screen>
    )
}
