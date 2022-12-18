import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Main from "./components/main";
import NavBar from "./components/navBar";
import PageUser from "./components/pageUser";
import UserPage from "./components/user";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/pageUser/" component={PageUser} />
                <Route path="/user/:userId?" component={UserPage} />
                <Route path="/login" component={Login} />
                <Route path="/main" component={Main} />
            </Switch>
        </div>
    );
}

export default App;
