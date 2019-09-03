import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import Inicio from './pages/Inicio';
import Sobre from './pages/Sobre';
import Agenda from './pages/Agenda';

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Inicio} />
            <Route exact path="/sobre" component={Sobre} />
            <Route exact path="/agenda" component={Agenda} />
        </Switch>
    </BrowserRouter>
);

export default Rotas;