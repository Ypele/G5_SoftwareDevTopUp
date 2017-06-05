import styled from 'styled-components'
import { Table } from 'semantic-ui-react'

export const BookingDiv = styled.div`
margin:50px;
border:3px royalblue;
border-radius:5px;
background:royalblue;
color:white;
`
export const BookingTable = styled(Table) `
border:3px royalblue;
border-radius:5px;
background:#efefef;
color:black;
width: 100%;
border-collapse: collapse;
`

export const TableHeader = styled.div`
    padding: 15px;
    text-align: center;
    width:100%;
`

export const HeaderButton= styled.button`
    border: 1px solid white;
    border-radius: 3px;
    background: white;
    color:royalblue;
    padding-left:5px;
    padding-right:5px;
    margin:1px;
`
export const HeaderLabel = styled.label`
    font-size: 20px;
    color:white;
`

