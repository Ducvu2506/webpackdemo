import React from 'react';
import ReactDOM from 'react-dom';
import Img from "../public/img/cmc-global.jpg";
import "../public/style/styles.scss"

const App = () => {
    const env = process.env.NODE_ENV;
    return (
        <div>
            <h1>Hello {env}</h1>
            <p>Vu Minh Duc -DU 9</p>
            <img src={Img} ></img>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))