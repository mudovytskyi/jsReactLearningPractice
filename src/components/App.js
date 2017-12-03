import React from 'react';
// import axios from 'axios';
import PropTypes from 'prop-types';

import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';

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
 
    static propTypes = {
        initialData: PropTypes.object.isRequired
    }
    /* // constructor(props) {
    //     super(props);
    //     this.state = { test: 45 };
    // } 
    // OR the same below
    // state = { 
    //     test: 37 
    // }; */
   state = this.props.initialData; 
    // state = { 
    //     // pageHeader: 'Naming Contests',
    //     // contests: []
    //     contests: this.props.initialContests
    // };

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
    
    pageHeader() {
        return (this.state.currentContestId) 
            ? this.currentContest().contestName
            : 'Naming Contests';
    };

    fetchContest = (contestId) => {
        pushState(
            { currentContestId: contestId},
            `/contest/${contestId}`
        );
        //now need to lookup the contest, not only change the router
        // and change it to mongodb interface
        // this.state.contests[contestId]
        // this.setState({
        //    pageHeader: this.state.contests[contestId].contestName,
        //    currentContestId: contestId
        // });
       api.fetchContest(contestId).then(contest => {
           this.setState({
            //    pageHeader: contest.contestName,
               currentContestId: contest.id,
               contests: {
                   ...this.state.contests,
                   [contest.id]: contest
               }
            });
        });
    };
   
    fetchContestList = (contestId) => {
        pushState(
            { currentContestId: null},
            `/`
        );
      
       api.fetchContestList().then(contests => {
           this.setState({
               currentContestId: null,
               contests
            });
        });
    };
    currentContest() {
        return this.state.contests[this.state.currentContestId];
    };

    currentContent() {
        if (this.state.currentContestId) {
            return <Contest 
                contestListClick={this.fetchContestList}
                {...this.currentContest()} />;
        } 
        // else {
            return  <ContestList 
            onContestClick={this.fetchContest}
            contests={this.state.contests} />;
        // }
    }

    render() {
        return (
            <div className="App" >
                {/* <Header message={this.state.pageHeader} /> */}
                <Header message={this.pageHeader()} />
                {/* <ContestList 
                onContestClick={this.fetchContest}
                contests={this.state.contests} /> */}
                {this.currentContent()}
            </div>
        );
    };
}

export default App;