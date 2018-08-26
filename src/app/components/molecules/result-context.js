import React from 'react';

import Plus from '@Atoms/Plus';
import Minus from '@Atoms/Minus';
import Text from '@Atoms/Text';

const ResultPageContext = ({ questions }) => {
    return (
        <div className="result-content">
            <div className="result-items">
                {questions.map(item => {
                    let isAnswerTrue = item.correct_answer === item.answer ? true : false;
                    return <div className={"result-item " + (isAnswerTrue ? 'correct' : 'false')} key={Math.floor(Math.random()*1000000000)}>{isAnswerTrue ? <Plus /> : <Minus />} <Text>{item.question}</Text></div>
                })}
            </div>
        </div>
    )
}


export default ResultPageContext;