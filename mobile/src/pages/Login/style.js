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
export const ImgInput = styled.View`
width: 100%;
flex-direction: row;
align-items: center;
position: relative;
`
export const Input = styled.TextInput`
    width: 100%;
    height: 65px;
    background-color: #ddd;
padding: 0 10px 0 55px;
    margin-bottom: 10px;
    margin-left: 2px;
    font-size: 17px;
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
