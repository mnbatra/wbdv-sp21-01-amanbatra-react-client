import './App.css';
import CourseManager from "./components/course-manager";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"
import CourseHeader from "./components/course-navbar";
import React from "react";
import CourseEditor from "./components/course-editor/course-editor";

function App() {
  return (
      <BrowserRouter>
          <div className="container-flex">
              <CourseHeader/>
              <Route path="/" exact={true}>
              <Home/>
              </Route>
          <Route path="/courses">
              <CourseManager/>
          </Route>
         <Route path="/editor" exact={true} render={(props) => <CourseEditor {...props}/>}/>
          </div>
      </BrowserRouter>
  );
}

export default App;

