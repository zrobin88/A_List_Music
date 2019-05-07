import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AList from "../../pages/AList";
//import "./style.css";

function AListBtn(props) {
  return (
    <Router>
         <Route exact path="/search" component={AList} />
         <button onClick={props.onClick} type="button" className="btn btn-success float-left">View A List</button>

    </Router>
  );
}

export default AListBtn;