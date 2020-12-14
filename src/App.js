import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "./store/configureStore";
import MainDsh from "./pages/MainDash";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import Login from "./components/Login";

const history = createBrowserHistory();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/" history={history}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={MainDsh} />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
