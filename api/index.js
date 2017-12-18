import express from 'express';
// import data from '../src/testData';

import {MongoClient} from 'mongodb';
import assert from 'assert';
import config from '../config';
import Contest from '../src/components/Contest';

const router = express.Router();

// const contests = data.contests.reduce((obj, contest) => {
//     obj[contest.id] = contest;
//     return obj;
// }, {});

let mdb;
MongoClient.connect(config.mongodbUri, (err, db) => {
    assert.equal(null, err);

    mdb = db;
});
// router.get('/', (req, res) => {
//     res.send({data: [] });
// });

router.get('/contests', (req, res) => {
    // console.log(req.url);
    // res.send({ contests: data.contests });
    // now change the list of objects to an object response
    /* res.send({
        // each time need to generate this list
        // contests: data.contests.reduce((obj, contest) => {
        //     obj[contest.id] = contest;
        //     return obj;
        // }, {})

        // reusing list, all time exists, created only once
        contests: contests

    }); */
    let contests = {};
    mdb.collection('contests').find({})
        .project({
            id: 1,
            categoryName: 1,
            contestName: 1
        })
        .each((err, contest) => {
            assert.equal(null, err);
            if (!contest) { // no more contests
                res.send({contests});
                return;
            }
            contests[contest.id] = contest;
        });
});

router.get('/names/:nameIds', (req, res) => {
    const nameIds = req.params.nameIds.split(',').map(Number);
    let names = {};
    mdb.collection('names').find({ id: {$in: nameIds }})
        .each((err, name) => {
            assert.equal(null, err);
            if (!name) { // no more names
                res.send({names});
                return;
            }
            names[name.id] = name;
        });
});

router.get('/contests/:contestId', (req, res) => {
   /*  console.log(`ID: ${req.url}`);
    //req.params.contestId
    let contest = contests[req.params.contestId];
    contest.description = 'Some fake description';
    res.send(contest); */

    mdb.collection('contests')
    .findOne({ id: Number(req.params.contestId)})
    .then(contest => res.send(contest))
    .catch(console.error);
});

export default router;