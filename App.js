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
    if (type === 'sunny') return <Ionicons name="sunny-outline" size={fontSize.icon1} color="orange"/>
    if (type === 'rainy') return <Ionicons name="rainy-outline" size={fontSize.icon1} color="blue"/>
    if (type === 'cloudy') return <Ionicons name="cloudy-outline" size={fontSize.icon1} color="gray"/>
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
                <Text style=></Text>
              </View>
            </View>
          ))
        )}
      </ScrollView>

      <View>
        {isModalOpen && <AddWeatherModal open={isModalOpen} onClose={handleCloseModal}/>}
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});
