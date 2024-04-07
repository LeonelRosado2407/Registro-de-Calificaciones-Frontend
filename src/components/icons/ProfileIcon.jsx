import PropTypes from 'prop-types';

export default function ProfileIcon({className,color}) {
    const colors = {
        'info' : '#227C9D',
        'success': '#17C3B2',
        'warning': '#FFCB77',
        'danger': '#FE6D73',
        'background': '#FEF9EF',
        'black' : '#293241'
    };

    return (
        <div className={className}>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill={colors[color]?? 'currentColor'} className="w-6 h-6 p-1 m-1">
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
            </svg>
        </div>
    );
}

ProfileIcon.propTypes = {
    className: PropTypes.string,
    color : PropTypes.string,
};

