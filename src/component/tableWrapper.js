import React, { Component } from 'react';
import TableRow from './TableRow';

class TableWrapper extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th >Title</th>
                        <th width="150">Status</th>
                        <th width="150">Number/#</th>
                        <th width="150">Number of Comments</th>
                        <th width="150">Last updated time</th>
                        <th width="150">Created By</th>
                    </tr>
                </thead>
                    <TableRow />
            </table>
        )
    }
}

export default TableWrapper;