import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import  HomeScreen  from "./screens/HomeScreen";
import  otherScreen from "./screens/otherScreen";

const Stack = createStackNavigator();

export default function App(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen}/>
          <Stack.Screen name="WeatherForecast" component={otherScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}
