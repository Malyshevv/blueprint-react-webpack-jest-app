import express from 'express'
import ReactDOM from 'react-dom/server'
import {indexTemplate} from './indexTemplate';
import {App} from "../App";
import axios from "axios";
import compression from 'compression'
import helmet from "helmet";

const PORT = process.env.PORT || 3000
const isDev = process.env.NODE_ENV != 'production'
const app = express();

app.use('/static', express.static('./dist/client'))
if(!isDev) {
    app.use(compression())
    app.use(helmet())
}

app.get('/auth', (req,res) => {
    let urlApi = "https://www.reddit.com/api/v1/access_token"
    let grant_type = "authorization_code"
    let urlRedirect = "https://redditappsb.herokuapp.com/auth"
    let code = req.query.code

    let username = process.env.CLIENT_ID
    let password = process.env.CLIENT_SECRET

    axios.post(
        urlApi,
        `grant_type=${grant_type}&code=${code}&redirect_uri=${urlRedirect}`,
        {
            auth: {username: username, password: password},
            headers: { 'Content-type': 'application/x-www-form-urlencoded' }
        }
    )
        .then(({ data })=> {
            res.send(
                indexTemplate(ReactDOM.renderToString(App()), data['access_token'])
            );
        })
        .catch(console.log)
})

app.get('*', (req,res) => {
    res.send(
        indexTemplate(ReactDOM.renderToString(App()))
    );
})

app.listen(PORT, () =>{
    console.log(`Server started on http://localhost:${PORT}`)
})