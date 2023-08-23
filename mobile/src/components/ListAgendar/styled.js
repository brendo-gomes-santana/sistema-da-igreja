import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
   width: 100%;
   height: 45px;
   margin-top: 5px;
   background-color: #ddd;
   padding: 0 25px;

   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   border-radius: 10px;
`;
export const Title = styled.Text`
   font-size: 15px;
   font-weight: bold;
`;
