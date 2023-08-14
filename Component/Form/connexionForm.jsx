import { Text, TextInput, TouchableOpacity, View } from "react-native";
import coFormStyle from "../../Style/coFormStyle.style";
import { useState } from "react";

function ConnexionForm() {
  const [logIn, setLogIn] = useState();
  const [email, setEmail] = useState();
  const [mdp, setMdp] = useState();

  let user = {};
  let regMail = new RegExp(
    "[a-z0-9\\-_]+[a-z0-9\\.\\-_]*@[a-z0-9\\-_]{2,}\\.[a-z\\.\\-_]+[a-z\\-_]+"
  );
  let regMdp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^<>]{8,}$/;

  //bloc de fonction pour récupéré les données des inputs
  function getEmail(value) {
    setEmail(value);
    console.log("mon email : " + value);
  }
  function getMdp(value) {
    setMdp(value);
  }

  //bloc pour valider les données récupéré des input avant envoi
  function checkData() {
    if (regMail.test(email) === false || "") {
      alert("Votre adresse mail est incorrect");
    }
    if (regMdp.test(mdp) === false || "") {
      alert(
        "Votre mot de passe doit comporter : 8 caractères dont au moins une minuscule, une majuscule et un chiffre"
      );
    } else {
      user = {
        mail: email,
        password: mdp,
      };
      setLogIn(user);
    }
  }
  console.log(logIn);
  return (
    <View style={coFormStyle.container}>
      <View style={coFormStyle.form}>
        <TextInput
          style={coFormStyle.input}
          placeholder="E-mail"
          onSubmitEditing={(e) => getEmail(e.nativeEvent.text)}
        />
        <TextInput
          style={coFormStyle.input}
          placeholder="Mot de passe"
          onSubmitEditing={(e) => getMdp(e.nativeEvent.text)}
        />
        <TouchableOpacity style={coFormStyle.coBtn} onPress={checkData}>
          <Text style={coFormStyle.txt}>CONNEXION</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default ConnexionForm;
