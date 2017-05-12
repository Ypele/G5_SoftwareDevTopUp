import React, { Component } from 'react';
// import BookingItem from './BookingItem'
import { Icon, Table } from 'semantic-ui-react'
import * as s from './styles'

// const initialState ={
//     tableRows:[{bookID:0,name:"0test"},{bookID:1,name:"1test"}]
// }


class BookingList extends Component {
    render() {
        return (
            <s.BookingDiv>
                <s.BookingTable celled>
                    <s.TableHeader>
                        <Table.Row>
                            <s.TableHeaderCell>Name</s.TableHeaderCell>
                            <s.TableHeaderCell>Status</s.TableHeaderCell>
                            <s.TableHeaderCell>Notes</s.TableHeaderCell>
                        </Table.Row>
                    </s.TableHeader>

                    <Table.Body>
                        <Table.Row>
                            <s.TableData>No Name Specified</s.TableData>
                            <s.TableData>Unknown</s.TableData>
                            <s.TableData negative>None</s.TableData>
                        </Table.Row>
                        <Table.Row positive>
                            <s.TableData>Jimmy</s.TableData>
                            <s.TableData>
                                <Icon name='checkmark' />
                                Approved
                            </s.TableData>
                            <s.TableData>None</s.TableData>
                        </Table.Row>
                        <Table.Row>
                            <s.TableData>Jamie</s.TableData>
                            <s.TableData>Unknown</s.TableData>
                            <s.TableData positive>
                                <Icon name='close' />
                                Requires call
                            </s.TableData>
                        </Table.Row>
                        <Table.Row negative>
                            <s.TableData>Jill</s.TableData>
                            <s.TableData>Unknown</s.TableData>
                            <s.TableData>None</s.TableData>
                        </Table.Row>
                    </Table.Body>
                </s.BookingTable>
            </s.BookingDiv>
        );
    }
}

export default BookingList;