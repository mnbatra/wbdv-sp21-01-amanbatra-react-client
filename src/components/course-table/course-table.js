import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable
    extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        return(
            <div class="pt-3">

                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th className="d-none d-sm-table-cell">Owned By</th>
                        <th className="d-none d-sm-none d-md-none d-lg-table-cell">Last Modified</th>
                        <th>
                    <span className="float-right">
                    <i className="fas fa-2x fa-folder ml-2"></i>
                    <i className="fas fa-2x fa-sort-alpha-down ml-2"></i>
                    <Link to="/courses/grid">
                        <i className="fas fa-2x fa-th ml-2"></i>
                    </Link>
                    </span>
                        </th>

                    </tr>
                    </thead>
                    <tbody>

                    {
                        this.props.courses.map((course, ndx) =>
                            <CourseRow
                                updateCourse={this.props.updateCourse}
                                deleteCourse={this.props.deleteCourse}
                                key={ndx}
                                course={course}
                                title={course.title}
                                owner={course.owner}
                                lastModified={course.lastModified}
                            />)
                    }
                    </tbody>
                </table>

            </div>
        )
    }
}