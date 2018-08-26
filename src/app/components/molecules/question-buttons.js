import React from 'react';
import Button from '@Atoms/Button';

const QuestionPageButtons = ({ click }) => {
    return (
        <div className="question-buttons">
            <Button type="secondary" click={(answer) => click("True")}>TRUE</Button>
            <Button type="secondary" click={(answer) => click("False")}>FALSE</Button>
        </div>
    )
}


export default QuestionPageButtons;