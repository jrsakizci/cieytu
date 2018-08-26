import React from 'react';

import Heading from '@Atoms/Heading';
import Text from '@Atoms/Text';

const HomePageHeading = () => {
    return (
        <div className="home-content">
            <Heading>Welcome to the Trivia Challenge!</Heading>
            <Text>You will be presented with 10 True or False questions.</Text>
            <Text>Can you score 100%?</Text>
        </div>
    )
}

export default HomePageHeading;