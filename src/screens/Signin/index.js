import { Text } from "react-native";
import { LinkBack } from "./styles";
import React from "react";
import Button from "../../components/Button";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Container,
  Subtitle,
  TitleLargeBold,
  InputField,
  TextInputComponent,
  Form,
  Label,
} from "../../components/Styles";

export default function Signin(props) {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [repetirSenha, setRepetirSenha] = React.useState("");

  const { navigation } = props;

  return (
    <Container style={{ marginTop: 150 }}>
      <TitleLargeBold>Cadastro</TitleLargeBold>
      <Subtitle>Olá, seja bem vindo ao seu cadastro</Subtitle>
      <Form>
        <InputField>
          <Label>Email</Label>
          <TextInputComponent
            onChangeText={(value) => setEmail(value)}
            value={email}
            placeholder="Crie seu email"
            keyboardType="email-address"
          />
        </InputField>
        <InputField>
          <Label>Senha</Label>
          <TextInputComponent
            onChangeText={(value) => setSenha(value)}
            value={senha}
            placeholder="Crie uma nova senha"
            keyboardType="default"
          />
        </InputField>
        <InputField>
          <Label>Repetir Senha</Label>
          <TextInputComponent
            onChangeText={(value) => setRepetirSenha(value)}
            value={repetirSenha}
            placeholder="Repetir senha"
            keyboardType="default"
          />
        </InputField>
        <Button text="Entrar" onPress={() => {}} />
        <LinkBack>
          <Ionicons name="arrow-back-outline" size={24} color="#DEA330" />
          <Text onPress={() => navigation.navigate("Login")}>
            Já possuo cadastro
          </Text>
        </LinkBack>
      </Form>
    </Container>
  );
}
