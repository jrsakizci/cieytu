import React from 'react';

import Box from '@Atoms/Box';
import Text from '@Atoms/Text';

const QuestionPageContent = ({ children, currentQuestion, totalQuestion }) => {
    return (
        <div className="question-content">
            <Box>{ children }</Box>
            <Text>{currentQuestion} of {totalQuestion}</Text>
        </div>
    )
}


export default QuestionPageContent;