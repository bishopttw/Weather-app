import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Ionicons, FontAwesome} from "@expo/vector-icons";
import { useState } from 'react';
import AddWeatherModal from './components/AddWeatherModal';
import PrimaryButton from './components/primaryButton';
import { fontSize } from './utils/fontSize';

export default function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [weatherList, setWeatherList] = useState([]);

  function handleAddWeather(){
    setIsModalOpen(true);
  }

  function handleCloseModal(){
    setIsModalOpen(false);
  }

  function handleAddWeatherData(weatherData){
    setWeatherList(prevList => [...prevList, weatherData]);
  }

  function handleDeleteWeather(id){
    setWeatherList(prevList => prevList.filter(weather => weather.id !== id));
  }

  function getWeatherIcon(type){
    if (type === 'sunny') return <Ionicons name="sunny" size={fontSize.icon1} color="orange"/>
    if (type === 'rainy') return <Ionicons name="rainy" size={fontSize.icon1} color="blue"/>
    if (type === 'cloudy') return <Ionicons name="cloudy" size={fontSize.icon1} color="white"/>
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>

      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={handleAddWeather}>
          <Text>Add Weather</Text>
          <Ionicons name="add-circle-outline" size={fontSize.icon3}/>
        </PrimaryButton>
      </View>

      <ScrollView style={styles.weatherListContainer}>
        {weatherList.length === 0 ?(
          <Text style={styles.emptyText}>
            No Weather Data Yet, Add Some!
          </Text>
        ) :(
          weatherList.map(weather => (
            <View key={weather.id} style={styles.weatherCard}>
              {getWeatherIcon(weather.weatherType)}

              <View style={styles.weatherInfo}>
                <Text style={styles.cityText}>{weather.city}</Text>
                <Text style={styles.tempText}>{weather.temperature}°C</Text>
              </View>

              <PrimaryButton onPress={() => handleDeleteWeather(weather.id)}>
                <Ionicons name="trash" size={fontSize.icon3} color="red"/>
              </PrimaryButton>
            </View>
          ))
        )}
      </ScrollView>

      <View>
        {isModalOpen && (
          <AddWeatherModal 
          open={isModalOpen}
          onClose={handleCloseModal}
          onAddWeather={handleAddWeatherData}
          />
        )}
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    marginTop: 20,
  },
  weatherListContainer: {
    flex: 1,
    padding: 20,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'gray',
    marginTop: 50,
  },
  weatherCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    gap: 15,
  },
  weatherInfo: {
    flex: 1,
  },
  cityText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  tempText: {
    fontSize: 18,
    color: 'darkblue',
  }
});
