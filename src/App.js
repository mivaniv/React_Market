import React from "react";
import {Route, Switch, useLocation} from "react-router-dom";

import MainProduct from "./components/Shop/Product/MainProduct/MainProduct";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Shop from "./components/Shop/Shop";

function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <Switch>
                <Route exact path="/" children={<Shop/>}/>
                <Route path="/product" children={<MainProduct/>}/>
            </Switch>
        </div>

    );
}

export default App;
