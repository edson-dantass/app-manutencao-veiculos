import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Signin from "./screens/Signin";
import Home from "./screens/Home";
import Sobre from "./screens/Sobre";

const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={{ headerBackTitle: "Voltar", title: "Sobre" }}
        />
        {/*<Stack.Screen
          name="InsertProduct"
          component={InsertProduct}
          options={{ headerBackTitle: "Voltar", title: "Novo Produto" }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
