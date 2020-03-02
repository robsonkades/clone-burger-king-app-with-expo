import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const TagContainer = styled(TouchableOpacity)`
  margin: 7px;
  background-color: ${props => (props.selected ? props.color : "transparent")};
  border: 1px solid ${props => props.color};
  border-radius: 5px;
`;

export const Tag = styled.Text`
  padding: 3px;
  font-size: 12px;
  color: ${props => (props.selected ? "#fff" : props.color)};
`;
