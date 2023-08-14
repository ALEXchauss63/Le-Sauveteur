import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import inscriptionStyle from "../Style/inscriptionStyle.style";
import HistoryBtn from "../assets/button_history.png";
import SosSmallbtn from "../assets/button_sos_small.png";
import ConnexionOff from "../assets/button_connexion_off.png";
import Header from "../Component/Layout/Header";
import MenuNav from "../Component/Layout/MenuNav";
import Title from "../Component/Layout/Title";
import FormInput from "../Component/FormInput";

function Inscription() {
  const [userNew, setUserNew] = useState();
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [telNumber, setTelNumber] = useState();
  const [mdp, setMdp] = useState();
  const nav = useNavigation();
  const newUser = {};

  //bloc regex
  let regMail = new RegExp(
    "[a-z0-9\\-_]+[a-z0-9\\.\\-_]*@[a-z0-9\\-_]{2,}\\.[a-z\\.\\-_]+[a-z\\-_]+"
  );
  let regMdp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^<>]{8,}$/;
  let regName = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:-[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
  let regLastName =
    /^[A-Za-zÀ-ÖØ-öø-ÿ']+((-[A-Za-zÀ-ÖØ-öø-ÿ]+)| (?! ))*[A-Za-zÀ-ÖØ-öø-ÿ']+$/u;
  let regTel =
    /^(?:(?:\+|00)33[\s.-]{0,2}(?:\(0\)[\s.-]{0,2})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|(?:[\s.-]?\d{3}){2})$/;

  //bloc de fonction pour récupéré les données des inputs
  function getName(value) {
    setName(value);
  }
  function getLastName(value) {
    setLastName(value);
  }
  function getEmail(value) {
    setEmail(value);
  }
  function getMdp(value) {
    setMdp(value);
  }
  function getTel(value) {
    setTelNumber(value);
  }

  // function de vérification des données du formulaire d'inscritpion
  function checkForm() {
    if (regName.test(name) == false || "") {
      alert("Champ du Nom inccorect");
    }
    if (regLastName.test(lastName) == false || "") {
      alert("Champ du Prénom inccorect");
    }
    if (regMail.test(email) == false || "") {
      alert("Adresse e-mail inccorect");
    }
    if (regMdp.test(mdp) === false || "") {
      alert(
        "Votre mot de passe doit comporter : 8 caractères dont au moins une minuscule, une majuscule et un chiffre"
      );
    }
    if (regTel.test(telNumber) == false || "") {
      alert("Veuillez entrer un numéro de téléphone valide");
    } else {
      newUser = {
        name: name,
        lastName: lastName,
        email: email,
        tel: telNumber,
        mdp: mdp,
      };
      setUserNew(newUser);
    }
  }
  function sendForm() {
    checkForm();
    nav.navigate("Home");
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={inscriptionStyle.container}>
        <Header />
        <View style={inscriptionStyle.content}>
          <Title title={"Inscription"} />
          <View style={inscriptionStyle.form}>
            <FormInput placeholder={"Nom"} findData={getName} />
            <FormInput placeholder={"Prénom"} findData={getLastName} />
          </View>
          <View style={inscriptionStyle.form}>
            <FormInput placeholder={"E-mail"} findData={getEmail} />
            <FormInput placeholder={"Numéro de téléphone"} findData={getTel} />
          </View>
          <View style={inscriptionStyle.form}>
            <FormInput placeholder={"Mot de passe"} findData={getMdp} />
            <FormInput placeholder={"Prénom"} />
          </View>
          <View>
            <TouchableOpacity style={inscriptionStyle.coBtn} onPress={sendForm}>
              <Text style={inscriptionStyle.txt}>ENVOYER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <MenuNav
        connexion={ConnexionOff}
        sos={SosSmallbtn}
        history={HistoryBtn}
        stylebtn={inscriptionStyle.bar}
      />
      <View style={inscriptionStyle.footer}></View>
    </SafeAreaProvider>
  );
}
export default Inscription;
