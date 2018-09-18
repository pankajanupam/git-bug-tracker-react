import React from 'react';
import { connect } from 'react-redux';
import { API_CALL_GET_BUG_LIST } from '../constants/actions';
import StatusTag from './StatusTag';
import UserTag from './UserTag';

class TableRow extends React.Component {

    constructor(props) {
        super(props);
        this.props.getBugList();
    }

    render() {
        const { bugList } = this.props;

        return (
            (bugList && bugList.map(item =>
                <tr key={item.id}>
                    <td>{item.title}</td>
                    <td><StatusTag status={item.state} /></td>
                    <td>{item.number}</td>
                    <td>{item.comments}</td>
                    <td>{item.updated_at}</td>
                    <td><UserTag user={item.user} /></td>
                </tr>
            )) || <tr><td className="text-center" colSpan="6"> <strong>Fetching Data ... </strong></td></tr>
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
                type: API_CALL_GET_BUG_LIST
            })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableRow);