import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: 0 25px;
    align-items: center;
`;
export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #1B3358;

    margin-top: 25px;
`;
export const Tipo = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #1B3358;
`;

export const Email = styled.Text`
    margin:30px 0; 
    font-size: 18px;
`;
export const Button = styled.TouchableOpacity`
    background-color: ${props => props.color};
    width: 100%;
    margin-bottom: 20px;
    height: 50px;

    align-items: center;
    justify-content: center;

    border-radius: 10px;
`;
export const TitleButton = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`;