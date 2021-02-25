import React from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import {Link, Route} from "react-router-dom";
import courseService, {findAllCourses, findCourseById,deleteCourse,createCourse} from "../services/course-service";
import CourseEditor from "./course-editor/course-editor";

export default class CourseManager
  extends React.Component {
  state = {
    courses: []
  }

  componentDidMount() {
    courseService.findAllCourses()
        .then(courses => this.setState({courses}))
  }

  updateCourse = (course) => {
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

  addCourse = () => {
    const newCourse = {
      title: "New Course",
      owner: "me",
      lastModified: new Date().getMonth() + "/" + new Date().getDate() + "/" + new Date().getFullYear()
    }
    courseService.createCourse(newCourse)
        .then(actualCourse => {
          this.state.courses.push(actualCourse)
          this.setState(this.state)
        })
  }


render() {
    return(
        <div className="container pt-3">
            <Route path="/courses/table">
                <div className="row">

                    <div class="col-1">
                        <i className="fa fa-bars fa-2x pull-right"></i>
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
    className="fa fa-plus fa-2x text-danger"></i>
                        </div>
                </div>
            </Route>

            <Route path="/courses/grid">
                <div class="row">
                    <div class="col-1">
                        <i className="fa fa-bars fa-2x pull-right"></i>
                    </div>
                    <div class="col-3 d-none d-sm-none d-md-none d-lg-block">
                        <h4>Course Manager</h4>
                    </div>
                    <div class="col-7">
                        <input class="form-control bg-muted" type="text" value={this.state.value}
                               onChange={this.handleChange} placeholder="New Course Title"/>
                    </div>
                    <div class="col-1">
                        <i onClick={this.addCourse.bind(this, this.state.value)}
    className="fa fa-plus fa-2x text-danger"/>
                    </div>
                </div>
            </Route>

            <Route path="/courses/table">
                <CourseTable
                    updateCourse={this.updateCourse}
                    deleteCourse={this.deleteCourse}
                    courses={this.state.courses}/>
                <div className="fixed-bottom">
                    <i onClick={this.addCourse.bind(this, this.state.value)}
    className="fa fa-plus float-right fa-2x text-danger mb-5 mr-5"/>
                </div>
            </Route>

            <Route path="/courses/grid">
                <CourseGrid
                    updateCourse={this.updateCourse}
                    deleteCourse={this.deleteCourse}
                    courses={this.state.courses}/>
                <div className="fixed-bottom">
                    <i onClick={this.addCourse.bind(this, this.state.value)}
    className="fa fa-plus fa-2x float-right text-danger mb-5 mr-5"/>
                </div>
            </Route>

            <div></div>

            <Route path="/courses/editor"
                   render={(props) => <CourseEditor {...props}/>}>
            </Route>
        </div>
    )
}
}
