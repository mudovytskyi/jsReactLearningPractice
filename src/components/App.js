import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

// simple stateless component
// const App = () => {
//     return (
//         <div className="App" >
//            <Header message="Naming Contest" />
//             <div>
//                TODO
//             </div>
//         </div>
//     );
// };

// when need to introduce states or component lifecycle
class App extends React.Component {
    /* // constructor(props) {
    //     super(props);
    //     this.state = { test: 45 };
    // } 
    // OR the same below
    // state = { 
    //     test: 37 
    // }; */
    
    state = { 
        pageHeader: 'Naming Contests' 
    };

    componentDidMount() {
        // console.log('did Mount');
        // debugger;

        //usually using here ajax searching to check if there any dom to mount
        //ajax...
        // or using timers , listeners for any events
        
    };

    componentWillUnmount() {
        // console.log('will Unmount');
        // debugger;

        // here clean timers, listeners
    };

    render() {
        return (
            <div className="App" >
                <Header message={this.state.pageHeader} />
                <div>
                    <ContestPreview {...this.props.contests[0]} />
                </div>
            </div>
        );
    };
}

export default App;