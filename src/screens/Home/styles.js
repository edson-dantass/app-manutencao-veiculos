import styled from "styled-components/native";

export const Header = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 80px;
`;
export const HeaderActions = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
export const WelcomeText = styled.Text`
  color: #818489;
  font-size: 14px;
`;
export const UserNameText = styled.Text`
  color: #222528;
  font-size: 20px;
  font-weight: 600;
`;

export const SliderScroll = styled.ScrollView.attrs({
  horizontal: true,
})`
  padding-left: 28px;
`;

export const SlideImage = styled.Image`
  width: 180px;
  height: 220px;
  border-radius: 8px;
  margin-right: 12px;
`;
export const Menu = styled.ScrollView`
  margin-top: 22px;
  padding: 0 28px;
`;
export const MenuItem = styled.TouchableOpacity`
  flex: 1;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  padding: 14px;
  margin-bottom: 14px;
  align-items: center;
`;
export const MenuItemText = styled.Text`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  color: #222528;
`;
