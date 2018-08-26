import React from 'react';
import Button from '@Atoms/Button';

const HomePageButton = ({ onClick }) => {
    return (
        <div className="home-button">
            <Button type="primary" click={onClick}>BEGIN</Button>
        </div>
    )
}

export default HomePageButton;