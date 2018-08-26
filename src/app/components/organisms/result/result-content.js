import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ResultPageHeading from '@Molecules/result-heading';
import ResultPageContext from '@Molecules/result-context';
import ResultPageButton from '@Molecules/result-button';


class ResultPageContent extends Component {
    constructor(props) {
        super(props);
    }
    goPage(page) {
        const { history } = this.props;
        history.push(page);
    }

    restartExam() {
        this.goPage('/');
    }
    render() {
        const { questions, questionCount, correctAnswers } = this.props;
        return (
            <div className="result-container">
                <ResultPageHeading
                    rightCount={ correctAnswers }
                    questionCount= { questionCount }
                />
                <ResultPageContext
                    questions={ questions }
                />
                <ResultPageButton 
                    onClick={ () => this.restartExam() }
                />
            </div>

        )
    }
}

ResultPageContent.propTypes = {
    questionCount: PropTypes.number,
    questions: PropTypes.array
}
export default ResultPageContent;