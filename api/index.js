import express from 'express';
import data from '../src/testData';

const router = express.Router();

// router.get('/', (req, res) => {
//     res.send({data: [] });
// });

router.get('/contests', (req, res) => {
    res.send({ contests: data.contests });
});

export default router;