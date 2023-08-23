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

export const Section = styled.ScrollView`
   flex: 2;

`;
