import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import QuestionPageHeading from '@Molecules/question-heading';
import QuestionPageContext from '@Molecules/question-context';
import QuestionPageButtons from '@Molecules/question-buttons';

import Loading from '@Atoms/Loading';

class QuestionPageContent extends Component {
    answer(answer) {
        const { answerQuestion, currentQuestion, questions, updateAnswers, correctAnswers } = this.props;

        let payload = {
            id: currentQuestion - 1,
            data: answer
        };
        answerQuestion(payload);

        if (questions[payload.id].correct_answer == answer) {
            updateAnswers(correctAnswers + 1);
        }

        this.nextQuestion();
    }
    nextQuestion() {
        const { changeCurrentQuestion, currentQuestion, questionCount, } = this.props;
        if (currentQuestion !== questionCount) {
            changeCurrentQuestion(currentQuestion + 1);
        } else if (currentQuestion === questionCount) {
            this.goPage('/results');
        } else {
            return;
        }
    }
    goPage(page) {
        const { history } = this.props;
        history.push(page);
    }
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
                            <QuestionPageButtons click={(answer) => this.answer(answer)} />
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
    error: PropTypes.bool
}
export default QuestionPageContent;