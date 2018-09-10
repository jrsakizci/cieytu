import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import QuestionPageHeading from '@Molecules/question-heading';
import QuestionPageContext from '@Molecules/question-context';
import QuestionPageButtons from '@Molecules/question-buttons';

import Loading from '@Atoms/Loading';

class QuestionPageContent extends Component {
    render() {
        const { currentQuestion, questions, isLoading, error, isExamStarted } = this.props;
        return (
            <div className="content-container">
                {!isExamStarted ?
                    <Link to="/">
                        Go home
                    </Link>
                    :
                    isLoading && !error ?
                        <Loading /> :
                        <Fragment>
                            <QuestionPageHeading>{questions[currentQuestion - 1].category}</QuestionPageHeading>
                            <QuestionPageContext currentQuestion={currentQuestion}
                                totalQuestion={questions.length}>
                                {questions[currentQuestion - 1].question}
                            </QuestionPageContext>
                            <QuestionPageButtons click={(answer) => this.props.answer(answer)} />
                        </Fragment>
                }
            </div>

        )
    }
}
QuestionPageContent.defaultProps = {
    isLoading: true,
    error: false
}
QuestionPageContent.propTypes = {
    currentQuestion: PropTypes.number,
    questions: PropTypes.array,
    isExamStarted: PropTypes.bool,
    updateAnswers: PropTypes.func,
    isLoading: PropTypes.bool.isRequired,
    updateCorrectAnswers: PropTypes.func,
    error: PropTypes.bool,
    answer: PropTypes.func,
    goPage: PropTypes.func,
    nextQuestion: PropTypes.func
}
export default QuestionPageContent;