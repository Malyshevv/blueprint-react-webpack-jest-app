import express from 'express'
import ReactDOM from 'react-dom/server'
import {indexTemplate} from './indexTemplate';
import {App} from "../App";
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

app.get('*', (req,res) => {
    res.send(
        indexTemplate(ReactDOM.renderToString(App()))
    );
})

app.listen(PORT, () =>{
    console.log(`Server started on http://localhost:${PORT}`)
})