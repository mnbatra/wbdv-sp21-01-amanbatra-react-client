import './App.css';
import CourseManager from "./components/course-manager";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/home"
//import CourseHeader from "./components/course-navbar";
import React from "react";
import CourseEditor from "./components/course-editor/course-editor";
import Quizzes from "./components/quizzes/quizzes-list";
import Quiz from "./components/quizzes/quiz";

function App() {
    return (
        <BrowserRouter>
            <div className="container-fluid">
                <Route path="/" exact={true} component={Home}/>
                <Switch>
                    <Route path={[
                        "/courses/:layout/edit/:courseId",
                        "/courses/:layout/edit/:courseId/modules/:moduleId",
                        "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                        "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"
                    ]} exact={true} render={(props) => <CourseEditor {...props}/>}/>
                    <Route path='/courses/:courseId/quizzes' exact={true}>
                        <Quizzes/>
                    </Route>
                    <Route path='/courses/:courseId/quizzes/:quizId' exact={true}>
                        <Quiz/>
                    </Route>
                    <Route path="/courses" component={CourseManager}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;

