import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Singin from "./src/screens/connection/Singin";
import Singup from "./src/screens/connection/Singup";
import Index from "./src/screens/App/Index";



export default function App() {
  const Stack = createStackNavigator();

  return (
        <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen name="singin" component={Singin}/>
        <Stack.Screen name="singup"   component={Singup}/>
        <Stack.Screen name="Index"  component={Index}/>
      </Stack.Navigator>
    </NavigationContainer>  
  );
}
