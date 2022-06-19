import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinkSigin } from "./styles";
import React from "react";
import Button from "../../components/Button";
import {
  Container,
  Subtitle,
  TitleLargeBold,
  InputField,
  TextInputComponent,
  Form,
  Label,
} from "../../components/Styles";

export default function Login(props) {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const { navigation } = props;

  return (
    <Container style={{ marginTop: 150 }}>
      <TitleLargeBold>Entrar</TitleLargeBold>
      <Subtitle>Olá, seja bem vindo, efetue seu login</Subtitle>
      <Form>
        <InputField>
          <Label>Email</Label>
          <TextInputComponent
            onChangeText={(value) => setEmail(value)}
            value={email}
            placeholder="Digite seu email"
            keyboardType="email-address"
          />
        </InputField>
        <InputField>
          <Label>Senha</Label>
          <TextInputComponent
            onChangeText={(value) => setSenha(value)}
            value={senha}
            placeholder="Digite sua senha"
            keyboardType="default"
          />
        </InputField>
        <Button
          text="Entrar"
          onPress={() => {
            console.log({ email, senha });
            navigation.navigate("Home");
          }}
        />
        <LinkSigin>
          <Text>
            Não possui uma conta?
            <Text
              onPress={() => navigation.navigate("Signin")}
              style={{ color: "#DEA330", textDecorationColor: "#DEA330" }}
            >
              {" "}
              Cadastra-se
            </Text>
          </Text>
        </LinkSigin>
      </Form>
    </Container>
  );
}
