import { Redirect, Tabs } from "expo-router";
import { Home , Calendario, Pago, User} from "../../components/icons/Icons";

export default function IndexLayout() {
    const hola = true
    if (!hola) {
        return <Redirect href="/initial" />
    }
    else{
        return <Tabs screenOptions={{headerTitle: ""}}>
            <Tabs.Screen name="index" options={{title: "", tabBarIcon: ({color}) => <Home color={color}/>}}/>
            <Tabs.Screen name="horario" options={{title: "", tabBarIcon: ({color}) => <Calendario color={color}/>}}/>
            <Tabs.Screen name="pagos" options={{title: "", tabBarIcon: ({color}) => <Pago color={color}/>}}/>
            <Tabs.Screen name="userview" options={{title: "", tabBarIcon: ({color}) => <User color={color}/>}}/>
        </Tabs>
    }
}