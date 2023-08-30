import styled from 'styled-components/native';


export const Container = styled.View`
   margin-top: 25px;
   flex: 1;
`;
export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;
export const Button = styled.TouchableOpacity`
   background-color: #ddd;
   padding: 10px;
   border-radius: 100px;
`;
export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;

export const Section = styled.View`
   flex: 2;
   padding: 20px;
`;

export const Infor = styled.Text`
   padding-bottom: 5px;
   font-size: 16.5px;
`;
export const Titulo = styled.Text`
   font-weight: bold;
`;

export const Descricao = styled.Text`
   margin: 15px 0;
   font-size: 16.5px;
`;

export const TituloLouvor = styled.Text`
   font-size: 18px;
   font-weight: bold;
   margin: 15px 0;

`;