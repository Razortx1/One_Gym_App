import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Agenda } from "react-native-calendars";
import { PaperProvider, Text } from "react-native-paper";
import moment from "moment";

export default function Horario() {
  const [currentWeekStart, setCurrentWeekStart] = useState(moment().startOf('week').format("YYYY-MM-DD"));
  const [currentDate, setCurrentDate] = useState(moment().format("YYYY-MM-DD"));

  // Items de ejemplo para la Agenda
  const items = {
    "2024-10-01": [
      { name: "Clase 1", data: "Clase de manejo para vehículos a 2 ruedas" },
    ],
    "2024-10-02": [
      { name: "Clase 2", data: "Clase de manejo para vehículos a 4 ruedas" },
    ],
    "2024-10-03": [
      { name: "Clase 3", data: "Clase de manejo para vehículos a 4 ruedas" },
    ],
    "2024-10-04": [
      { name: "Clase 4", data: "Clase de manejo para vehículos a 4 ruedas" },
    ],
    "2024-10-05": [
      { name: "Clase 5", data: "Clase de manejo para vehículos a 4 ruedas" },
    ],
    "2024-10-06": [],
    "2024-10-07": [],
  };

  // Función para obtener el rango de días de la semana a partir de una fecha
  const getWeekDates = (startDate:any) => {
    const startOfWeek = moment(startDate).startOf('week');
    const dates = [];
    for (let i = 0; i < 7; i++) {
      dates.push(moment(startOfWeek).add(i, 'days').format('YYYY-MM-DD'));
    }
    return dates;
  };

  // Obtener las fechas de la semana actual
  const weekDates = getWeekDates(currentWeekStart);

  // Función para cambiar a la semana anterior
  const handlePrevWeek = () => {
    const prevWeek = moment(currentWeekStart).subtract(1, 'weeks').format("YYYY-MM-DD");
    setCurrentWeekStart(prevWeek);
    setCurrentDate(prevWeek);  // Cambiar el día seleccionado
  };

  // Función para cambiar a la semana siguiente
  const handleNextWeek = () => {
    const nextWeek = moment(currentWeekStart).add(1, 'weeks').format("YYYY-MM-DD");
    setCurrentWeekStart(nextWeek);
    setCurrentDate(nextWeek);  // Cambiar el día seleccionado
  };

  // Asegurarse de que todos los días tengan entradas, aunque estén vacías
  const ensureAllDaysHaveEntries = (items:any, weekDates:any) => {
    const newItems = { ...items };
    weekDates.forEach((date:any) => {
      if (!newItems[date]) {
        newItems[date] = [];
      }
    });
    return newItems;
  };

  const agendaItems = ensureAllDaysHaveEntries(items, weekDates);

  return (
    <SafeAreaView style={styles.container}>
      <PaperProvider>
        <Text variant="titleLarge" style={styles.title}>Clases disponibles</Text>

        {/* Flechas para cambiar semanas */}
        <View style={styles.arrowContainer}>
          <Text onPress={handlePrevWeek} style={styles.arrow}>{"<"}</Text>
          <Text style={styles.weekTitle}>{`Semana del ${moment(currentWeekStart).format('DD MMM')} al ${moment(currentWeekStart).add(6, 'days').format('DD MMM')}`}</Text>
          <Text onPress={handleNextWeek} style={styles.arrow}>{">"}</Text>
        </View>

        {/* Mantener el calendario de Agenda */}
        <Agenda
          items={agendaItems}
          selected={currentDate}
          renderItem={(item:any) => (
            <View style={styles.item}>
              <Text>{item.name}</Text>
              <Text>{item.data}</Text>
            </View>
          )}
          renderEmptyDate={() => (
            <View style={styles.emptyItem}>
              <Text>No tenemos clases disponibles</Text>
            </View>
          )}
          // Mostrar solo el día seleccionado
          showOnlySelectedDayItems
          theme={{
            selectedDayBackgroundColor: '#dca3a3',
            selectedDayTextColor: '#ffffff',
            todayTextColor: 'red',
            dayTextColor: '#2d4150',
            agendaTodayColor: 'red',
            agendaKnobColor: 'gray',
          }}
        />
      </PaperProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    marginVertical: 10,
  },
  arrowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  weekTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrow: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#dca3a3',
  },
  item: {
    backgroundColor: "#dca3a3",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  emptyItem: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
});
