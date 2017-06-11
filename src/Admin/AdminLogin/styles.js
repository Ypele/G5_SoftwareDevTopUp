import styled from 'styled-components'

export const LoginWrapper = styled.div`
    margin: 0;
    width: 100%;
    height:auto;
    text-align:center;
    padding:20px;
`
export const LoginAdminMessage = styled.p`
margin:0;
padding-top:10px;
padding-bottom:10px;
color:white;
`
export const LoginButtonInv = styled.button`
margin-top:10px;
border-radius:5px;
border: 1px solid white;
height:40px;
color:white;
background-color:#2C3E50;
&:hover{
    background-color:#34495D;
}
box-sizing: border-box;
`
export const LoginInput = styled.input`
width:100%;
padding:12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
`
export const LoginForm = styled.form`
border-radius: 5px;
background-color: #f2f2f2;
padding: 20px;
width:30%;
margin:0 auto;
`