import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Input, Text } from "@rneui/themed";
import { Formik } from "formik";
import validationSchema from "../../validations/userRegistrationValidationSchema";
import usuarioService from "../../services/userService";

export default function SignIn({ navigation }) {
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

        // Alert.alert(titulo, response.data.mensagem);
      })
      .catch((error) => {

        // Alert.alert("Erro", "Houve um erro inesperado");
      });
    console.log(formattedValues);
    returnToLogin();
  };

  return (
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
            <Text h1>Cadastre-se já!</Text>

            <View style={styles.inputContainer}>
              <View style={styles.nameInputContainer}>
                <Input
                  placeholder="Nome"
                  leftIcon={{
                    type: "font-awesome",
                    name: "user",
                  }}
                  onChangeText={handleChange("nome")}
                  onBlur={handleBlur("nome")}
                  value={values.nome}
                  containerStyle={styles.input}
                />
                <Input
                  placeholder="Sobrenome"
                  leftIcon={{
                    type: "font-awesome",
                    name: "user",
                  }}
                  onChangeText={handleChange("sobrenome")}
                  onBlur={handleBlur("sobrenome")}
                  value={values.sobrenome}
                  containerStyle={styles.input}
                />
              </View>
              {touched.nome && errors.nome && (
                <Text style={{ color: "red" }}>{errors.nome}</Text>
              )}
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
                containerStyle={styles.input}
              />
              {touched.email && errors.email && (
                <Text style={{ color: "red" }}>{errors.email}</Text>
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
                containerStyle={styles.input}
              />
              {touched.password && errors.password && (
                <Text style={{ color: "red" }}>{errors.password}</Text>
              )}

              <Button
                title="Cadastrar"
                buttonStyle={{ backgroundColor: "rgba(39, 39, 39, 1)" }}
                onPress={handleSubmit}
                containerStyle={styles.button}
              />
            </View>

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