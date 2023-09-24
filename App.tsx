import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserMainScreen from './src/screens/UserMainScreen';
import TournamentDetailsScreen from './src/screens/TournamentDetailsScreen';
import TournamentGalleryScreen from './src/screens/TournamentGalleryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: "#FFF" }, headerShown: false }}>
        <Stack.Screen name='UserHome' component={UserMainScreen} />
        <Stack.Screen name='RegisterationDetails' component={TournamentDetailsScreen} />
        <Stack.Screen name='TournamentGallery' component={TournamentGalleryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}