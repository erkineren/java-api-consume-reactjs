import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ContextWrapper} from "./context";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ProductTable from "./containers/Product/ProductTable";
import NoMatch from "./components/NoMatch/NoMatch";
import Login from "./containers/Login/Login";
import 'semantic-ui-css/semantic.min.css'
import Logout from "./containers/Logout/Logout";
import ProductForm from "./containers/Product/ProductForm";

ReactDOM.render(
    <ContextWrapper>
        <div>

            <BrowserRouter>
                <div>
                    <App/>
                    <Switch>

                        <Route exact path="/" component={App}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/home">
                            <div/>
                        </Route>

                        <Route exact path="/products" component={ProductTable}/>
                        <Route exact path="/products/:id" component={ProductForm}/>

                        <Route exact path="/logout" component={Logout}/>
                        <Route path="*" compoenent={NoMatch}/>


                    </Switch>
                </div>
            </BrowserRouter>
        </div>

    </ContextWrapper>
    ,
    document.getElementById('root')
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
