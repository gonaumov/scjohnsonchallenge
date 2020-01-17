import React from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./components/Home";
import Products from "./components/Products";
import Fortune from "./components/Fortune";
import Answer from "./components/Answer";

const App = ({store}) => (
    <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/products/:productName([a-zA-Z]+)" component={Products}/>
                <Route path="/fortune/" component={Fortune}/>
                <Route path="/answer/" component={Answer}/>
                <Route path="/" component={Home}/>
            </Switch>
        </Router>
    </Provider>
)

export default App;


