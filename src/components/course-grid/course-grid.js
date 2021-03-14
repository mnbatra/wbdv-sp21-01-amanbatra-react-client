import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({courses, deleteCourse, updateCourse}) => {
    return (<div className="mb-5">
            <div className="row pt-3">
                <table className="table">
                    <thead>
                    <tr>
                        <th>
                    <span className="float-right">
                      <i className="fas fa-2x fa-folder ml-2"/>
                      <i className="fas fa-2x fa-sort-alpha-down ml-2"/>
                      <Link to="/courses/table">
                        <i className="fas fa-list fa-2x ml-2"/>
                      </Link>
                    </span>
                        </th>
                    </tr>
                    </thead>
                </table>

                <div className="col-4 d-none d-sm-none d-md-block">
                    <h4>Recent Documents</h4>
                </div>

                <div className="col-4 d-none d-sm-none d-md-block">
                    <div className="row">
                        <h4>Owned By me&nbsp;</h4>
                        <i className="fa fa-sort-down"/>
                    </div>
                </div>

                <div className="col-4">
                </div>
            </div>

            <div className="row">
                {
                    courses.map(course =>
                        <CourseCard course={course}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse}
                                    title={course.title}/>
                    )
                }
            </div>
        </div>
    )
}
export default CourseGrid;