import './App.css';
import CourseManager from "./components/course-manager";
//import CourseEditor from "./components/course-editor/course-editor";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"
import CourseHeader from "./components/course-navbar";
import React from "react";
import CourseEditor from "./components/course-editor/course-editor";

function App() {
  return (
      <BrowserRouter>
          <div className="container-fluid">
              <CourseHeader/>
              <Route path="/" exact={true}>
              <Home/>
          </Route>
          <Route path="/courses">
              <CourseManager/>
          </Route>
          </div>
         <Route path="/editor" exact={true} render={(props) => <CourseEditor {...props}/>}/>
      </BrowserRouter>
  );
}

export default App;

