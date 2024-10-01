/**
 * Archivo que poseeria los datos del usuario
 */

/**
 * @import
 * Se importa el componente Stack y Link de la libreria expo-router
 * Se importa Ajuste, siendo el icono para usar
 * Se importa Screen del archivo encontrado en components
 * Se importa Pressable y Text desde la libreria React Native
 */

import { FlatList, Pressable, Text } from "react-native";
import { Link, Stack } from "expo-router";
import { Ajuste } from "../../components/icons/Icons";
import { Screen } from "../../components/Screen";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native-paper";

/**
 * @function UserView
 * Es la funcion que renderiza la vista que tendria el usuario
 * @returns
 * Retorna un icono que dentro de este
 * contiene un Link que va directamente hacia Settings, con un prop de asChild
 * todo esto dentro de un Pressable ademas de un texto que dice Usuario
 */

type User = {
  id: string;
  name: string;
  username: string;
  email: string;
};

export default function UserView() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<User[]>([]);
  const getUser = async () => {
    try {
      const user = await fetch("https://jsonplaceholder.typicode.com/users?id=1");
      const json = await user.json();
      setData(json);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <Screen>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Link href="../settings" asChild>
              <Pressable>
                <Ajuste />
              </Pressable>
            </Link>
          ),
        }}
      />
      {isLoading ? (
        <ActivityIndicator color="black" size="large" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <Text>
              {item.name}, {item.email}
            </Text>
          )}
        />
      )}
    </Screen>
  );
}
