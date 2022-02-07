import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store/store';
// import { AppRouter } from './routers/AppRouter'; 
// import { NavigationBar } from './components/NavigationBar';
import { AppRouter } from './routes/AppRouter';


export const App = (props) => {
    return (
        <Provider store={store}>
            <AppRouter></AppRouter>    
        </Provider>
    );
};

