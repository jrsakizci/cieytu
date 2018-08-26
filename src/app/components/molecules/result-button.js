import React from 'react';
import Button from '@Atoms/Button';

const ResultPageButton = ({ onClick }) => {
    return (
        <div className="result-button">
            <Button type="primary" click={onClick}>PLAY AGAIN?</Button>
        </div>
    )
}

export default ResultPageButton;