import React from 'react'
import PropTypes from 'prop-types';

export default function ModalHeader({children, className}) {
    return (
        <>
            <div className={className}>
                {children}
            </div>
        </>
    )
}

ModalHeader.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};
