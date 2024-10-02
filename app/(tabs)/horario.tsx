/**
 * Archivo que contiene un renderizado del horario
 */

/**
 * @import
 * Se importa Screen del archivo encontrado en components
 * Se importa Text desde la libreria React Native
 */

import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Agenda, AgendaList, LocaleConfig } from "react-native-calendars";
import { PaperProvider, Text } from "react-native-paper";
/**
 * @function Horario
 * Es la funcion que renderiza la vista que tendria el horario
 * @returns
 * Retorna solamente un texto de horario
 */


export default function Horario() {
  return (
    <SafeAreaView style={styles.container}>
      <PaperProvider>
      <Text variant="titleLarge">Clases disponibles</Text>
        <Agenda showOnlySelectedDayItems
          items={{
            "2024-10-01": [
                {
                  name: "Clase 1",
                  data: "Clases de manejo para vehiculos a 2 ruedas",
                },
                {
                    name: "Clase 1.5",
                    data: "Clases de manejo para vehiculos a 3 ruedas",
                  },
              ],
            "2024-10-02"
            : [
              {
                name: "Clase 2",
                data: "Clases de manejo para vehiculos a 2 ruedas",
              },
            ],
            "2024-10-03": [
              {
                name: "Clase 3",
                data: "Clases de manejo para vehiculos a 4 ruedas",
              },
            ],

            "2024-10-04": [
              {
                name: "Clase 4",
                data: "Clases de manejo para vehiculos a 4 ruedas",
              },
            ],

            "2024-10-05": [
              {
                name: "Clase 5",
                data: "Clases de manejo para vehiculos a 4 ruedas",
              },
            ],

            "2024-10-06": [
              {
                name: "Clase 6",
                data: "Clases de manejo para vehiculos a 4 ruedas",
              },
            ],

            "2024-10-07": [
              {
                name: "Clase 7",
                data: "Clases de manejo para vehiculos a 4 ruedas",
              },
            ],
            "2024-10-08": [
              {
                name: "Clase 8",
                data: "Clases de manejo para vehiculos a 4 ruedas",
              },
            ],
            "2024-10-09": [
              {
                name: "Clase 9",
                data: "Clases de manejo para vehiculos a 4 ruedas",
              },
              {
                name: "Clase 9.5",
                data: "Clases de manejo para vehiculos a 4 y 2 ruedas",
              },
            ],
          }}
          
          renderItem={(item: any, isFirst: any) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => console.log("hola mundo")}
            >
              <Text>{item.name}</Text>
              <Text>{item.data}</Text>
            </TouchableOpacity>
          )}
        />
      </PaperProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    backgroundColor: "#dca3a3",
    marginTop: 25,
    marginRight: 10,
    borderRadius: 5,
    padding: 10,
    paddingBottom: 20,
  },
});
