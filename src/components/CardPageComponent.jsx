import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";



import PropTypes from 'prop-types';

export default function CardPageComponent({ children }) {
    return (
        <div className="w-full min-h-screen bg-black flex flex-col items-center">
            <NavbarComponent />
            <div className="w-full max-h-full px-5 md:px-10 pb-10">
                <div className="w-full bg-background rounded-t-lg p-5">
                    {children}
                </div>
                <FooterComponent />
            </div>
        </div>
    );
}

CardPageComponent.propTypes = {
    children: PropTypes.node.isRequired,
};

