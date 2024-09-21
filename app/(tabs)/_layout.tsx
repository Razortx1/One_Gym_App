import { Redirect, Tabs } from "expo-router";
import { Home, Calendario, Pago, User } from "../../components/icons/Icons";

export default function TabLayout() {
  const hola = true;
  if (!hola) {
    return <Redirect href="/initial" />;
  } else {
    return (
      <Tabs
        screenOptions={{
          headerTitle: "",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "",
            tabBarActiveTintColor: "",
            tabBarIcon: ({ color }) => <Home color={color} />,
          }}
        />
        <Tabs.Screen
          name="horario"
          options={{
            title: "",
            tabBarActiveTintColor: "",
            tabBarIcon: ({ color }) => <Calendario color={color} />,
          }}
        />
        <Tabs.Screen
          name="pagos"
          options={{
            title: "",
            tabBarActiveTintColor: "",
            tabBarIcon: ({ color }) => <Pago color={color} />,
          }}
        />
        <Tabs.Screen
          name="userview"
          options={{
            title: "",
            tabBarActiveTintColor: "",
            tabBarIcon: ({ color }) => <User color={color} />,
          }}
        />
      </Tabs>
    );
  }
}
