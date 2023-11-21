import React, { useState, useEffect } from "react";
import usuarioService from "../../services/userService";
import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
  Modal,
} from "react-native";

export default function Login({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const closeModal = () => {
    setModalVisible(false);
    setModalMessage(''); // Limpa a mensagem do modal
    setEmail(''); // Limpa o valor do email
    setPassword(''); // Limpa o valor da senha
  };

  const login = (email, password) => {
    const formattedValues = {
      email: email,
      password: password,
    };
    setIsLoading(true);
    usuarioService
      .logIn(formattedValues)
      .then((response) => {
        const titulo = response.data.status ? "Sucesso" : "Erro";
        setIsLoading(false);
        navigation.reset({
          index: 0,
          routes: [{ name: "TabBar" }],
        });
      })
      .catch((error) => {
        setIsLoading(false);
        setModalMessage("Email ou login inválido. Tente novamente");
        setModalVisible(true);
      });
    console.log(formattedValues);
  };

  const newUser = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <Text style={[styles.title, isKeyboardVisible && { opacity: 0 }]}>
        GraffWall
      </Text>

      <View style={styles.containerImgLogin}>
        <Image
          style={styles.imgLogin}
          source={require("../../assets/imgLogin.png")}
        />
      </View>
      <TextInput
        placeholder="Email"
        style={styles.textInput}
        onChangeText={(text) => setEmail(text)}
      ></TextInput>

      <TextInput
        secureTextEntry={true}
        placeholder="Senha"
        style={styles.textInput}
        onChangeText={(text) => setPassword(text)}
      ></TextInput>
      {isLoading && <ActivityIndicator />}

      {!isLoading && (
        <TouchableOpacity
          style={styles.btnInput}
          onPress={() => login(email, password)}
        >
          <Text style={styles.textoBtnInput}>LOGIN</Text>
        </TouchableOpacity>
      )}
      <Text
        style={styles.linkCadastro}
        onPress={() => navigation.navigate("Signin")}
      >
        Quero me cadastrar
      </Text>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>{modalMessage}</Text>
            <TouchableOpacity
              onPress={closeModal}
              style={styles.modalButton}
            >
              <Text style={{ color: "white" }}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 50,
  },

  containerImgLogin: {
    padding: 30,
    margin: 20,
    borderWidth: 2,
    borderRadius: 100,
  },

  imgLogin: {
    width: 100,
    height: 100,
  },

  textInput: {
    borderWidth: 2,
    width: "100%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10,
  },

  textoBtnInput: {
    color: "gray",
    textAlign: "center",
  },

  btnInput: {
    borderWidth: 2,
    width: "50%",
    height: 40,
    borderRadius: 10,
    backgroundColor: "white",
    justifyContent: "center",
  },

  textoBtnInput: {
    color: "gray",
    textAlign: "center",
  },

  linkCadastro: {
    padding: 10,
    marginVertical: 20,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },

  modalButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "rgba(39, 39, 39, 1)",
    borderRadius: 5,
  },
});
