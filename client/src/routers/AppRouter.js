import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import DashBoard from '../components/DashBoard';
import AddBook from '../components/AddBook';
import EditBook from '../components/EditBook';
import NotFound from '../components/NotFound';

const AppRouter = () => (
    <BrowserRouter>
        <div className='container'>
          <div className='row align-items-center justify-content-center'>
            <Header />
          </div>
            <Switch>
                <Route path="/" component={DashBoard} exact={true} />
                <Route path="/add" component={AddBook} />
                <Route path="/book/:id" component={EditBook} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;