import { styled } from 'styled-components'


export const Container = styled.View`
    flex: 1;
    background-color: #1B3358;
    align-items: center;
    justify-content: center;
`
export const Img = styled.Image`
    height: 150px;
    width: 150px;
    margin-bottom: 5px;
`

export const Box = styled.View`
    height: 300px;
    width: 95%;
    padding: 20px 10px;
    background-color: #fff;
    border-radius: 36px;

    justify-content: center;
    align-items: center;
`

export const Input = styled.TextInput`
    width: 95%;
    height: 65px;
    background-color: #ddd;
padding: 0 10px;
    margin-bottom: 10px;
    font-size: 15px;
    border-radius: 10px;
`

export const ButtonLogin = styled.TouchableOpacity`
width: 50%;
height: 50px;
margin-top: 15px;
border-radius: 36px;
background-color: #7bc26f;

flex-direction: row;
align-items: center;
justify-content: center;
`
export const ButtonLoginText = styled.Text`
color: #fff;
font-weight: bold;
font-size: 20px;
margin-left: 10px;
`
