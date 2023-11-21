import React, { useState, useEffect } from "react";
import { View, Modal, TouchableOpacity, StyleSheet, Keyboard } from "react-native";
import { Button, Input, Text } from "@rneui/themed";
import { Formik } from "formik";
import validationSchema from "../../validations/userRegistrationValidationSchema";
import usuarioService from "../../services/userService";

export default function SignIn({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

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

  const returnToLogin = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  const saveUser = (values) => {
    const formattedValues = {
      email: values.email,
      firstName: values.nome,
      lastName: values.sobrenome,
      password: values.password,
    };

    usuarioService
      .cadastrar(formattedValues)
      .then((response) => {
        const titulo = response.data.status ? "Sucesso" : "Erro";
        setModalMessage(response.data.message);
        setModalVisible(true);
      })
      .catch((error) => {
        const titulo = response.data.status ? "Sucesso" : "Erro";
        setModalMessage(response.data.message);
        setModalVisible(true);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <Formik
        initialValues={{ nome: "", sobrenome: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => saveUser(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.container}>
            <View style={styles.formContainer}>
              <Text style={[styles.title, isKeyboardVisible && { opacity: 0 }]}>
                GraffWall
              </Text>

              <Input
                placeholder="Nome"
                leftIcon={{
                  type: "font-awesome",
                  name: "user",
                }}
                onChangeText={handleChange("nome")}
                onBlur={handleBlur("nome")}
                value={values.nome}
                inputContainerStyle={styles.input}
              />
              {touched.nome && errors.nome && (
                <Text style={styles.errorAlert}>{errors.nome}</Text>
              )}

              <Input
                placeholder="Sobrenome"
                leftIcon={{
                  type: "font-awesome",
                  name: "user",
                }}
                onChangeText={handleChange("sobrenome")}
                onBlur={handleBlur("sobrenome")}
                value={values.sobrenome}
                inputContainerStyle={styles.input}
              />
              {touched.sobrenome && errors.sobrenome && (
                <Text style={styles.errorAlert}>{errors.sobrenome}</Text>
              )}

              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                leftIcon={{
                  type: "font-awesome",
                  name: "envelope",
                }}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                inputContainerStyle={styles.input}
              />
              {touched.email && errors.email && (
                <Text style={styles.errorAlert}>{errors.email}</Text>
              )}

              <Input
                placeholder="Password"
                leftIcon={{
                  type: "font-awesome",
                  name: "lock",
                }}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={true}
                inputContainerStyle={styles.input}
              />
              {touched.password && errors.password && (
                <Text style={styles.errorAlert}>{errors.password}</Text>
              )}

              <Button
                title="Cadastrar"
                buttonStyle={{ backgroundColor: "gray" }}
                onPress={handleSubmit}
                containerStyle={styles.button}
              />

              <Button
                title="voltar"
                titleStyle={{ color: "rgba(1,1,1,1)" }}
                onPress={returnToLogin}
                buttonStyle={{ backgroundColor: "rgba(39, 39, 39, 0)" }}
                containerStyle={styles.button}
              />
            </View>
          </View>
        )}
      </Formik>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <Text>{modalMessage}</Text>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
                returnToLogin();
              }}
              style={{
                marginTop: 10,
                padding: 10,
                backgroundColor: "rgba(39, 39, 39, 1)",
                borderRadius: 5,
              }}
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
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 20,
  },
  title: {
    fontSize: 40,
    marginBottom: 40,
  },
  input: {
    marginHorizontal: 5,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10,
  },
  errorAlert: {
    color: "red",
    marginTop:-20,
    paddingBottom:0,
    paddingTop:0,
  },
  button: {
    marginTop: 10,
    width: "50%",
    alignSelf: 'center'
  },
});
