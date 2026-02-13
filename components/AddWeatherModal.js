import { Text, TextInput, StyleSheet, Modal, View } from "react-native";
import PrimaryButton from "./primaryButton";
import {Ionicons, FontAwesome} from "@expo/vector-icons"
import { fontSize } from "../utils/fontSize";
import { useState } from "react";

export default function AddWeatherModal({open, onClose}){
    const [city, setCity] = useState('');
    const [temperature, setTemperature] = useState('');
    const [weatherType, setWeatherType] = useState('sunny');

    function handleAdd(){
        if (city.trim()=== '') return;

        const weatherData ={
            id: Date.now(),
            city: city,
            temperature: temperature || '25',
            weatherType: weatherType
        };

        onAddWeather(weatherData);

        setCity('');
        setTemperature('');
        setWeatherType('sunny');

        onClose();
    }


    return(
        <Modal visible={open} animationType="slide">
            <View style={styles.container}>
                <Text style={styles.title}>
                    Add Weather
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Enter city name"
                    value={city}
                    OnChangeText={setCity}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Temperature (e.g., 28)"
                    value={temperature}
                    OnChangeText={setTemperature}
                    keyboardType="numeric"
                />

                <Text style={styles.label}>
                    Select Weather:
                </Text>
                <View style={styles.weatherButtons}>
                    <PrimaryButton 
                        onPress={() => setWeatherType('sunny')}
                        style={weatherType === 'sunny' ? styles.selected : null}
                    >
                        <Ionicons name="sunny-outline" size={fontSize.icon3}/>
                        <Text>Sunny</Text>
                    </PrimaryButton>

                    <PrimaryButton 
                        onPress={() => setWeatherType('rainy')}
                        style={weatherType === 'rainy' ? styles.selected : null}
                    >
                        <Ionicons name="rainy-outline" size={fontSize.icon3}/>
                        <Text>Rainy</Text>
                    </PrimaryButton>

                    <PrimaryButton 
                        onPress={() => setWeatherType('cloudy')}
                        style={weatherType === 'cloudy' ? styles.selected : null}
                    >
                        <Ionicons name="cloudy-outline" size={fontSize.icon3}/>
                        <Text>Cloudy</Text>
                    </PrimaryButton>
                </View>

                <PrimaryButton onPress={handleAdd}>
                    <Text>Add Weather</Text>
                </PrimaryButton>

                <PrimaryButton onPress={onClose}>
                    <Ionicons name="close-circle-outline" size={fontSize.icon2}/>
                    <Text>Close</Text> 
                </PrimaryButton>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderWidth: 2,
        borderColor: 'skyblue',
        padding: 15,
        fontSize: 18,
        marginBottom: 15,
        borderRadius: 8,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    weatherButtons: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 20,
    },
    selected: {
        backgroundColor: 'blue',
    }
}) 