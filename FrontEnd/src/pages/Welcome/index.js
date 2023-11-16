import React, { useState } from "react";
import { View, ImageBackground, StatusBar } from "react-native";
import { Button, Input, Text } from "@rneui/themed";
import styles from "../../../style/mainStyle";
import FormStyles from "../../../style/FormStyle";

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
      <StatusBar hidden={true} />
      <View style={styles.backgroundImage}>
        <ImageBackground
          source={require("../../../images/background.png")}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <View style={FormStyles.container}>
        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          leftIcon={{
            type: "font-awesome",
            name: "envelope",
          }}
          onChange={(value) => setEmail(value)}
        />

        <Input
          placeholder="Senha"
          leftIcon={{
            type: "font-awesome",
            name: "lock",
          }}
          onChange={(value) => setPassword(value)}
          secureTextEntry={true}
        />

        <Button
          title="Entrar"
          buttonStyle={{ backgroundColor: "rgba(39, 39, 39, 1)" }}
          onPress={() => login()}
        />

        <Button
          title="Cadastre-se"
          titleStyle={{ color: "rgba(1,1,1,1)" }}
          onPress={() => newUser({ navigation })}
          buttonStyle={{ backgroundColor: "rgba(39, 39, 39, 0)" }}
        />
      </View>
    </View>
  );
}
