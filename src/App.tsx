/**ROOT**/
import React from "react";
import { hot } from "react-hot-loader/root";
/**Project CSS**/
import './main.global.css'


function AppComponent() {
    return (<div>
        hello
    </div>)
}

export const App = hot(() => <AppComponent/>);