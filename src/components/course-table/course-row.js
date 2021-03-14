import React, {useState} from 'react';
import {Link} from "react-router-dom";

const CourseRow = (
    {
        deleteCourse,
        updateCourse,
        course,
        lastModified,
        title,
        owner
    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    const deleteTitle = () => {
        setEditing(false)

        deleteCourse(course)
    }

    return (
        <tr>
            <td>
                {
                    !editing &&
                    <Link to={`/courses/table/editor/${course._id}`}>
                        <i className="fa fa-file mr-2"/>
                        {title}
                    </Link>
                }
                {
                    editing &&
                    <input
                        onChange={(event) => setNewTitle(event.target.value)}
                        value={newTitle}
                        className="form-control"/>
                }
            </td>
            <td className="d-none d-sm-table-cell">{owner}</td>
            <td className="d-none d-sm-none d-md-none d-lg-table-cell">{lastModified}</td>
            <td>
            <span className="float-right">
                {editing && <i onClick={() => saveTitle()}
                               className="fa fa-2x fa-check">

                </i>
                }
                {!editing && <i onClick={() => setEditing(true)}
                                className="fa fa-2x fa-edit">

                </i>
                }
                {<i onClick={() => deleteTitle()}
                    className="fa fa-2x fa-trash">
                </i>}

            </span>
            </td>
        </tr>
    )
}
export default CourseRow
