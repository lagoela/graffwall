import React from "react";
import { View } from "react-native";
import { Button, Input, Text } from "@rneui/themed";
import { Formik } from "formik";
import validationSchema from "../../validations/userRegistrationValidationSchema";
import usuarioService from "../../services/userService";

export default function SignIn({ navigation }) {
  const returnToLogin = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Welcome" }],
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

        //Alert.alert(titulo, response.data.mensagem)
      })
      .catch((error) => {
        //Alert.alert("Erro", "Houve um erro inesperado")
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
        <View>
          <Text h1>Cadastre-se já!</Text>

          <Input
            placeholder="Nome"
            leftIcon={{
              type: "font-awesome",
              name: "user",
            }}
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
  );
}
