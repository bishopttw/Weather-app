import { Text, TextInput, StyleSheet, Modal, View } from "react-native";
import PrimaryButton from "./primaryButton";
import {Ionicons, FontAwesome} from "@expo/vector-icons"
import { fontSize } from "../utils/fontSize";
import { useState } from "react";

export default function AddWeatherModal({open, onClose, onAddWeather}){
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
                    placeholder="Enter city name (e.g, Lagos)"
                    value={city}
                    onChangeText={setCity}
                    placeholderTextColor="gray"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Temperature (e.g., 28)"
                    value={temperature}
                    onChangeText={setTemperature}
                    keyboardType="numeric"
                    placeholderTextColor="gray"
                />

                <Text style={styles.label}>
                    Select Weather:
                </Text>
                <View style={styles.weatherButtonsRow}>
                    <PrimaryButton 
                        onPress={() => setWeatherType('sunny')}
                        style={[
                            styles.weatherButton,
                            weatherType === 'sunny' ? styles.selected : null
                        ]}
                    >
                        <Ionicons name="sunny" size={fontSize.icon2} color="orange"/>
                        <Text style={[
                            styles.buttonText,
                            weatherType ===  'sunny' && {color: 'white'}
                        ]}>
                            Sunny
                        </Text>
                    </PrimaryButton>

                    <PrimaryButton 
                        onPress={() => setWeatherType('rainy')}
                        style={[
                            styles.weatherButton,
                            weatherType === 'rainy' ? styles.selected : null
                        ]}
                    >
                        <Ionicons name="rainy" size={fontSize.icon2} color="darkblue"/>
                        <Text style={[
                            styles.buttonText,
                            weatherType ===  'rainy' && {color: 'white'}
                            ]}>
                                Rainy
                            </Text>
                    </PrimaryButton>
                </View>

                <View style={styles.weatherButtonsRow}>    

                    <PrimaryButton 
                        onPress={() => setWeatherType('cloudy')}
                        style={[
                            styles.weatherButton,
                            weatherType === 'cloudy' ? styles.selected : null
                        ]}
                    >
                        <Ionicons name="cloudy" size={fontSize.icon2} color="white"/>
                        <Text style={[
                            styles.buttonText,
                            weatherType ===  'cloudy' && {color: 'white'}
                            ]}>
                                Cloudy
                            </Text>
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
        textAlign: 'center',
    },
    weatherButtonsRow: {
        flexDirection: 'row',
        gap: 15,
        marginBottom: 15,
        justifyContent: 'center'
    },
    weatherButton: {
        minWidth: 120,
        margin: 5,
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'lightgray',
        margin: 0,
    },
    selected: {
        backgroundColor: 'blue',
        borderWidth: 3,
        borderColor: 'yellow',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
}) 