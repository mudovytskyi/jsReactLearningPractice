import React from 'react';
// import axios from 'axios';
import Header from './Header';
import ContestList from './ContestList';

// using history API of HTML5
const pushState = (obj, url) => 
    window.history.pushState(obj, '', url);

// import data from '../testData';
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
        pageHeader: 'Naming Contests',
        // contests: []
        contests: this.props.initialContests
    };

    componentDidMount() {
        // console.log('did Mount');
        // debugger;

        //usually using here ajax searching to check if there any dom to mount
        //ajax...
        // or using timers , listeners for any events
        
        // will do ajax here
        // this.setState({
        //     contests: data.contests
        // });

        //use promises
        // axios.get('/api/contests')
        //     .then(resp => {
        //         // console.log(resp);
        //         this.setState({
        //             contests: resp.data.contests
        //         });
        //     })
        //     .catch(console.error)
    };

    componentWillUnmount() {
        // console.log('will Unmount');
        // debugger;

        // here clean timers, listeners
    };
    
    fetchContest = (contestId) => {
        pushState(
            { currentContestId: contestId},
            `/contest/${contestId}`
        )
    };

    render() {
        return (
            <div className="App" >
                <Header message={this.state.pageHeader} />
                <ContestList 
                onContestClick={this.fetchContest}
                contests={this.state.contests} />
            </div>
        );
    };
}

export default App;