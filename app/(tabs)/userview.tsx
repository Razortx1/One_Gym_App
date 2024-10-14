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


import { FlatList, Pressable, Text, View } from "react-native";
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
export default function UserView() {
  const [data, setData] = useState(null); // Cambiar a null, ya que ahora no es un arreglo
  const [loading, setLoading] = useState(true);
  const url = "http://192.168.100.7:3000/users"; // URL de tu API

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        console.log("Data received:", json); // Para verificar la respuesta
        setData(json); // Guardar el objeto en lugar de un arreglo
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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
      {loading ? (
        <ActivityIndicator color="black" size="large" />
      ) : (
        <View style={{ padding: 10 }}>
          {data ? ( // Verificar si hay datos
            <>
              <Text>ID: {data.id}</Text>
              <Text>Name: {data.name}</Text>
              <Text>Email: {data.email}</Text>
              <Text>Username: {data.username}</Text>
            </>
          ) : (
            <Text>No data found</Text> // Mensaje si no hay datos
          )}
        </View>
      )}
    </Screen>
  );
}