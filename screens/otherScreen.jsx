import { View, Text, ScrollView, StyleSheet } from "react-native";
import {Ionicons} from "@expo/vector-icons";
import { fontSize } from "../utils/fontSize";

const forecastData = [
  { day: 'Monday',    temp: '28', icon: 'sunny',  color: 'orange' },
  { day: 'Tuesday',   temp: '24', icon: 'rainy',  color: 'blue'   },
  { day: 'Wednesday', temp: '22', icon: 'cloudy', color: 'gray'   },
  { day: 'Thursday',  temp: '30', icon: 'sunny',  color: 'orange' },
  { day: 'Friday',    temp: '20', icon: 'rainy',  color: 'blue'   },
  { day: 'Saturday',  temp: '26', icon: 'cloudy', color: 'gray'   },
  { day: 'Sunday',    temp: '29', icon: 'sunny',  color: 'orange' },
]

export default function otherScreen({route}){

    const {city, weatherType, temperature} = route.params;
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.title}>7-Day Forecast</Text>
            <Text style={styles.cityName}>{city}</Text>
            <Text style={styles.currentTemp}>Current: {temperature}°C</Text>

            {forecastData.map((forecast, index) => (
                <View key={index} style={styles.forecastCard}>
                    <Text style={styles.dayText}>{forecast.day}</Text>
                    <Ionicons name={forecast.icon} size={fontSize.icon2} color={forecast.color}/>
                    <Text style={styles.tempText}>{forecast.temp}°C</Text>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 20,
        backgroundColor: '#f0f8ff',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
        marginTop: 20,
    },
    cityName:{
        fontSize: 24,
        textAlign: 'center',
        color: 'darkblue',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    currentTemp: {
        fontSize: 18,
        textAlign: 'center',
        color: 'grey',
        marginBottom: 30,
    },
    forecastCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'skyblue',
        padding: 20,
        marginBottom: 15,
        borderRadius: 10,
    },
    dayText: {
        fontSize: 18,
        fontWeight: 'bold',
        width: 120,
    },
    tempText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'darkblue',
    }
});