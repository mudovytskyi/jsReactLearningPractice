import React from 'react';

const ContestPreview = (contest, idx) => (
    <div className="ContestPreview" key={idx}>
        <div className="category-name">
            {contest.categoryName}
        </div>
        <div className="contest-name">
            {contest.contestName}
        </div>
    </div>
);

export default ContestPreview;