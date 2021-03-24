import React from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import {Link, Route} from "react-router-dom";
import courseService, {findCourseById,findAllCourses,deleteCourse} from "../services/course-service";
import CourseEditor from "./course-editor/course-editor";

export default class CourseManager
  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [],
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

componentDidMount = () =>
    findAllCourses()
    .then(courses => this.setState({courses}))

  updateCourse = (course) => {
        console.log(course)
    courseService.updateCourse(course._id, course)
        .then(status => {
            this.setState((prevState) => {
                let nextState = {...prevState}
                nextState.courses = prevState.courses.map(c => {
                    if(c._id === course._id) {
                        return course
                    } else {
                        return c
                    }
                })
                return nextState
            })
        })
  }

  deleteCourse = (course) => {
    courseService.deleteCourse(course._id)
        .then(status => {
          this.setState((prevState) => ({
            courses: prevState.courses.filter
            (c => c._id !== course._id)
          }))
        })
  }
  addCourse = (NewCourse) => {
    const newCourse = {
        title: NewCourse,
        owner: "me",
        lastModified: new Date().getMonth() + "/" + new Date().getDate() + "/" + new Date().getFullYear()
    }
    courseService.createCourse(newCourse)
.then(course => this.setState(
(prevState) => ({
...prevState,
    courses: [
        ...prevState.courses,
        course
    ]
})))

this.setState({value: ""});


}

handleChange(event) {
        this.setState({value: event.target.value});
    }

render() {
    return(
        <div className="container-fluid p-4">
            <Route path="/courses/table" exact>
                <div className="row">

                    <div className="col-1">
                        <i className="fa fa-bars fa-2x pull-right"/>
                    </div>

                    <div className="col-3 d-none d-sm-none d-md-none d-lg-block">
                        <h4>Course Manager</h4>
                    </div>

                    <div className="col-7">
                        <input className="form-control bg-muted" type="text" value={this.state.value}
                               onChange={this.handleChange} placeholder="New Course Title"/>
                    </div>

                    <div className="col-1">
                        <i onClick={this.addCourse.bind(this, this.state.value)}
    className="fa fa-plus fa-2x text-danger"/>
                        </div>
                </div>
            </Route>

            <Route path="/courses/grid" exact>
                <div className="row">
                    <div className="col-1">
                        <i className="fa fa-bars fa-2x pull-right"/>
                    </div>
                    <div className="col-3 d-none d-sm-none d-md-none d-lg-block">
                        <h4>Course Manager</h4>
                    </div>
                    <div className="col-7">
                        <input className="form-control bg-muted" type="text" value={this.state.value}
                               onChange={this.handleChange} placeholder="New Course Title"/>
                    </div>
                    <div className="col-1">
                        <i onClick={this.addCourse.bind(this, this.state.value)}
    className="fa fa-plus fa-2x text-danger"/>
                    </div>
                </div>
            </Route>

            <Route path="/courses/table" exact>
                <CourseTable
                    updateCourse={this.updateCourse}
                    deleteCourse={this.deleteCourse}
                    courses={this.state.courses}/>
                <div className="fixed-bottom">
                    <i onClick={this.addCourse.bind(this, this.state.value)}
    className="fa fa-plus float-right fa-2x text-danger mb-5 mr-5"/>
                </div>
            </Route>

            <Route path="/courses/grid" exact>
                <CourseGrid
                    updateCourse={this.updateCourse}
                    deleteCourse={this.deleteCourse}
                    courses={this.state.courses}/>
                <div className="fixed-bottom">
                    <i onClick={this.addCourse.bind(this, this.state.value)}
    className="fa fa-plus fa-2x float-right text-danger mb-5 mr-5"/>
                </div>
            </Route>

            <div/>

            <Route path={["/courses/:layout/editor/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets","/courses/:layout/editor/:courseId/:moduleId/:lessonId/:topicId","/courses/:layout/editor/:courseId/:moduleId/:lessonId","/courses/:layout/editor/:courseId/:moduleId","/courses/:layout/editor/:courseId"]}
                   render={(props) => <CourseEditor {...props}/>}>
            </Route>
            <Route path="/courses/table" exact><a href="#">
                <i onClick={this.addCourse}
                    className="btn btn-success"
                    style={{position: "fixed", bottom: 0, right: 0}}/>
            </a></Route>
            <Route path="/courses/grid" exact><a href="#">
                <i onClick={this.addCourse}
                    className="btn btn-success"
                    style={{position: "fixed", bottom: 0, right: 0}}/>
            </a></Route>

        </div>
    )
}
}
