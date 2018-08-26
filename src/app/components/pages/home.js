import React from 'react';

import HomePageTemplate from '@Templates/home';

import '@Assets/styles/main.scss';
import '@Assets/styles/home.scss';

class HomePage extends React.Component {
    render() {
        return (
            <div className="home-wrapper">
                <HomePageTemplate />
            </div>
        )
    }
}

export default HomePage;