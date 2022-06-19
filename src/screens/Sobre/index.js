import { Text } from "react-native";
import { Container, SectionTitle, Subtitle } from "../../components/Styles";

export default function Sobre() {
  return (
    <Container style={{ marginTop: 20 }}>
      <SectionTitle style={{ marginTop: 40 }}>Sobre</SectionTitle>
      <Text style={{ marginTop: 20 }}>-- App Chave de roda --</Text>
      <Subtitle>Endereço: Rua dos Prazeres N° 229</Subtitle>
      <Subtitle>Conjunto Ceará Fortaleza - CE</Subtitle>

      <SectionTitle style={{ marginTop: 80 }}>Equipe</SectionTitle>
      <Subtitle>Edson Dantas - Matrícula: 202001584536</Subtitle>
      <Subtitle>Maria Ribeiro - Matrícula: 202001584536</Subtitle>
      <Subtitle>Robson Ferreira - Matrícula: 202001541731</Subtitle>
    </Container>
  );
}
