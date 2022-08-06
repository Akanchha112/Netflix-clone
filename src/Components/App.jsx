import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route, NavLink
} from "react-router-dom";
import Nav from './Nav';
import '../index.css';
import Mainbody from "./Mainbody";
import Category from './Category';
import requests from "./request";
import 'D:/visual S/web dev/reactPRactice/netflix-clone/node_modules/bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return <>
        <Router>
            <div className="main-container ">
                <Nav />
                <Mainbody/>
                <Category title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
                <Category title="Trending Now" fetchUrl={requests.fetchTrending}/>
                <Category title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
                <Category title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
                <Category title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
                <Category title="Documentries" fetchUrl={requests.fetchDocumentaries}/>
                {/* <h1>There</h1> */} 
            </div>
        </Router>
    </>
}

export default App;