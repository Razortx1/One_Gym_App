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

import { FlatList, Pressable } from "react-native";
import { Link, Stack } from "expo-router";
import { Ajuste } from "../../components/icons/Icons";
import { Screen } from "../../components/Screen";
import { useEffect, useState } from "react";
import { ActivityIndicator, Avatar, Card, Text } from "react-native-paper";

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
      const user = await fetch(
        "https://jsonplaceholder.typicode.com/users?id=1"
      );
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
        <ActivityIndicator color="black" size="large"/>
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <>
              <Avatar.Image
                size={100}
                source={require("../../assets/favicon.png")}
                style={{ marginVertical: 5, alignSelf: "center" }}
              />
              <Card style={{ marginVertical: 5 }}>
                <Card.Title title="Datos de Usuario" />
                <Card.Content>
                  <Text variant="titleLarge">Nombres:</Text>
                  <Text variant="bodyLarge">{item.name}</Text>
                  <Text variant="titleLarge">Apellido Paterno</Text>
                  <Text variant="bodyLarge">Garcia</Text>
                  <Text variant="titleLarge">Apellido Materno</Text>
                  <Text variant="bodyLarge">Rojas</Text>
                  <Text variant="titleLarge">Edad</Text>
                  <Text variant="bodyLarge">24</Text>
                </Card.Content>
              </Card>
              <Card style={{ marginVertical: 5 }}>
                <Card.Content>
                  <Text variant="titleLarge">Estado Civil:</Text>
                  <Text variant="bodyLarge">Soltera</Text>
                  <Text variant="titleLarge">Fecha de Nacimiento</Text>
                  <Text variant="bodyLarge">15/03/2000</Text>
                </Card.Content>
              </Card>
              <Card style={{ marginVertical: 5 }}>
                <Card.Content>
                  <Text variant="titleLarge">Ocupación:</Text>
                  <Text variant="bodyLarge">Programadora Full Stack</Text>
                  <Text variant="titleLarge">Dirección:</Text>
                  <Text variant="bodyLarge">Copiapó</Text>
                  <Text variant="titleLarge">Telefono:</Text>
                  <Text variant="bodyLarge">+569 4582 4531</Text>
                  <Text variant="titleLarge">Telefono Emergencia:</Text>
                  <Text variant="bodyLarge">+569 4582 4531</Text>
                </Card.Content>
              </Card>
            </>
          )}
        />
      )}
    </Screen>
  );
}
