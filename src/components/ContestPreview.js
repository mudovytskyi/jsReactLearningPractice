import React from 'react';

const ContestPreview = (contest, idx) => (
    <div className="ContestPreview" key={idx}>
        <div>
            {contest.categoryName}
        </div>
        <div>
            {contest.contestName}
        </div>
    </div>
);

export default ContestPreview;