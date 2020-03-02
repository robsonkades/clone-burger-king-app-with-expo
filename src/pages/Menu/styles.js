import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props => props.backgroundColor};
`;

export const Title = styled.Text`
  font-size: 22px;
  margin-top: 5px;
  color: ${props => props.color}
  font-family: space-mono;
`;

export const ImageItem = styled.Image`
  margin: 5px;
  margin-left: 15px;
  margin-right: 15px;
  width: 50px;
  height: 50px;
`;

export const Item = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;
