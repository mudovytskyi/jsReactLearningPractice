import express from 'express';
import data from '../src/testData';

const router = express.Router();

const contests = data.contests.reduce((obj, contest) => {
    obj[contest.id] = contest;
    return obj;
}, {});

// router.get('/', (req, res) => {
//     res.send({data: [] });
// });

router.get('/contests', (req, res) => {
    console.log(req.url);
    // res.send({ contests: data.contests });
    // now change the list of objects to an object response
    res.send({
        // each time need to generate this list
        // contests: data.contests.reduce((obj, contest) => {
        //     obj[contest.id] = contest;
        //     return obj;
        // }, {})

        // reusing list, all time exists, created only once
        contests: contests

    });
});

router.get('/contests/:contestId', (req, res) => {
    console.log(`ID: ${req.url}`);
    //req.params.contestId
    let contest = contests[req.params.contestId];
    contest.description = 'Some fake description';
    res.send(contest);
});

export default router;