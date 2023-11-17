import React, { useState } from "react";
import { View, StatusBar, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";

export default function Welcome({ navigation }) {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const login = () => {
    console.log("Entrou");
  };

  const newUser = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Signin" }],
    });
  };

  return (

    <View style={styles.container}>

      <StatusBar
        hidden={true}
      />

      <Text style={styles.title}>GraffWall</Text>

      <View style={styles.containerImgLogin}>
        <Image
          style={styles.imgLogin}
          source={require("../../assets/imgLogin.png")} />
      </View>

      <TextInput placeholder='Email' style={styles.textInput} onChangeText={text => setEmail(text)}></TextInput>

      <TextInput secureTextEntry={true} placeholder='Senha' style={styles.textInput} onChangeText={text => setPassward(text)}></TextInput>

      <TouchableOpacity style={styles.btnInput} onPress={() => navigation.navigate('Home')} >
        <Text style={styles.textoBtnInput}>LOGIN</Text>

      </TouchableOpacity>
      <Text style={styles.linkCadastro} onPress={() => navigation.navigate('Signin')}>Quero me cadastrar</Text>

    </View>



  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },

  title: {
    fontSize: 50,
  },

  containerImgLogin: {
    padding: 30,
    margin: 20,
    borderWidth: 2,
    borderRadius: 100
  },

  imgLogin: {
    width: 100,
    height: 100,
  },

  textInput: {
    borderWidth: 2,
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10
  },


  textoBtnInput: {
    color: 'gray',
    textAlign: 'center'
  },

  btnInput: {
    borderWidth: 2,
    width: '50%',
    height: 40,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center'
  },

  textoBtnInput: {
    color: 'gray',
    textAlign: 'center'
  },

  linkCadastro: {
    padding: 10,
    marginVertical: 20
  },
})
