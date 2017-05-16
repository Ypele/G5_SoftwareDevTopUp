import styled,{css} from 'styled-components'
import {Link} from 'react-router-dom'
export const Logo = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  height: 40px;
  user-select: none;
`

export const HeaderDiv = styled.div`
     display:inline-flex;
   
`
export const HeaderList = styled.ul`
    height: 40px;
    margin: 0;
    padding: 0;
    padding:20px 0px 0px 10px;
    
`
export const HeaderLabel = styled.li`
    display: inline-block;
    height: 40px;
    line-height: 40px;
    background-color: #e3e5e5;
    border-radius: 5px 5px 0px 0px;
    padding-left: 20px;
    padding-right: 20px;
    margin-right: 1px;
    ${props => props.className === 'active' && css`
        background-color: #3b97d3;
        color:white;
    `}
    position:relative;
`
export const sLink = styled(Link)`
text-decoration: none;
color:inherit;
`