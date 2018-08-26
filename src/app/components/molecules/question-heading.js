import React from 'react';

import Heading from '@Atoms/Heading';

const QuestionPageHeading = ({ children }) => {
    return (
        <div className="question-heading">
            <Heading>{ children }</Heading>
        </div>
    )
}


export default QuestionPageHeading;