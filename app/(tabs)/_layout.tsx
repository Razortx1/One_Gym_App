import { Redirect, Tabs } from "expo-router";
import { Momentaneo, Home , Ajustes, Calendario, Pago} from "../../icons/Icons";

export default function IndexLayout() {
    const hola = true
    if (!hola) {
        return <Redirect href="/initial" />
    }
    else{
        return <Tabs screenOptions={{headerTitle: ""}}>
            <Tabs.Screen name="index" options={{title: "", tabBarIcon: Home}}/>
            <Tabs.Screen name="horario" options={{title: "", tabBarIcon: Calendario}}/>
            <Tabs.Screen name="pagos" options={{title: "", tabBarIcon: Pago}}/>
            <Tabs.Screen name="ajustes" options={{title: "", tabBarIcon: Ajustes}}/>
        </Tabs>
    }
}