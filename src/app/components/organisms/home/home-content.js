import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HomePageHeading from '@Molecules/home-heading';
import HomePageButton from '@Molecules/home-button';

class HomePageContent extends Component {

    startExam(e) {
        const { history, onStartExam } = this.props;
        onStartExam(e);
        history.push('/questions');
    }
    render() {
        return (
            <div className="content-container">
                <HomePageHeading />
                    <HomePageButton
                        onClick={(e) => this.startExam(e)}
                    />
            </div>
        )
    }
}

HomePageContent.propTypes = {
    onStartExam: PropTypes.func
}
export default HomePageContent;