import { Text } from "react-native";
import { Container, TextButton } from "./styles";

export default function Button(props) {
  const { text, onPress } = props || {};

  return (
    <Container onPress={onPress}>
      <TextButton>{text}</TextButton>
    </Container>
  );
}
