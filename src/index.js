import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
/* ReactDOM.render(
    React.createElement('h2', null, 'Hello React'),
    document.getElementById('root')
);-----------------  */



/* const  color = Math.random() < 0.5 ? 'green' : 'red';

ReactDOM.render(
   <h3 style={{color: color}} 
        className="text-center"> 
       New React elemnt by JSX!! -- {Math.random()}
    </h3>,
    document.getElementById('root')
);  --------------------*/


/* 
const App = () => {
    return (
        <h3 className="text-center"> 
            New React Component
        </h3>
    );
};

ReactDOM.render(
   <App />,
    document.getElementById('root')
);------------------------------ 
 */



/* const App = (props) => {
    return (
        <div>
            <h3 className="text-center"> 
                    {props.headerMessage}<br/>
                    {props.headerMessage2}<br/>
                    {props.headerMessage3}
                    
            </h3>
            <div>
                ...
            </div>
        </div>
    );
}; 

App.propTypes = {
    headerMessage: PropTypes.string,
    headerMessage2: PropTypes.number.isRequired,
    headerMessage3: PropTypes.string
};

App.defaultProps = {
    headerMessage3: "Hi"
};
------------------------
*/

/* const Header = ({message}) => {
    return (
        <h3 className="text-center"> 
            {message}
        </h3>
    );
};

Header.propTypes = {
    message: PropTypes.string,
};
--------------------------------
 */
/* 
import Header from './components/Header';
const App = () => {
    return (
        <div className="App" >
           <Header message="Naming Contest" />
            <div>
               TODO
            </div>
        </div>
    );
};
----------------
 */
// import data from './testData';
// console.log(data);

import App from './components/App';

ReactDOM.render( 
    // <App contests={data.contests} /> ,
    <App /> ,
    document.getElementById('root')
);

// setTimeout(() => {
//     ReactDOM.render( 
//         <h1>...UPDATING..</h1> ,
//         document.getElementById('root')
//     );
// }, 4000);