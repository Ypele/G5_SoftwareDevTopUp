import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import * as colors from '../assets/colors'

export const Logo = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  height: 40px;
  user-select: none;
  float:left;
  margin-left:30px;
  margin-top:30px;
`
export const LoadingTag = styled.h1`
width:100%;
height:100%;
text-align:center;
`
export const HeaderDiv = styled.div`
     width:100%;
     background:${colors.ASPHALT_LIGHT};
`
export const ContentDiv = styled.div`
    width:100%;
    background:${colors.HEADER}
`
export const HeaderList = styled.ul`
    height: 40px;
    margin: 0;
    padding: 0;
    padding:20px 0px 0px 10px;
    float:right;
`

export const HeaderLabel = styled.li`
    display: inline-block;
    height: 40px;
    line-height: 40px;
    background-color: #e3e5e5;
    border-radius: 25px 10px 25px 10px;
    padding-left: 20px;
    padding-right: 20px;
    margin-right: 1px;
    ${props => props.className === 'active' && css`
        background-color: #3b97d3;
        color:white;
    `}
    position:relative;
`
export const sLink = styled(Link) `
    text-decoration: none;
    color:inherit;
    padding-left: 20px;
    padding-right: 20px;
     &:hover {
     color:forestgreen;
`