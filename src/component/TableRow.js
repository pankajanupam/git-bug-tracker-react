import React, { Component } from 'react';
import { API_CALL_GET_BUG_LIST, BUG_LIST_RECEIVED } from "../constants";
import { connect } from 'react-redux';

class TableRow extends Component {

    constructor(props) {
        super(props);
        this.props.getBugList();
    }

    render() {
        console.log(this.props.bugList);
        return (
            <tbody>
                {this.props.bugList && this.props.bugList.map((item, index) => (
                    <tr key={index}>
                        <td>{item.title}</td>
                        <td>{item.state}</td>
                        <td>{item.number}</td>
                        <td>{item.comments}</td>
                        <td>{item.updated_at}</td>
                        <td>{item.user.login}</td>
                    </tr>
                ))}
            </tbody>
        )
    }
}

const mapStateToProps = state => {
    return {
        bugList: state.bugList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getBugList: () =>
            dispatch({
                type: BUG_LIST_RECEIVED
            })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableRow);