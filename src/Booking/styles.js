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

export const TableHeader = styled(Table.Header) `
    padding: 15px;
    text-align: left;
    border: 1px solid white;
`

export const TableData = styled(Table.Cell) `
    padding: 15px;
    text-align: left;
    border: 1px solid white;
    &:hover {
   background-color: green;
   color:white;
}
`

export const TableHeaderCell = styled(Table.HeaderCell) `
    padding: 15px;
    text-align: left;
    border: 1px solid white;
   &:hover {
   background-color: royalblue;
   color:white;
}
`