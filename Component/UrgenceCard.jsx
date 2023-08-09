import cardStyle from "../Style/cardStyle.style";
import { Text, View } from "react-native";

function UrgenceCard() {
  return (
    <View style={cardStyle.container}>
      <View style={cardStyle.rubrique}>
        <Text style={cardStyle.data}>Soumise le :</Text>
        <Text style={cardStyle.data}>Durée :</Text>
        <Text style={cardStyle.data}>Coordonnées GPS :</Text>
      </View>
      <View style={cardStyle.rubrique2}>
        <Text style={cardStyle.data2}>props date</Text>
        <Text style={cardStyle.data2}>props temps</Text>
        <Text style={cardStyle.data2}>props coords</Text>
      </View>
    </View>
  );
}
export default UrgenceCard;
