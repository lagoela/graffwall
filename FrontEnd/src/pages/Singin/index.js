import React, { useState } from "react";
import { View, Modal, TouchableOpacity, StyleSheet } from "react-native";
import { Button, Input, Text } from "@rneui/themed";
import { Formik } from "formik";
import validationSchema from "../../validations/userRegistrationValidationSchema";
import usuarioService from "../../services/userService";

export default function SignIn({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

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
    <View>
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
          <View>
            <Text h1>Cadastre-se já!</Text>

            <Input
              placeholder="Nome"
              leftIcon={{
                type: "font-awesome",
                name: "user",
              }}
              underlineColorAndroid="transparent"
              onChangeText={handleChange("nome")}
              onBlur={handleBlur("nome")}
              value={values.nome}
            />
            {touched.nome && errors.nome && (
              <Text style={{ color: "red" }}>{errors.nome}</Text>
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
            />
            {touched.sobrenome && errors.sobrenome && (
              <Text style={{ color: "red" }}>{errors.sobrenome}</Text>
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
            />
            {touched.email && errors.email && (
              <Text style={{ color: "red" }}>{errors.email}</Text>
            )}

            <Input
              placeholder="Senha"
              leftIcon={{
                type: "font-awesome",
                name: "lock",
              }}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry={true}
            />
            {touched.password && errors.password && (
              <Text style={{ color: "red" }}>{errors.password}</Text>
            )}

            <Button
              title="Cadastrar"
              buttonStyle={{ backgroundColor: "rgba(39, 39, 39, 1)" }}
              onPress={handleSubmit}
            />
            <Button
              title="voltar"
              titleStyle={{ color: "rgba(1,1,1,1)" }}
              onPress={returnToLogin}
              buttonStyle={{ backgroundColor: "rgba(39, 39, 39, 0)" }}
            />
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
                backgroundColor: "rgba(39, 39, 39, 1)" ,
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
  },
  inputContainer: {
    width: "100%",
    marginTop: 20,
  },
  nameInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
  },
  button: {
    marginTop: 10,
    width: "50%",
  },
});
