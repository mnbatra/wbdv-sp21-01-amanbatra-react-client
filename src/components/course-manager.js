import React from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import {Link, Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../services/course-service";

export default class CourseManager
  extends React.Component {
  state = {
    courses: []
  }

  componentDidMount() {
    courseService.findAllCourses()
        .then(courses => this.setState({courses}))
        // .then(courses => this.setState({courses: courses}))
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
    // alert("delete course " + course._id)
    courseService.deleteCourse(course._id)
        .then(status => {
          // this.setState({
          //   courses: this.state.courses.filter(c => c._id !== course._id)
          // })
          this.setState((prevState) => ({
            courses: prevState.courses.filter(c => c._id !== course._id)
          }))
        })
  }

  addCourse = () => {
    // alert('add course')
    const newCourse = {
      title: "New Course",
      owner: "me",
      lastModified: "2/10/2021"
    }
    courseService.createCourse(newCourse)
        .then(actualCourse => {
          this.state.courses.push(actualCourse)
          this.setState(this.state)
        })
  }

  render() {
    return(
      <div>
          <Link to="/">
              <i className="fas fa-2x fa-home float-right"></i>
          </Link>
          <h1>Course Manager</h1>
        <button onClick={this.addCourse}>
          Add Course
        </button>

        {/*<Route path="/courses/table" component={CourseTable}/>*/}
        <Route path="/courses/table" exact={true} >
          <CourseTable
              updateCourse={this.updateCourse}
              deleteCourse={this.deleteCourse}
              courses={this.state.courses}/>
        </Route>
        {/*<Route path="/courses/grid" component={CourseGrid}/>*/}
        <Route path="/courses/grid" exact={true} >
          <CourseGrid courses={this.state.courses}/>
        </Route>
        {/*<CourseTable courses={this.state.courses}/>*/}
        {/*<CourseGrid courses={this.state.courses}/>*/}
      </div>
    )
  }
}
// export default CourseManager
