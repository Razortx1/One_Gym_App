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
          headerStyle: {backgroundColor: "#671350"}
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "",
            tabBarActiveTintColor: "#FF90ED",
            tabBarIcon: ({ color }) => <Home color={color} />,
          }}
        />
        <Tabs.Screen
          name="horario"
          options={{
            title: "",
            tabBarActiveTintColor: "#FF90ED",
            tabBarIcon: ({ color }) => <Calendario color={color} />,
          }}
        />
        <Tabs.Screen
          name="pagos"
          options={{
            title: "",
            tabBarActiveTintColor: "#FF90ED",
            tabBarIcon: ({ color }) => <Pago color={color} />,
          }}
        />
        <Tabs.Screen
          name="userview"
          options={{
            title: "",
            tabBarActiveTintColor: "#FF90ED",
            tabBarIcon: ({ color }) => <User color={color} />,
          }}
        />
      </Tabs>
    );
  }
}
