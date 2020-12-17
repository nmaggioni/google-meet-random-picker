/* src/content.js */
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App'
import "./content.css"; 

/*global chrome*/
class Main extends React.Component {
    render() {
        return (
            <div className={'my-extension'}>
                <App />
            </div>
        )
    }
}



const app = document.createElement('div');
app.id = "my-extension-root";
document.body.appendChild(app);
ReactDOM.render(<Main />, app);