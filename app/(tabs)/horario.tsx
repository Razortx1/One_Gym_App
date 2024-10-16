import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Agenda } from "react-native-calendars";
import { PaperProvider, Text } from "react-native-paper";
import moment from "moment";

export default function Horario() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = "http://172.20.10.3:3000/clases"; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        console.log("Datos recibido:", json); //Para visualizar posbiles errores
        setData(json);
      } catch (error) {
        console.error("Error de busqueda:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const [currentWeekStart, setCurrentWeekStart] = useState(moment().startOf('week').format("YYYY-MM-DD"));
  const [currentDate, setCurrentDate] = useState(moment().format("YYYY-MM-DD"));

  const Items = (data:any) => {
    const items:any = {};
    if (data) {
      const sortedData = data.sort((a: any, b: any) => {
        const timeA = moment(a.hora_inicio, "HH:mm");
        const timeB = moment(b.hora_inicio, "HH:mm");
        return timeA.isBefore(timeB) ? -1 : timeA.isAfter(timeB) ? 1 : 0;
      });


      sortedData.forEach((clase:any) => {
        const date = moment(clase.fecha).format("YYYY-MM-DD");
        if (!items[date]) {
          items[date] = [];
        }
        items[date].push({
          id: clase.id,
          name: clase.nombre, 
          description: clase.descripcion, 
          inicio: clase.hora_inicio,
          fin: clase.hora_fin
        });
      });
    }
    return items;
  };

  const items = loading ? {} : Items(data);

  const getWeekDates = (startDate:any) => {
    const startOfWeek = moment(startDate).startOf('week');
    const dates = [];
    for (let i = 0; i < 7; i++) {
      dates.push(moment(startOfWeek).add(i, 'days').format('YYYY-MM-DD'));
    }
    return dates;
  };

  const weekDates = getWeekDates(currentWeekStart);

  const handlePrevWeek = () => {
    const prevWeek = moment(currentWeekStart).subtract(1, 'weeks').format("YYYY-MM-DD");
    setCurrentWeekStart(prevWeek);
    setCurrentDate(prevWeek);
  };

  const handleNextWeek = () => {
    const nextWeek = moment(currentWeekStart).add(1, 'weeks').format("YYYY-MM-DD");
    setCurrentWeekStart(nextWeek);
    setCurrentDate(nextWeek);
  };

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

        <View style={styles.arrowContainer}>
          <Text onPress={handlePrevWeek} style={styles.arrow}>{"<"}</Text>
          <Text style={styles.weekTitle}>{`Semana del ${moment(currentWeekStart).format('DD MMM')} al ${moment(currentWeekStart).add(6, 'days').format('DD MMM')}`}</Text>
          <Text onPress={handleNextWeek} style={styles.arrow}>{">"}</Text>
        </View>

        <Agenda
          items={agendaItems}
          selected={currentDate}
          renderItem={(item:any) => (
            <View style={styles.item} key={item.id}>
              <Text style={{ marginTop: 10 }}>Clase: {item.name}</Text>
              <Text style={{ marginTop: 10 }}>Descripción: {item.description}</Text>
              <Text style={{ marginTop: 10, alignSelf:"center"}}>Inicio: {item.inicio}  |  Fin: {item.fin}</Text>
            </View>
          )}
          renderEmptyDate={() => (
            <View style={styles.emptyItem}>
              <Text>No hay clases disponibles</Text>
            </View>
          )}
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
    marginRight: 10
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
    flex:2,
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    marginBottom: 0,
  },
  emptyItem: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
});
