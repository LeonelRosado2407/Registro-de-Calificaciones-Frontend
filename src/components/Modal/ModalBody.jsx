import React from 'react'
import PropTypes from 'prop-types';

export default function ModalBody({ children, clasName }) {
    return (
        <>
            <div className={clasName}>
                {children}
            </div>
        </>
    )
}
ModalBody.propTypes = {
    children: PropTypes.node.isRequired,
    clasName: PropTypes.string
}
