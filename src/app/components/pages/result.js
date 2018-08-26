import React from 'react';

import ResultPageTemplate from '@Templates/result';

import '@Assets/styles/main.scss';
import '@Assets/styles/home.scss';

class ResultPage extends React.Component {
    render() {
        return (
            <div className="result-wrapper">
                <ResultPageTemplate />
            </div>
        )
    }
}

export default ResultPage;