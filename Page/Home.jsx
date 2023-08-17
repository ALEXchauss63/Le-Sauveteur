import homeStyle from "../Style/homeStyle.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MapView from "react-native-maps";
import { Image, StatusBar, TouchableOpacity, View } from "react-native";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { useEffect, useState } from "react";
import { primaryColor } from "../Style/utils/color";
import MenuNav from "../Component/Layout/MenuNav";
import ConnexionBtn from "../assets/button_connexion.png";
import SosBtn from "../assets/button_sos.png";
import HistoryBtn from "../assets/button_history.png";
import MapIcon from "../assets/map_icon.png";
import ButtonUrgence from "../Component/ButtonUrgence";

function Home() {
  const [coords, setCoords] = useState();
  useEffect(() => {
    getCoords();
  }, []);

  //fonction pour récupéré la localisation de l'utilisateur
  async function getCoords() {
    //permet de demander l'autorisation d'avoir accès au téléphone
    //ici on récupère un statut
    let { status } = await requestForegroundPermissionsAsync();
    if (status == "granted") {
      //si on a l'autorisation on récupère la localisation du tel
      let location = await getCurrentPositionAsync();
      setCoords({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      //si l'autorisation n'est pas donnée on se met automatiquement sur les coordonnées de Paris
      setCoords({ lat: "48.85", lng: "2.35" });
    }
  }
  console.log(coords);
  return coords ? (
    <SafeAreaProvider>
      <SafeAreaView style={homeStyle.container}>
        <StatusBar backgroundColor={primaryColor} />
        <MapView
          showsCompass={false}
          style={homeStyle.map}
          initialRegion={{
            latitude: coords.lat,
            longitude: coords.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {/* Insérer ici des marqueurs ou des éléments pour la carte */}
        </MapView>
        <ButtonUrgence />
        <View style={homeStyle.miniMap}>
          <TouchableOpacity>
            <Image source={MapIcon} style={homeStyle.miniMap_icon} />
          </TouchableOpacity>
        </View>
        <MenuNav
          connexion={ConnexionBtn}
          sos={SosBtn}
          history={HistoryBtn}
          styleContainer={homeStyle.menu}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  ) : null;
}
export default Home;
