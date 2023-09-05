import styled from 'styled-components/native';


export const Container = styled.View`
    flex: 1;
    padding: 25px;
    background-color: #000000;

    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 25px;
    color: #fff;
    font-weight: bold;
    margin-bottom: 20px;
`;
export const Input = styled.TextInput`
    width: 100%;
    height: 50px;
    background-color: #fff;
    color: #000;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 0 10px;
    font-size: 15px;
`;

export const BaseButton = styled.View`
    width: 100%;
    flex-direction: row;
    margin-top: 25px;
    justify-content: space-around;
`;
export const Button = styled.TouchableOpacity`
    background-color: ${props => props.color};
    width: 120px;
    height: 45px;
    border-radius: 5px;

    align-items: center;
    justify-content: center;
`;
export const TitleButton = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #fff;
`;
