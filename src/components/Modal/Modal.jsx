import React, { useEffect } from 'react'
import PropTypes from 'prop-types';



export default function Modal({ open, children, onClose ,size}) {
    const Size = {
        sm: 'max-w-screen-sm w-[540px]',
        md: 'max-w-screen-md w-[720px]',
        lg: 'max-w-screen-lg w-[960px]',
        xl: 'max-w-screen-xl w-[1140px]',
    };
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest('.bg-background')) {
                onClose();
            }
        };

        if (open) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [open, onClose]);

    if (!open) return null;

  return (
    <>
        <div className="fixed inset-0 bg-gray-700 bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className={Size[size] ? Size[size] : 'w-[540px]'  + ' flex flex-col'} >
                <div className="bg-background rounded-lg p-5">
                    {children}
                </div>
            </div>

        </div>
    </>
  )
}
Modal.propTypes = {
    open: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func,
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
}
