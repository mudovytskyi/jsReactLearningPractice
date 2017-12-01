import React from 'react';
import PropTypes from 'prop-types';

const Header = ({message}) => {
    return (
        <h3 className="text-center"> 
            {message}
        </h3>
    );
};

Header.propTypes = {
    message: PropTypes.string,
};

export default Header;


//---------------------------------
// class Header extends React.Component {
//     constructor(message) {
//         super();
//     }
    
//     render() {
//         return  <h3 className="text-center"> 
//                         {message}
//                 </h3>;
//     }
// }