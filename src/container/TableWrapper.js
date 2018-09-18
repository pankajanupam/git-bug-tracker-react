import React from 'react';
import TableRow from '../component/TableRow';
import PaginationBar from '../component/PaginationBar';

class TableWrapper extends React.Component {
    render() {
        return (
            <table className="grid-container">
                <thead>
                    <tr>
                        <th width="100">#</th>
                        <th>Title</th>
                        <th width="150">Status</th>
                        <th width="150">Number of Comments</th>
                        <th width="150">Last updated time</th>
                        <th width="200">Created By</th>
                    </tr>
                </thead>
                <tbody>
                    <TableRow />
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="6"><PaginationBar /></td>
                    </tr>
                </tfoot>
            </table>
        )
    }
}

export default TableWrapper;