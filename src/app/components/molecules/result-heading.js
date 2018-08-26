import React from 'react';

import Heading from '@Atoms/Heading';

const ResultPageHeading = ({ rightCount, questionCount }) => {
    return (
        <div className="result-heading">
            <Heading>You score</Heading>
            <Heading>{rightCount} of {questionCount}</Heading>
        </div>
    )
}


export default ResultPageHeading;