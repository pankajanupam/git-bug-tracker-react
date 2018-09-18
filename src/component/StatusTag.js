import React from 'react';

const baseStyle = {
    color: '#fff',
    fontSize: '0.8em',
    borderRadius: '5px',
    padding: '5px 10px',
    textTransform: "uppercase"
}

const styleGuide = {
    "open": {
        ...baseStyle,
        backgroundColor: '#008000',
    },
    "close": {
        ...baseStyle,
        backgroundColor: '#FF0000',
    }
}

const StatusTag = (props) => {
    const { status } = props;

    return (
        <span style={styleGuide[status]}>{status}</span>
    )
}

export default StatusTag;