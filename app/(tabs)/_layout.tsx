import { Redirect, Tabs } from "expo-router";

export default function IndexLayout() {
    const hola = true
    if (!hola) {
        return <Redirect href="/initial" />
    }
    else{
        return <Tabs screenOptions={{headerShown: false}}>
            <Tabs.Screen name="index" options={{title: "Home"}}/>
            <Tabs.Screen name="horario" options={{title: "Horario"}}/>
            <Tabs.Screen name="pagos" options={{title: "Pagar"}}/>
            <Tabs.Screen name="ajustes" options={{title: "Ajustes"}}/>
        </Tabs>
    }
}