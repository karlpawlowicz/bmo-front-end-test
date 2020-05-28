import React from 'react';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';
import reducer from './store/reducers';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { GlobalStyle, theme } from './GlobalStyle';

import HomePage from './pages/HomePage';
import RestaurantsPage from './pages/RestaurantsPage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/:city" component={RestaurantsPage} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
