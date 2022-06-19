import { View } from "react-native";
import { Container, SectionTitle } from "../../components/Styles";
import {
  Header,
  HeaderActions,
  Menu,
  MenuItem,
  MenuItemText,
  SlideImage,
  SliderScroll,
  UserNameText,
  WelcomeText,
} from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { menuList, veiculosList } from "../../Utils/mock";

export default function Home(props) {
  const { navigation } = props;

  return (
    <>
      <Container>
        <Header>
          <View>
            <WelcomeText>Olá, bem vindo</WelcomeText>
            <UserNameText>Edson Dantas</UserNameText>
          </View>
          <HeaderActions>
            <Ionicons
              name="help-circle-outline"
              size={26}
              color="#222528"
              style={{ marginRight: 10 }}
              onPress={() => navigation.navigate("Sobre")}
            />
            <Ionicons
              name="exit-outline"
              size={26}
              color="#222528"
              onPress={() => navigation.navigate("Login")}
            />
          </HeaderActions>
        </Header>
        <SectionTitle style={{ marginBottom: 18 }}>Veículos</SectionTitle>
      </Container>
      <SliderScroll>
        {veiculosList.map((item) => (
          <SlideImage key={item.id} source={{ uri: item.url }} />
        ))}
      </SliderScroll>
      <Menu>
        <SectionTitle style={{ marginBottom: 18 }}>Serviços</SectionTitle>
        {menuList.map((item) => (
          <MenuItem key={item.id}>
            <MenuItemText>{item.name}</MenuItemText>
            <Ionicons
              name="ios-arrow-forward-outline"
              size={22}
              color="#DEA330"
              onPress={() => navigation.navigate("Login")}
            />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
