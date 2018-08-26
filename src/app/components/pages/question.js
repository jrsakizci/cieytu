import React from 'react';

import QuestionPageTemplate from '@Templates/question';

import '@Assets/styles/main.scss';
import '@Assets/styles/home.scss';

class QuestionPage extends React.Component {
    render() {
        return (
            <div className="question-wrapper">
                <QuestionPageTemplate />
            </div>
        )
    }
}

export default QuestionPage;