import React from 'react';
import { BrowserRouter, Route, Switch as RouterSwitch } from 'react-router-dom';

import HomePage from '@Pages/home';
import QuestionPage from '@Pages/question';
import ResultPage from '@Pages/result';

const Routes = () => {
    return (
        <BrowserRouter>
            <RouterSwitch>
                <Route exact path="/" component={HomePage} />
                <Route path="/questions" component={QuestionPage} />
                <Route path="/results" component={ResultPage} /> 
            </RouterSwitch>
        </BrowserRouter>
    );
}

//  
export default Routes;