import { View } from "react-native";

export function Screen({children}:any) {
    return <View style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }}>
        {children}
    </View>;
}