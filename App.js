import Home from "./Page/Home";
import Profil from "./Page/Profil";
import Connexion from "./Page/Connexion";
import Inscription from "./Page/Inscription";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Rubik from "./assets/RubikMonoOne-Regular.ttf";
import { AuthProvider } from "./Authentification/AuthContext";

const Stack = createNativeStackNavigator();
const navTheme = {
  colors: {
    background: "transparent",
  },
};
const App = () => {
  const [font] = useFonts({ Rubik: Rubik });
  return (
    <AuthProvider>
      <NavigationContainer theme={navTheme}>
        {font ? (
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Home"
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Connexion" component={Connexion} />
            <Stack.Screen name="Inscription" component={Inscription} />
            <Stack.Screen name="Profil" component={Profil} />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
