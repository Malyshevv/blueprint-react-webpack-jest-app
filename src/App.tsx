/**ROOT**/
import React from "react";
import { hot } from "react-hot-loader/root";
/**Project CSS**/
import './main.global.css'
/**utils**/

/**My Component**/
import {Layout} from "./shared/Layout";
import {Content} from "./shared/Content";
import {Header} from "./shared/Header";
import {Footer} from "./shared/Footer";

function AppComponent() {
    return (
        <Layout>
            <Header/>
            <Content>
                Content
            </Content>
            <Footer/>
        </Layout>
    );
}

export const App = hot(() => <AppComponent/>);