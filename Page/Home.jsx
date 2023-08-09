import homeStyle from "../Style/homeStyle.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MapView from "react-native-maps";
import { Text, View } from "react-native";
import MenuNav from "../Component/Layout/MenuNav";

function Home() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={homeStyle.container}>
        <MapView
          showsCompass={false}
          style={homeStyle.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {/* Insérer ici des marqueurs ou des éléments pour la carte */}
        </MapView>
        <View style={{ flex: 4 }}>
          <Text>Bouton</Text>
        </View>
        <MenuNav />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export default Home;
